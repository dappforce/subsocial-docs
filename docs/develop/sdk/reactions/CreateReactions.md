---
id: create-reactions
title: Create, Update, And Delete Reactions
displayed_sidebar: developSidebar
---

<head>
  <title>How To Create Reactions With The Subsocial JS SDK</title>
</head>

import IFrameViewer from '@site/src/components/IframeComponent';

**This section covers how to create, update and delete reactions on the Subsocial blockchain.**

```js
const substrateApi = await api.substrateApi
```

## Create a reaction

```
substrateApi.tx.reactions.createPostReaction(postId: AnyPostId, kind: PalletReactionsReactionKind | "Upvote" | "Downvote" | Uint8Array)
```

Example:

```typescript
const tx = substrateApi.tx.reactions.createPostReaction('1', 'Upvote')
```

> 🆃 [ReactionKind](https://github.com/dappforce/subsocial-js/blob/master/packages/api/src/substrate/wrappers/reaction.ts#L9): PalletReactionsReactionKind | "Upvote" | "Downvote" | Uint8Array


 <IFrameViewer
      src="https://play.subsocial.network/writing-data/post-reaction/create?iframe=true"
  />
<br/>


## Update a reaction

Change the type of reaction.

```
substrateApi.tx.reactions.updatePostReaction(postId: AnyPostId, reactionId: ReactionId, newKind: ReactionType)
```

Example: 

```typescript
const tx = substrateApi.tx.reactions.updatePostReaction('1', '53', 'Downvote')
```

> 🆃 [ReactionType](https://github.com/dappforce/subsocial-js/blob/master/packages/api/src/types/dto.ts#L192): _'Upvote'_ | _'Downvote'_


 <IFrameViewer
      src="https://play.subsocial.network/writing-data/post-reaction/update?iframe=true"
  />
<br/>

## Delete a reaction

```
substrateApi.tx.reactions.updatePostReaction(postId: AnyPostId, reactionId: ReactionId)
```

Example:

```typescript
const tx = substrateApi.tx.reactions.deletePostReaction('1', '53')
```


 <IFrameViewer
      src="https://play.subsocial.network/writing-data/post-reaction/delete?iframe=true"
  />
<br/>
