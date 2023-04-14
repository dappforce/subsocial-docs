---
id: xSocial
title: For xSocial
displayed_sidebar: developSidebar
---

**This section covers information about Subsocial's latest solochain with 2 seconds block time i.e. xSocial.**

xSocial is an experimental blockchain built to provide an environment for innovative Web3 social features before they are deployed on the Subsocial mainnet.

This blockchain functions as a standalone Substrate chain (instead of a parachain on Polkadot or Kusama), allowing it to have 2 second block times, and ensuring no serious damage can be caused by bugs.

Developers building on Subsocial can use xSocial to experiment with Subsocial's pallets in a safe environment. You can easily access xSocial from the polkadot.js apps page [here](https://polkadot.js.org/apps/?rpc=wss://xsocial.subsocial.network).

xSocial currently hosts the [Grill.chat](https://grill.chat) application, which needs speed due to the nature of messaging applications, though it will also be ported to the Subsocial mainnet in the future.

> xSocial does not yet have an indexer setup up. 


### SDK Configuration

```ts
const config = {
  substrateNodeUrl: "wss://xsocial.subsocial.network",
  ipfsNodeUrl: "https://gw.crustfiles.app",
};
```

Read more [here](/docs/develop/sdk/configuration).

In case you face any issues, please report [here](https://t.me/+ZzvLu0ZfkQwxNGQy).
