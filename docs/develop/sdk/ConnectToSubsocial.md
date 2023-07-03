---
id: connectToSubsocial
title: Connect To Subsocial
displayed_sidebar: developSidebar
---

<head>
  <title>Connecting to Subsocial Blockchain | SDK Guide</title>
</head>

**This section covers how to connect to the Subsocial blockchain using our JS SDK.**

After the [Configuration](/docs/develop/sdk/configuration) settings you can create an instance of the Subsocial api, so that you can have access to all blockchain methods:

### Initializing The APIs

You need to initialize the Subsocial Api and set authorizations for saving content on IPFS with the following syntax:

```typescript
import { SubsocialApi } from "@subsocial/api";
import { config } from "config";

const initSubsocialApi = async () => {
  const api = await SubsocialApi.create(config);
  return api;
};

// Required only for Testnet.
const authHeader = 'c3ViLTVGQTluUURWZzI2N0RFZDhtMVp5cFhMQm52TjdTRnhZd1Y3bmRxU1lHaU45VFRwdToweDEwMmQ3ZmJhYWQwZGUwNzFjNDFmM2NjYzQzYmQ0NzIxNzFkZGFiYWM0MzEzZTc5YTY3ZWExOWM0OWFlNjgyZjY0YWUxMmRlY2YyNzhjNTEwZGY4YzZjZTZhYzdlZTEwNzY2N2YzYTBjZjM5OGUxN2VhMzAyMmRkNmEyYjc1OTBi';


// Use this ipfs object, to set authHeader for writing on Crust IPFS cluster.
api.ipfs.setWriteHeaders({
  authorization: "Basic " + authHeader,
});
```

:::info Creating Custom Auth Header for CRUST. 
In order to create a custom token from your own mneomic follow the steps:

```ts
  import { generateCrustAuthToken } from '@subsocial/api'

  const setupApi = () => {
    const authHeader = generateCrustAuthToken(process.env.CUSTOM_MNEMONIC)

    // Use this ipfs object, to set authHeader for writing on Crust IPFS cluster.
    api.ipfs.setWriteHeaders({
      authorization: "Basic " + authHeader,
    });
  }
```
:::

In order to deploy content on your own ipfs node, just change the property ipfsNodeUrl in the configuration settings

> Before going deep in the SDK you can try out the code in our [Playground](https://play.subsocial.network).
