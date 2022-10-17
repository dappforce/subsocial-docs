---
id: fetch-reactions
title: Fetch Reactions
displayed_sidebar: developSidebar
---
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

> 🆃 [AnyReactionId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyreactionid): [*ReactionId*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reactionid.html) | *BN*

> 🅸 [Reaction](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html)


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

## Get a reaction by post ID and account

```
api.blockchain.getPostReactionIdByAccount(accountId: AnyAccountId, postId: AnyPostId): Promise<ReactionId | undefined>
```

Example: 

```typescript
api.blockchain.getPostReactionIdByAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8', '1')
```

> 🆃 [AnyReactionId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyreactionid): [*ReactionId*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reactionid.html) | *BN*

> 🆃 [AnyPostId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid): [_PostId_](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html) | _BN_

> 🅸 [*ReactionId*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reactionid.html)
