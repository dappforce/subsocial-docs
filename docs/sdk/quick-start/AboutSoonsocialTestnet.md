---
id: testnet
title: About SubSocial Testnet
---

Subsocial provides developer with a new and fast testnet for building and testing your social Dapps. It enables you to start building and deploy your dapp on our testnet and invite your early community to start using it without need to buy real Sub tokens on mainnet.

### Why we need a testnet?

Building Dapps on Subsocial is simple and quick but it requires your users to own some $SUB tokens. As of now, we haven't listed $SUB so people can't buy tokens yet. Since, It's important for you to build a community around your social Dapp before going to mainnet and the testnet can help you achieve it. 

Tokens on testnet can be recieved by writing the following command in our discord server.

Run this command under `#faucet` : 
```
  !drip <YOUR_POLKADOT_JS_ADDRESS> 
```

Join our discord server [here](https://discord.gg/w2Rqy2M).

## How much tokens will I get?

The discord bot will grant you **10 SUB** tokens to test on the Soonsocial solochain. 

You can check your balances [here](https://polkadot.js.org/apps/#/accounts) by choosing the SoonSocial network from the test networks list on the left.

## SDK Configuration 

To integrate the testnet with your SubSocial Dapp, you have to add these details in the code:

```javascript
  // config.js

  export const SDK_CONFIG = {
    substrateNodeUrl: 'wss://testnet.subsocial.network',    
    ipfsNodeUrl: 'https://staging.subsocial.network/ipfs'
  }
```

```javascript
  // index.js

  import { newFlatSubsocialApi } from '@subsocial/api'
  import { SDK_CONFIG } from 'config'

  const initSubsocialApi = async () => {
      const api = await newFlatSubsocialApi(
        SDK_CONFIG
      )
      return api
  }
```

> **NOTE**: If you face any issues while using the testnet, please report at our [Discord](https://discord.gg/w2Rqy2M) or [Telegram](https://t.me/+ZzvLu0ZfkQwxNGQy).