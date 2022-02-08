---
id: overview
title: Overview
---
Subsocial is a platform that allows anyone to launch their own decentralized censorship-resistant
social network.

## Example code

Here we provide some example code for interacting with the Subsocial SDK.

Start with installing @subsocial/api

```
yarn add @subsocial/api
```

```typescript
import { newFlatSubsocialApi } from '@subsocial/api'
import { bnsToIds, idToBn } from '@subsocial/utils'

const spaceId = '1'
const myAccount = '3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8'

const example = async () => {
  const flatApi = await newFlatSubsocialApi({
    substrateNodeUrl, // http://127.0.0.1:9944
    offchainUrl,  // http://127.0.0.1:3001
    ipfsNodeUrl // http://127.0.0.1:8080
  })

  // get a space id
  const space = await flatApi.findSpace({id: spaceId})

  // get post ids
  const postBns = await flatApi.subsocial.substrate.postIdsBySpaceId(idToBn(spaceId))
  const postIds = bnsToIds(postBns).reverse();

  const substrateApi = await flatApi.subsocial.substrate.api

  // get reactions (upvotes/downvotes) by owner in post ids [use multi request from blockchain]
  const tuples = postIds.map(postId => [ myAccount, postId ])
  const reactionIds = await substrateApi.query.reactions.postReactionIdByAccount.multi(tuples)
  const reactions = await res.subsocial.substrate.findReactions(reactionIds as ReactionId[])

  // get space owner
  const spaceOwner = await flatApi.findProfile(space.struct.ownerId)

  // get ids of all spaces owned by an account
  const ownerSpacesBns = await flatApi.subsocial.substrate.spaceIdsByOwner(space.struct.ownerId)
  const ownerSpacesIds = bnsToIds(ownerSpacesBns)

  // get ids of all posts owned by an account
  const postIdsPromises = ownerSpacesIds.map(id => flatApi.subsocial.substrate.postIdsBySpaceId(idToBn(id)))
  const postIdsArray = await Promise.all(postIdsPromises)
  const postsIds = bnsToIds(postIdsArray.flat().sort((a, b) => b.sub(a).toNumber()))
}
```

Lets explain the example. We first connected to Subsocial using the newFlatSubsocialApi function which
needs the substrate node URL, offchain URL and IPFS node URL. After initialization, flatApi can be
used to retrieve data from the node. We fetched a space and post IDs by the space ID. After that we
connected to the substrate API for getting reaction IDs. In the next step, we got a space owner by
retrieving the ID from the space struct. And finally we fetched owner posts by owner space IDs. 

You can learn more about these terms below and in [Glossary](/docs/glossary/overview)
