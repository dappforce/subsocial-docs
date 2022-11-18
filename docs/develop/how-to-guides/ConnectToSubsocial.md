---
id: connectToSubsocial
title: Connect To Subsocial
displayed_sidebar: developSidebar
---
**This section covers how to connect to the Subsocial blockchain using our JS SDK.**

After the [Configuration](/how-to-guides/configuration) settings you can create an instance of the Subsocial api, so that you can have access to all blockchain methods:


### Initializing The APIs

You need to initialize the Subsocial Api and set authorizations for saving content on IPFS with the following syntax:

```typescript
import { SubsocialApi } from '@subsocial/api'
import { config } from 'config'
import { generateCrustAuthToken } from '@subsocial/api/utils/ipfs'

  const initSubsocialApi = async () => {
      const api = await SubsocialApi.create(config)
      return api
  }

  const authHeader = generateCrustAuthToken('bottom drive obey lake curtain smoke basket hold race lonely fit walk//Alice')

  // Use this ipfs object, to set authHeader for writing on Crust IPFS cluster.
  api.ipfs.setWriteHeaders({
    authorization: 'Basic ' + authHeader
  })

```

In order to deploy content on your own ipfs node, just change the property ipfsNodeUrl in the configuration settings



> Before going depp in the SDK you can try out the code in our [Playground](https://play.subsocial.network).

