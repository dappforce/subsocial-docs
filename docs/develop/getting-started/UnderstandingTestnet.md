---
id: testnet
title: Understanding The Testnet
displayed_sidebar: developSidebar
---

**This section covers information about Subsocial's testnet i.e. SoonSocialX.**

Subsocial provides developers with a new and fast testnet (named Soonsocial) for building and testing your social Dapps. It enables you to start building and deploy your dapps on our testnet, and invite your early community to start using it without need to buy real SUB tokens on the mainnet.

### Why do we need a testnet?

Building Dapps on Subsocial is simple and quick but it requires your users to own some $SUB tokens. As of now, we haven't listed $SUB so people can't buy tokens yet. It's important to build a community around your social Dapp before going to the mainnet, and the testnet lets you do that.

Tokens on the testnet can be received by writing the following command in our Discord server.

Run this command under `#testnet-faucet` : 
```
  !drip <YOUR_POLKADOT_JS_ADDRESS> 
```

Join our Discord server [here](https://discord.gg/w2Rqy2M).

## How many tokens will I get?

The Discord bot will grant you **10 SOON** tokens to test on the Soonsocial solochain. 

You can check your balances [here](https://polkadot.js.org/apps/#/accounts) by choosing the Soonsocial network from the list of test networks on the left.

## SDK Configuration 

To integrate the testnet with your Subsocial Dapp, you have to add these details in the code:

```javascript
  // config.js

  export const TESTNET_CONFIG = {
  substrateNodeUrl: 'wss://rco-para.subsocial.network',
  ipfsNodeUrl: 'https://crustwebsites.net',
  useServer: {
    httpRequestMethod: 'get'
  }
}

```

```javascript
  // index.js

  import { SubsocialApi } from '@subsocial/api'
  import { TESTNET_CONFIG } from 'config'
  import { generateCrustAuthToken } from '@subsocial/api/utils/ipfs'

  const initSubsocialApi = async () => {
      const api = await SubsocialApi.create(
        TESTNET_CONFIG
      )
      return api
  }
  const authHeader = generateCrustAuthToken('bottom drive obey lake curtain smoke basket hold race lonely fit walk//Alice')

  // Use this ipfs object, to set authHeader for writing on Crust IPFS cluster.
  api.ipfs.setWriteHeaders({
    authorization: 'Basic ' + authHeader
  })

```

> **NOTE**: If you face any issues while using the testnet, please let us know in our [Discord server](https://discord.gg/w2Rqy2M) or [Telegram developer chat](https://t.me/+ZzvLu0ZfkQwxNGQy).