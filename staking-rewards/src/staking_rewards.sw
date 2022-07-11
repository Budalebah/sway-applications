contract;

dep staking_rewards_abi;
dep staking_rewards_errors;
dep staking_rewards_events;

use std::{
    address::Address,
    assert::require,
    chain::auth::msg_sender,
    constants::ZERO_B256,
    contract_id::ContractId,
    identity::Identity,
    logging::log,
    result::Result,
    storage::StorageMap,
};

use staking_rewards_abi::StakingRewards;
use staking_rewards_errors::*;
use staking_rewards_events::*;

storage {
    rewards_token: ContractId = ContractId {
        value: 0x0000000000000000000000000000000000000000000000000000000000000000,
    },
    staking_token: ContractId = ContractId {
        value: 0x0000000000000000000000000000000000000000000000000000000000000000,
    },
    period_finish: u64 = 0,
    reward_rate: u64 = 0,
    rewards_duration: u64 = 0,
    last_update_time: u64 = 1,
    reward_per_token_stored: u64 = 0,
    user_reward_per_token_paid: StorageMap<Identity,
    u64> = StorageMap {
    },
    rewards: StorageMap<Identity,
    u64> = StorageMap {
    },
    total_supply: u64 = 0,
    balances: StorageMap<Identity,
    u64> = StorageMap {
    },
    rewards_distribution: Identity = Identity::Address(Address {
        value: 0x0000000000000000000000000000000000000000000000000000000000000000,
    },
    ), 
}

impl StakingRewards for Contract {
    #[storage(read)]fn balance_of(account: Identity) -> u64 {
        storage.balances.get(account)
    }

    #[storage(read)]fn earned(account: Identity) -> u64 {
        _earned(account)
    }

    #[storage(read)]fn get_reward_for_duration() -> u64 {
        storage.reward_rate * storage.rewards_duration
    }

    #[storage(read)]fn last_time_reward_applicable() -> u64 {
        _last_time_reward_applicable()
    }

    #[storage(read)]fn reward_per_token() -> u64 {
        _reward_per_token()
    }

    #[storage(read)]fn rewards_distribution() -> Identity {
        storage.rewards_distribution
    }

    #[storage(read)]fn rewards_token() -> ContractId {
        storage.rewards_token
    }

    #[storage(read)]fn total_supply() -> u64 {
        storage.total_supply
    }

    #[storage(read, write)]fn exit() {
        _withdraw(storage.balances.get(msg_sender().unwrap()));
        _get_reward();
    }

    #[storage(read, write)]fn get_reward() {
        _get_reward();
    }

    #[storage(read, write)]fn stake(amount: u64) {
        require(amount > 0, StakingRewardsError::StakeZero);

        let sender = msg_sender().unwrap();
        _update_reward(sender);

        storage.total_supply += amount;
        storage.balances.insert(sender, storage.balances.get(sender) + amount);
        // todo transfer
        log(Staked {
            user: sender, amount: amount
        });
    }

    #[storage(read, write)]fn withdraw(amount: u64) {
        _withdraw(amount)
    }
}

#[storage(read)]fn _earned(account: Identity) -> u64 {
    storage.balances.get(account) * (_reward_per_token() - storage.user_reward_per_token_paid.get(account)) / 1_000_000_000 + storage.rewards.get(account)
}

#[storage(read)]fn _last_time_reward_applicable() -> u64 {
    // TODO (functionality): use block timestamp once implemented
    let timestamp = 0;
    let period_finish = storage.period_finish;
    // TODO (code quality): replace with a generic min function once implemented
    match timestamp < period_finish {
        true => {
            timestamp
        },
        false => {
            period_finish
        },
    }
}

#[storage(read)]fn _reward_per_token() -> u64 {
    let reward_per_token = storage.reward_per_token_stored;
    if (storage.total_supply == 0) {
        return reward_per_token;
    }

    reward_per_token + _last_time_reward_applicable() - storage.last_update_time * storage.reward_rate * 1_000_000_000 / storage.total_supply
}

#[storage(read, write)]fn _get_reward() {
    let sender = msg_sender().unwrap();
    _update_reward(sender);

    let reward = storage.rewards.get(sender);

    if (reward > 0) {
        storage.rewards.insert(sender, 0);
        // todo transfer
        log(RewardPaid {
            user: sender, reward: reward
        });
    }
}

#[storage(read, write)]fn _withdraw(amount: u64) {
    require(amount > 0, StakingRewardsError::WithdrawZero);

    let sender = msg_sender().unwrap();
    _update_reward(sender);

    storage.total_supply -= amount;
    storage.balances.insert(sender, storage.balances.get(sender) - amount);
    // todo transfer
    log(Withdrawn {
        user: sender, amount: amount
    });
}

#[storage(read, write)]fn _update_reward(account: Identity) {
    storage.rewards.insert(account, _earned(account));
    storage.user_reward_per_token_paid.insert(account, storage.reward_per_token_stored);
}
