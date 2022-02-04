---
id: connection
title: How to connect to Subsocial 
---

You can connect to subsocial using `@subsocial/api` libraries.

## getSubstrateApi()

getSubstrateApi() is polkadot.js [ApiPromise](https://polkadot.js.org/docs/api/start/create) that provide a connection to a blockchain RPC node, retriev data from the chain and execute transactions on the chain.

```typescript
import { getSubstrateApi } from '@subsocial/api'

const api = getSubstrateApi({ endpoint: substrateUrl })
```

>[Learn more in the documentation](https://polkadot.js.org/docs/api)

## FlatSubsocialApi

Connect using FlatSubsocialApi.

```typescript
import { newFlatSubsocialApi } from '@subsocial/api'

const initSubsocialApi = async () => {
  
    const api = await newFlatSubsocialApi({
      substrateNodeUrl, // Substrate node URL e.g. http://127.0.0.1:9944
      offchainUrl,      // Offchain URL e.g. http://127.0.0.1:3001
      ipfsNodeUrl       // IPFS node URL e.g. http://127.0.0.1:8080
    })
  
    return api
}

// connect to subsocial  
const flatApi = initSubsocialApi()

```
