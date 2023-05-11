---
id: apiTypes
title: API Types
description: Learn how you can use various API Types like Substrate, IPFS, General, etc. that are provided by the Subsocial JavaScript SDK.
keywords: [API Types, Web3 Social, Blockchain, Developers, Subsocial]
displayed_sidebar: developSidebar
---

<head>
  <title>Understanding the API Types of Subsocial JS SDK</title>
</head>

## General API

Subsocial API creates a new connection to the blockchain and provides a list of methods that help in fetching and writing data on substrate pallets. It uses proper types for javascript and is easy for developing most of the social dapps.

```
const api = new SubsocialApi.create(CONFIG);
```

> Check SubsocialApi types here: [*SubsocialApi*](https://js-sdk-api.subsocial.network/classes/api_src_subsocial.SubsocialApi.html)


## Base Subsocial API

The base SubsocialApi provides you with detailed methods for interacting with Subsocial blockchain. 

Using this class, you can get all the data of posts, spaces and profiles from IPFS and the blockchain's storage with appropriate methods.

```
You can access it from the SubsocialApi object like this: `api.base`.
```

## SubsocialSubstrateApi

SubsocialSubstrateApi is a wrapper for connecting to a Subsocial Node with functions from Subsocial Pallets wrapped in convenient methods to call.

```
SubsocialSubstrateApi(props: SubstrateApiProps): SubsocialSubstrateApi
```

## SubsocialIpfsApi

Aggregated API to work with IPFS: This gets the contents of spaces, posts, and profiles.

```
SubsocialIpfsApi(props: SubsocialIpfsProps): SubsocialIpfsApi
```

## Off-chain

Off-chain is a storage where data is built on the basis of blockchain events. This allows you to conveniently perform work that the blockchain itself does not allow.

It saves text data of blogs, posts and comments to IPFS, builds user feeds and notifications in Postgres, 
and supports full text search by indexing text data into an ElasticSeach database.

> [off-chain repository](https://github.com/dappforce/subsocial-offchain/)

## IPFS

The [InterPlanetary File System (IPFS)](https://docs.ipfs.io/concepts/) is a decentralized storage network commonly used by blockchain projects looking for a storage solution. It is similar to a torrent network where users download content to their machines, and upload it to people that wish to access it. IPFS node operators are able to choose what content they host on their node. Subsocial uses IPFS for multimedia storage.

>[Learn more in the documentation](https://docs.ipfs.io/concepts/)
