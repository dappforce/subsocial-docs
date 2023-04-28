---
id: testnet
title: For Testnet
displayed_sidebar: developSidebar
---

<head>
  <title>How to build dapps on the Subsocial testnet</title>
</head>

**This section covers information about Subsocial's testnet i.e. SoonSocialX.**

Subsocial provides developers with a new and fast testnet (named Soonsocial) for building and testing your social dapps. It enables you to start building and deploy your dapps on our testnet, and invite your early community to start using it without need to buy real SUB tokens on the mainnet.

### Why do we need a testnet?

Building dapps on Subsocial is simple and quick but it requires your users to own some $SUB tokens. As of now, we haven't listed $SUB so people can't buy tokens yet. It's important to build a community around your social Dapp before going to the mainnet, and the testnet lets you do that.

Tokens on the testnet can be received by writing the following command in our Discord server.

Run this command under `#testnet-faucet` : 
```
  !drip <YOUR_POLKADOT_JS_ADDRESS> 
```

Join our Discord server [here](https://discord.gg/w2Rqy2M).


### SDK Configuration

```ts
const config = {
  substrateNodeUrl: "wss://rco-para.subsocial.network",
  ipfsNodeUrl: "https://gw.crustfiles.app",
};
```

Read more [here](/docs/develop/sdk/configuration).

### GraphQL Configuration

Our GraphQL API endpoint: 
https://squid.subsquid.io/soonsocial/graphql

```ts
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const API_URL = 'https://squid.subsquid.io/soonsocial/graphql'

/* create the API client */
export const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache()
})
```

:::note
Detailed docs on GraphQL API & query options can be found easily on the API Endpoint [here](https://squid.subsquid.io/soonsocial/graphql).
:::

Read more details [here](/docs/develop/subsocial-graqhql).


## How many tokens will I get?

The Discord bot will grant you **10 SOON** tokens to test on the Soonsocial solochain. 

You can check your balances [here](https://polkadot.js.org/apps/#/accounts) by choosing the Soonsocial network from the list of test networks on the left.

> **NOTE**: If you face any issues while using the testnet, please let us know in our [Discord server](https://discord.gg/w2Rqy2M) or [Telegram developer chat](https://t.me/+ZzvLu0ZfkQwxNGQy).