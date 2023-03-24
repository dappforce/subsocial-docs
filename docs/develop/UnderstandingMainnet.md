---
id: mainnet
title: For Mainnet
displayed_sidebar: developSidebar
---

**This section covers information about Subsocial's Mainnet i.e. SubsocialX.**

Subsocial mainnet is the parachain on Kusama network that holds main social profiles of the people and can be used on the [Polkaverse dapp](https://polkaverse.com). 

### SDK Configuration

```ts
const config = {
  substrateNodeUrl: "wss://para.f3joule.space",
  ipfsNodeUrl: "https://ipfs.subsocial.network",
};
```

Read more [here](/docs/develop/sdk/configuration).

### GraphQL Configuration

Our GraphQL API endpoint: 
https://squid.subsquid.io/subsocial/graphql

```ts
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const API_URL = 'https://squid.subsquid.io/subsocial/graphql'

/* create the API client */
export const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache()
})
```

:::note
Detailed docs on GraphQL API & query options can be found easily on the API Endpoint [here](https://squid.subsquid.io/subsocial/graphql).
:::

Read more details [here](/docs/develop/subsocial-graqhql).

