---
id: overview
title: Overview
---
Subsocial is a platform that allows anyone to launch their own decentralized censorship-resistant social network.

## Example code

Here we are providing example code for interacting with subsocial sdk.

Start with installing @subsocial/api

```
yarn add @subsocial/api
```

```typescript
import { newFlatSubsocialApi } from '@subsocial/api'

const initSubsocialApi = async () => {
  
    const api = await newFlatSubsocialApi({
      substrateNodeUrl, // http://127.0.0.1:9944
      offchainUrl,  // http://127.0.0.1:3001
      ipfsNodeUrl // http://127.0.0.1:8080
    })
  
    return api
}
  
const flatApi = initSubsocialApi()

// find a space
const space = flatApi.findSpace({ id: '1' })

// find a post
const post = flatApi.findPost({ id: '1' })

```

Lets explain the example. We first connected to subsocial using newFlatSubsocialApi function which needs the substrate node url, offchain url and ipfs node url. After initialisation flatApi can be used to retrive data from the node. We have fetched a space and post by id. You can learn more about these terms below and in [Glossary](/docs/glossary/overview)
