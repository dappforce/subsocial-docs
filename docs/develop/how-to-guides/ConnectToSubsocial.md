---
id: connectToSubsocial
title: Connect To Subsocial
displayed_sidebar: developSidebar
---
**This section covers how to connect to the Subsocial blockchain using our JS SDK.**

Once you have the basic knowledge and understanding about how decentralized social networks work, it's time to get started building your own Social Dapp. This guide will show you how you can do it in just a few easy steps.

### Installing The SubSocial SDK

To start building and connecting to the Subsocial chain, you need to install the typescript-based SDK first.

Run:
```
yarn add @subsocial/api
```

> To get more details follow [installing @subsocial/api guide](/docs/develop/getting-started/installation)

### Initializing The APIs

You need to initialize the Subsocial SDK with the following syntax:

```typescript

/* import newFlatSubsocialApi and util functions */
import { SubsocialApi } from '@subsocial/api'
import { bnsToIds, idToBn } from '@subsocial/utils'

/* 
  Store the URLs of the Substrate and IPFS nodes 
  Note: You can either run local substrateNode or use our testnet.
*/
const substrateNodeUrl = 'http://127.0.0.1:9944'
const offchainUrl = 'http://127.0.0.1:3001'
const ipfsNodeUrl = 'http://127.0.0.1:8080'

/* Creating flatSubsocialApi object */
const api = await SubsocialApi.create({
    substrateNodeUrl, 
    ipfsNodeUrl 
  })

```

> **NOTE**: You can either run a local [Subsocial node](https://github.com/dappforce/subsocial-node) or use our [testnet](/docs/develop/getting-started/testnet) for running the API calls.

### Fetching data from Subsocial

Now let's see how you can fetch data from Subsocial nodes and use it in your cool Social Dapps.

#### Getting spaces & posts by ID

Spaces are one of the most important parts of Subsocial. They function as a home for all posts related to a certain topic. Each space can have multiple posts in them and every space holds its own unique id.  

For example: The space for Subsocial's announcements has the id 1.

Now let's try to fetch data from this space:

```typescript
  // Subsocial's space id.
  const spaceId = 1 

  // Find space by id.
  const space = await api.findSpace({id: spaceId})
  console.log(space)
```

In your console you will see:

```javascript
{
  "id": "1",
  "struct": {
    "createdByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
    "createdAtBlock": 593183,
    "createdAtTime": 0,
    "isUpdated": false,
    "contentId": "bafyreib3mgbou4xln42qqcgj6qlt3cif35x4ribisxgq7unhpun525l54e",
    "id": "1",
    "ownerId": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
    "hidden": false,
    "canFollowerCreatePosts": false,
    "canEveryoneCreatePosts": false
  },
  "content": {
    "name": "Subsocial",
    "tags": [
      "subsocial",
      "polkadot",
      "substrate",
      "sofi",
      "chain",
      "ipfs"
    ],
    "about": "Subsocial is an open protocol for decentralized social networks and marketplaces. It's built with Substrate and IPFS. [Learn more](https://subsocial.network/)",
    "image": "Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe",
    "links": [
      "https://subsocial.network",
      "https://twitter.com/SubsocialChain",
      "https://medium.com/dappforce",
      "https://t.me/Subsocial",
      "https://github.com/dappforce",
      "https://www.youtube.com/channel/UC1xCFynfwMrjEtFdMf8nXgQ"
    ],
    "handle": "subsocial",
    "summary": "Subsocial is an open protocol for decentralized social networks and marketplaces. It's built with Substrate and IPFS. Learn more",
    "isShowMore": false
  }
}
```

You can see that in response to the findSpace method, you are getting all the details about a particular space swiftly.

Now let's try to fetch some posts and reactions from this space.

```typescript
  const spaceId = 1
  // Fetching all postIds of a particular spaceId.
  const postIds = await api.blockchain.postIdsBySpaceId(spaceId)
```

**Note:** These are in ascending order of the timestamp these posts were created.

The above code fetches all the postIds of the space. Now, we can use these Ids to get post data, reactions and much more.

```typescript
  // Fetching the first post from the list of postIds.
  // Use substrateApi to run Subsocial's pallet functions to get data about posts and content on the chain.
  const substrateApi = await api.substrateApi

  // Gets all reactions (upvotes/downvotes) by you on all post ids [we are using multi request from blockchain]
  const tuples = postIds.map(postId => [ myAccount, postId ])
  const reactionIds = await substrateApi.query.reactions.postReactionIdByAccount.multi(tuples)
  const reactions = await api.blockchain.findReactions(reactionIds)

```

> Try out the code now in our [Playground](https://play.subsocial.network).

> You can learn more about these terms in the [Glossary](/docs/basics/glossary/overview).
