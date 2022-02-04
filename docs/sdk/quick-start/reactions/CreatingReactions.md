---
id: creating-reactions
title: Creating Reactions
---

## Create reaction

```
substrateApi.tx.reactions.createPostReaction(postId: AnyPostId, kind: ReactionType)
```

Example:

```typescript
...
const tx = substrateApi.tx.reactions.createPostReaction('1', 'Upvote')

...
```

> 🆃 ReactionType: _'Upvote'_ | _'Downvote'_

> 🆃 [AnyPostId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid): [_PostId_](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html) | _BN_


## Update reaction

Change kind of reaction.

```
substrateApi.tx.reactions.updatePostReaction(postId: AnyPostId, reactionId: ReactionId, newKind: ReactionType)
```

Example: 

```typescript
...
const tx = substrateApi.tx.reactions.updatePostReaction('1', '53', 'Downvote')

...
```

> 🆃 ReactionType: _'Upvote'_ | _'Downvote'_

> 🆃 [AnyPostId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid): [_PostId_](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html) | _BN_
>
> 🆃 [AnyReactionId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyreactionid): [_ReactionId_](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reactionid.html) | _BN_

## Delete reaction

Remove reaction.

```
substrateApi.tx.reactions.updatePostReaction(postId: AnyPostId, reactionId: ReactionId)
```

Example:

```typescript
...
const tx = substrateApi.tx.reactions.deletePostReaction('1', '53')

...
```

> 🆃 [AnyPostId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid): [_PostId_](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html) | _BN_
>
> 🆃 [AnyReactionId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyreactionid): [_ReactionId_](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reactionid.html) | _BN_
