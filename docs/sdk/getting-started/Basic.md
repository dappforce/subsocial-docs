---
id: basic
title: Basic
---

## Flat API

Flat API creates a new connection to the Flat Subsocial API (with a wrapper which returns flat structs).
Thus, using the Flat, we abstract from the blockchain and can use the usual JavaScript types.

```
FlatSubsocialApi(props: NewSubsocialApiProps): FlatSubsocialApi
```

>🆃 NewSubsocialApiProps: Omit<[*SubsocialApiProps*](https://docs.subsocial.network/js-docs/js-sdk/modules/api.html#subsocialapiprops), 'substrateApi'> & { substrateNodeUrl: *string*, substrateApi?: *ApiPromise* }


## SubsocialApi

SubsocialApi creates a new connection to the Subsocial API (includes Substrate and IPFS connections).

Using this class, you can get all the data of posts, spaces and profiles from IPFS and the blockchain's storage with appropriate methods.

```
SubsocialApi(props: SubsocialApiProps): SubsocialApi
```

> 🆃 SubsocialApiProps: [*SubsocialContext*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#subsocialcontext) & { ipfsNodeUrl: *string*, offchainUrl: *string*, substrateApi: *SubstrateApi* }

## SubsocialSubstrateApi

SubsocialSubstrateApi is a wrapper for connecting to a Subsocial Node with functions from Subsocial Pallets wrapped in convenient methods to call.

```
SubsocialSubstrateApi(props: SubstrateApiProps): SubsocialSubstrateApi
```

> 🆃 SubstrateApiProps:  [*SubsocialContext*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#subsocialcontext) & { api: *SubstrateApi*  }

## SubsocialIpfsApi

Aggregated API to work with IPFS: This gets the contents of spaces, posts, and profiles.

```
SubsocialIpfsApi(props: SubsocialIpfsProps): SubsocialIpfsApi
```

> 🆃 [SubsocialIpfsProps](https://docs.subsocial.network/js-docs/js-sdk/modules/api.html#subsocialipfsprops): [*SubsocialContext*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#subsocialcontext) & { ipfsNodeUrl: *IpfsUrl*; offchainUrl: *string* }

## Off-chain

Off-chain is a storage where data is built on the basis of blockchain events. This allows you to conveniently perform work that the blockchain itself does not allow.

It saves text data of blogs, posts and comments to IPFS, builds user feeds and notifications in Postgres, 
and supports full text search by indexing text data into an ElasticSeach database.

> [off-chain repository](https://github.com/dappforce/subsocial-offchain/)

## IPFS

The [InterPlanetary File System (IPFS)](https://docs.ipfs.io/concepts/) is a decentralized storage network commonly used by blockchain projects looking for a storage solution. It is similar to a torrent network where users download content to their machines, and upload it to people that wish to access it. IPFS node operators are able to choose what content they host on their node. Subsocial uses IPFS for multimedia storage.

>[Learn more in the documentation](https://docs.ipfs.io/concepts/)
