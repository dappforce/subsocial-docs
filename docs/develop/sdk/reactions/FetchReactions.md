---
id: fetch-reactions
title: Fetch Reactions
displayed_sidebar: developSidebar
---

<head>
  <title>How To Get Reactions With The Subsocial JS SDK</title>
</head>


import IFrameViewer from '@site/src/components/IframeComponent';

**This section covers how to fetch reactions on the Subsocial blockchain.**

Find and load an array of information about reactions from the Subsocial blockchain by a given array of IDs.


```js
const substrateApi = await api.substrateApi
```

## Get reaction IDs

```
substrateApi.query.reactions.postReactionIdByAccount.multi(tuples)
```

`query` allows for the querying of multiple storage entries and the combination into a single result. 
This is a very optimal way to make multiple queries since it only makes a single connection to the node and retrieves the data over one subscription.

## Get reactions

Get reactions (upvotes/downvotes) on posts or comments by reaction IDs (use multi request from blockchain).

```
api.blockchain.findReactions(ids: AnyReactionId[]): Promise<Reaction[]>
api.blockchain.findReaction(id: AnyReactionId): Promise<Reaction | undefined>
```


### Example

```typescript
import { ReactionId } from '@subsocial/api/types/substrate';
  
const myAccount = '3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8';

const example = async () =>  {
  const substrate = await api.blockchain
  const substrateApi = await api.substrateApi
  
  const tuples = [ '1', '2', '3' ].map(postId => [ myAccount, postId ])
  
  const reactionIds = await substrateApi.query.reactions.postReactionIdByAccount.multi(tuples)
  const reactions = await substrate.findReactions(reactionIds as ReactionId[])
}
```

 <IFrameViewer
      src="https://play.subsocial.network/reading-data/reactions/multiple-reactions?iframe=true"
  />
<br/>

## Get a reaction by post ID and account

```
api.blockchain.getPostReactionIdByAccount(accountId: AnyAccountId, postId: AnyPostId): Promise<ReactionId | undefined>
```

Example: 

```typescript
api.blockchain.getPostReactionIdByAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8', '1')
```

> 🆃 [AnyReactionId](https://github.com/dappforce/subsocial-js/blob/9d060310ac34d63fdd098f34460e455e76b85a43/packages/api/src/types/common.ts#L41)

> 🆃 [AnyPostId](https://github.com/dappforce/subsocial-js/blob/master/packages/api/src/types/common.ts#L40)

> 🅸 [*ReactionId*](https://github.com/dappforce/subsocial-js/blob/master/packages/api/src/types/common.ts#L41)
