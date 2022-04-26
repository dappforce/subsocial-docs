---
id: gettingstarted
title: Getting Started
---
Once you have the knowledge and understanding about how decentralized social networks work, it's time to get started building your own Social Dapp. This guide will show you how you can do it in just a few easy steps.

### Installing The SubSocial SDK

To start building and connecting to the Subsocial chain, you need to install the typescript-based SDK first.

Run:
```
yarn add @subsocial/api
```

> To get more details follow [installing @subsocial/api guide](../overview/installation)

### Initializing The APIs

You need to initialize the Subsocial SDK with the following syntax:

```typescript

/* import newFlatSubsocialApi and util functions */
import { newFlatSubsocialApi } from '@subsocial/api'
import { bnsToIds, idToBn } from '@subsocial/utils'

/* 
  Store the URLs of the Substrate and IPFS nodes 
  Note: You can either run local substrateNode or use our testnet.
*/
const substrateNodeUrl = 'http://127.0.0.1:9944'
const offchainUrl = 'http://127.0.0.1:3001'
const ipfsNodeUrl = 'http://127.0.0.1:8080'

/* Creating flatSubsocialApi object */
const flatApi = await newFlatSubsocialApi({
    substrateNodeUrl,
    offchainUrl, 
    ipfsNodeUrl 
  })

```

> **NOTE**: You can either run a local [Subsocial node](https://github.com/dappforce/subsocial-node) or use our testnet for running the API calls.

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
  const space = await flatApi.findSpace({id: spaceId})
  console.log(space)
```

In your console you will see:

```javascript
{
  id: 1
  created: {
    account: 3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8
    block: 0
    time: 0
  }
  updated: {
    account: 3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8
    block: 1,976,464
    time: 1,608,780,324,000
  }
  owner: 3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8
  parentId: null
  handle: subsocial
  content: {
    IPFS: bafyreib3mgbou4xln42qqcgj6qlt3cif35x4ribisxgq7unhpun525l54e
  }
  hidden: false
  postsCount: 100
  hiddenPostsCount: 7
  followersCount: 2,319
  score: 65,716
  permissions: null
}
```

You can see that in response to the findSpace method, you are getting all the details about a particular space. To see the content of a space you should use the IPFS cid from the data.

Now let's try to fetch some posts and reactions from this space.

```typescript

  // Fetching all postIds of a particular spaceId.
  const postBns = await flatApi.subsocial.substrate.postIdsBySpaceId(idToBn(spaceId))
  const postIds = bnsToIds(postBns).reverse();

```

The above code fetches all the postIds of the space. Now, we can use these Ids to get post data, reactions and much more.

```typescript
  // Fetching the first post from the list of postIds.
  // Use substrateApi to run Subsocial's pallet functions to get data about posts and content on the chain.
  const substrateApi = await flatApi.subsocial.substrate.api

  // Gets all reactions (upvotes/downvotes) by you on all post ids [we are using multi request from blockchain]
  const tuples = postIds.map(postId => [ myAccount, postId ])
  const reactionIds = await substrateApi.query.reactions.postReactionIdByAccount.multi(tuples)
  const reactions = await res.subsocial.substrate.findReactions(reactionIds as ReactionId[])

```

Lets understand the example. First we connected to Subsocial using the newFlatSubsocialApi function that
needs the Substrate node URL, offchain URL, and IPFS node URL. After initialization, flatApi can be
used to retrieve data from the node. Then we fetched a space and post IDs by the space ID. After that we
connected to the Substrate API to get reaction IDs. In the next step, we got the ID of a space's owner by
retrieving the ID from the space struct. And finally we fetched owner posts by owner space IDs. 

> You can learn more about these terms below and in [Glossary](/docs/glossary/overview)
