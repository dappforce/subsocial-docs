---
id: getting-reactions
title: Getting Reactions
---

Find and load an array of information about reactions from Subsocial blockchain by a given array of ids.

## Get reaction ids

```
substrateApi.query.reactions.postReactionIdByAccount.multi(tuples)
```

`query` allows for the querying of multiple storage entries and the combination thereof into a single result. This is a very optimal way to make multiple queries since it only makes a single connection to the node and retrieves the data over one subscription.

## Get reactions

Get reactions (upvote/downvote) by owner in post ids (use multi request from blockchain)

```
substrateApi.findReactions(ids: AnyReactionId[]): Promise<Reaction[]>
substrateApi.findReaction(id: AnyReactionId): Promise<Reaction | undefined>
```

> 🆃 [AnyReactionId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyreactionid): [*ReactionId*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reactionid.html) | *BN*
>
> 🅸 [Reaction](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html)


## Example

```typescript
import { ReactionId } from '@subsocial/types/substrate/interfaces';
  
const myAccount = '3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8';

const example = async () =>  {
  const substrate = await flatApi.subsocial.substrate
  const substrateApi = await flatApi.subsocial.substrate.api
  
  const tuples = [ '1', '2', '3' ].map(postId => [ myAccount, postId ])
  
  const reactionIds = await substrateApi.query.reactions.postReactionIdByAccount.multi(tuples)
  const reactions = await substrate.findReactions(reactionIds as ReactionId[])
}
```
