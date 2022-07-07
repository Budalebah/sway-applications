/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  Interface,
  FunctionFragment,
  DecodedValue,
  Contract,
  Overrides,
  BigNumberish,
  BytesLike,
  CallResult,
  ScriptTransactionRequest,
  TransactionResult,
} from 'fuels';

export type AddressInput = { value: string };

export type Address = { value: string };

export type ContractIdInput = { value: string };

export type ContractId = { value: string };

export type IdentityInput = {
  Address: AddressInput;
  ContractId: ContractIdInput;
};

export type Identity = { Address: Address; ContractId: ContractId };

export type AssetInput = { amount: BigNumberish; id: ContractIdInput };

export type Asset = { amount: bigint; id: ContractId };

export type OptionInput = { Some: ContractIdInput; None: any };

export type Option = { Some: ContractId; None: any };

export type UserInput = {
  approved: boolean;
  asset: OptionInput;
  exists: boolean;
  deposited: boolean;
};

export type User = {
  approved: boolean;
  asset: Option;
  exists: boolean;
  deposited: boolean;
};

export type UserEscrowsInput = {
  active: [BigNumberish];
  completed: [BigNumberish];
};

export type UserEscrows = { active: [bigint]; completed: [bigint] };

export type StateInput = { Pending: any; Completed: any };

export type State = { Pending: any; Completed: any };

export type EscrowDataInput = {
  approval_count: BigNumberish;
  assets: any;
  state: StateInput;
  threshold: BigNumberish;
  users: any;
};

export type EscrowData = {
  approval_count: bigint;
  assets: any;
  state: State;
  threshold: bigint;
  users: any;
};

interface EscrowAbiInterface extends Interface {
  submit: {
    constructor: FunctionFragment;
    create_escrow: FunctionFragment;
    deposit: FunctionFragment;
    approve: FunctionFragment;
    withdraw: FunctionFragment;
    user_data: FunctionFragment;
    user_escrows: FunctionFragment;
    escrow_data: FunctionFragment;
  };
  submitResult: {
    constructor: FunctionFragment;
    create_escrow: FunctionFragment;
    deposit: FunctionFragment;
    approve: FunctionFragment;
    withdraw: FunctionFragment;
    user_data: FunctionFragment;
    user_escrows: FunctionFragment;
    escrow_data: FunctionFragment;
  };
  dryRun: {
    constructor: FunctionFragment;
    create_escrow: FunctionFragment;
    deposit: FunctionFragment;
    approve: FunctionFragment;
    withdraw: FunctionFragment;
    user_data: FunctionFragment;
    user_escrows: FunctionFragment;
    escrow_data: FunctionFragment;
  };
  dryRunResult: {
    constructor: FunctionFragment;
    create_escrow: FunctionFragment;
    deposit: FunctionFragment;
    approve: FunctionFragment;
    withdraw: FunctionFragment;
    user_data: FunctionFragment;
    user_escrows: FunctionFragment;
    escrow_data: FunctionFragment;
  };
  simulate: {
    constructor: FunctionFragment;
    create_escrow: FunctionFragment;
    deposit: FunctionFragment;
    approve: FunctionFragment;
    withdraw: FunctionFragment;
    user_data: FunctionFragment;
    user_escrows: FunctionFragment;
    escrow_data: FunctionFragment;
  };
  simulateResult: {
    constructor: FunctionFragment;
    create_escrow: FunctionFragment;
    deposit: FunctionFragment;
    approve: FunctionFragment;
    withdraw: FunctionFragment;
    user_data: FunctionFragment;
    user_escrows: FunctionFragment;
    escrow_data: FunctionFragment;
  };
  prepareCall: {
    constructor: FunctionFragment;
    create_escrow: FunctionFragment;
    deposit: FunctionFragment;
    approve: FunctionFragment;
    withdraw: FunctionFragment;
    user_data: FunctionFragment;
    user_escrows: FunctionFragment;
    escrow_data: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'constructor', values: [IdentityInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'create_escrow', values: [any, any]): Uint8Array;
  encodeFunctionData(functionFragment: 'deposit', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'approve', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'withdraw', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(
    functionFragment: 'user_data',
    values: [BigNumberish, IdentityInput]
  ): Uint8Array;
  encodeFunctionData(functionFragment: 'user_escrows', values: [IdentityInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'escrow_data', values: [BigNumberish]): Uint8Array;

  decodeFunctionData(functionFragment: 'constructor', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'create_escrow', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'deposit', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'approve', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'withdraw', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'user_data', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'user_escrows', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'escrow_data', data: BytesLike): DecodedValue;
}

export class EscrowAbi extends Contract {
  interface: EscrowAbiInterface;
  submit: {
    constructor(
      owner: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    create_escrow(
      users: any,
      assets: any,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    deposit(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    approve(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    withdraw(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    user_data(
      identifier: BigNumberish,
      user: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<User>;

    user_escrows(
      user: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<UserEscrows>;

    escrow_data(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<EscrowData>;
  };
  submitResult: {
    constructor(
      owner: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    create_escrow(
      users: any,
      assets: any,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    deposit(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    approve(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    withdraw(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    user_data(
      identifier: BigNumberish,
      user: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    user_escrows(
      user: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    escrow_data(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;
  };
  dryRun: {
    constructor(
      owner: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    create_escrow(
      users: any,
      assets: any,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    deposit(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    approve(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    withdraw(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    user_data(
      identifier: BigNumberish,
      user: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<User>;

    user_escrows(
      user: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<UserEscrows>;

    escrow_data(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<EscrowData>;
  };
  dryRunResult: {
    constructor(
      owner: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    create_escrow(
      users: any,
      assets: any,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    deposit(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    approve(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    withdraw(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    user_data(
      identifier: BigNumberish,
      user: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    user_escrows(
      user: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    escrow_data(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;
  };
  prepareCall: {
    constructor(
      owner: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    create_escrow(
      users: any,
      assets: any,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    deposit(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    approve(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    withdraw(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    user_data(
      identifier: BigNumberish,
      user: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    user_escrows(
      user: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;

    escrow_data(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ScriptTransactionRequest>;
  };
  simulate: {
    constructor(
      owner: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    create_escrow(
      users: any,
      assets: any,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    deposit(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    approve(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    withdraw(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    user_data(
      identifier: BigNumberish,
      user: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<User>;

    user_escrows(
      user: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<UserEscrows>;

    escrow_data(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<EscrowData>;
  };
  simulateResult: {
    constructor(
      owner: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    create_escrow(
      users: any,
      assets: any,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    deposit(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    approve(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    withdraw(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    user_data(
      identifier: BigNumberish,
      user: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    user_escrows(
      user: IdentityInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    escrow_data(
      identifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;
  };

  constructor(
    owner: IdentityInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  create_escrow(
    users: any,
    assets: any,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  deposit(
    identifier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  approve(
    identifier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  withdraw(
    identifier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  user_data(
    identifier: BigNumberish,
    user: IdentityInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<User>;

  user_escrows(
    user: IdentityInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UserEscrows>;

  escrow_data(
    identifier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EscrowData>;
}
