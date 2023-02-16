---
id: create-reactions
title: Create, Update, And Delete Reactions
displayed_sidebar: developSidebar
---
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

> 🆃 ReactionKind: PalletReactionsReactionKind | "Upvote" | "Downvote" | Uint8Array

> 🆃 [AnyPostId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid): [_PostId_](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html) | _BN_


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

> 🆃 ReactionType: _'Upvote'_ | _'Downvote'_

> 🆃 [AnyPostId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid): [_PostId_](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html) | _BN_

> 🆃 [AnyReactionId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyreactionid): [_ReactionId_](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reactionid.html) | _BN_


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

> 🆃 [AnyPostId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid): [_PostId_](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html) | _BN_

> 🆃 [AnyReactionId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyreactionid): [_ReactionId_](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reactionid.html) | _BN_


 <IFrameViewer
      src="https://play.subsocial.network/writing-data/post-reaction/delete?iframe=true"
  />
<br/>
