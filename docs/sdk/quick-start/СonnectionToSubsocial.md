---
id: connection
title: Connection to Subsocial 
---

## getSubstrateApi()

getSubstrateApi() is [ApiPromise](https://polkadot.js.org/docs/api/start/create) that connecting to a local node, retrieving data from the Node and chain and execute transactions on the chain.

```typescript
import { getSubstrateApi } from '@subsocial/api'

const api = getSubstrateApi({ endpoint: substrateUrl })
```

>[Learn more in the documentation](https://polkadot.js.org/docs/api)

## FlatSubsocialApi

Connecting by FlatSubsocialApi.

```javascript
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
```
