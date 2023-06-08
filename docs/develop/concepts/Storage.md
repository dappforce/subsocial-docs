---
id: storage
title: Storage
description: Content Storage 
displayed_sidebar: developSidebar
---

Subsocial leverages **CRUST IPFS** as its default storage solution. CRUST IPFS is a payment-enabled layer built on top of the IPFS network. By using CRUST IPFS, content uploaded to the network can be stored securely for extended periods, ensuring its availability and longevity with minimal costs.

## Data Stored on IPFS
Subsocial stores various types of data on CRUST IPFS, including user-generated content such as posts, images, videos, and other media files. The decentralized nature of IPFS ensures that these files are distributed across the network, making them resilient to censorship and providing redundancy for data durability.

## Flexibility in IPFS Service Selection
While Subsocial integrates CRUST IPFS as the default storage solution, it also allows developers to configure other IPFS services within the SDK when necessary. 

You have the freedom to choose alternative IPFS services such as [Filebase](https://filebase.com), [Pinata](https://www.pinata.cloud/), or any other compatible provider. This flexibility empowers users to customize their storage options based on their specific needs and preferences.

## Configuration
To configure the IPFS node URL in the SDK, modify the network config object. 

Specifically, update the **ipfsNodeUrl** property to the desired IPFS service URL. 

Here are some examples:

- Default configuration using Subsocial hosted CRUST IPFS:

```ts
  const config = {
    substrateNodeUrl: "wss://para.f3joule.space",
    ipfsNodeUrl: "https://ipfs.subsocial.network",
  };
```

- Using Filebase service, read in detail from their [docs](https://docs.filebase.com/).

```ts
  const config = {
    substrateNodeUrl: "wss://para.f3joule.space",
    ipfsNodeUrl: "https://ipfs.filebase.com",
  };
```

- Using Pinata service, read in detail from their [docs](https://docs.pinata.cloud/sdks).

```ts
  const config = {
    substrateNodeUrl: "wss://para.f3joule.space",
    ipfsNodeUrl: "https://api.pinata.cloud",
  };
```

- Or Using Infura Service:

```ts
  const config = {
    substrateNodeUrl: "wss://para.f3joule.space",
    ipfsNodeUrl: "https://ipfs.infura.io",
  };
```

Therefore, you can plug-in any IPFS service of your choice with the Subsocial JS SDK. And it will work like a charm.



