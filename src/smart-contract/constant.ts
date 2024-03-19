import { Address, TonClient } from "ton";

export const client = new TonClient({
  endpoint: `https://testnet.toncenter.com/api/v2/jsonRPC`,
  apiKey: process.env.REACT_APP_TON_API_KEY,
});
export const contractAddresses = {
  address1: "EQBY6u-mHDpQX6-r1voFOEvOoG_jJoaDcfhEvwBHcORVMJiV",
  address2: "EQA6G_O2Ezj2dGYxpI3s_7DzogFfbzKcNBinSIyjaciIgZgQ",
};


//  export const contractAddress = Address.parse(address);
