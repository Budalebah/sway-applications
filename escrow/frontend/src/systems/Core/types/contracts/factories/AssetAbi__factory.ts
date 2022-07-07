/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, Wallet } from 'fuels';
import { Interface, Contract } from 'fuels';
import type { AssetAbi, AssetAbiInterface } from '../AssetAbi';
const _abi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'amount',
        type: 'u64',
        components: null,
      },
      {
        name: 'recipient',
        type: 'struct Address',
        components: [
          {
            name: 'value',
            type: 'b256',
            components: null,
          },
        ],
      },
    ],
    name: 'mint_and_send_to_address',
    outputs: [
      {
        name: '',
        type: 'bool',
        components: null,
      },
    ],
  },
];

export class AssetAbi__factory {
  static readonly abi = _abi;
  static createInterface(): AssetAbiInterface {
    return new Interface(_abi) as AssetAbiInterface;
  }
  static connect(id: string, walletOrProvider: Wallet | Provider): AssetAbi {
    return new Contract(id, _abi, walletOrProvider) as AssetAbi;
  }
}
