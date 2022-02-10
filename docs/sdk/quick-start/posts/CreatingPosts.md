---
id: creating-posts
title: Creating And Updating Posts
---

## Create A Post

```typescript
substrateApi.tx.posts.createPost(spaceIdOpt, extension, content)
```

| Params    | Description |
| ----------- | ----------- |
| _spaceIdOpt_ | The space where a post will be published. |
| _extension_ | A kind of post. It can be a regular post, a shared post or a comment. |
| _content_ | [IpfsContent](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html) is a function that returns a substrate like implementation for enum { IPFS: "CID of your content"}. |

> 🆃 [PostExtensionEnum](https://docs.subsocial.network/js-docs/js-sdk/modules.html#postextensionenum): [_RegularPost_](https://docs.subsocial.network/js-docs/js-sdk/classes/regularpost.html) | [_Comment_](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.comment.html) | [_SharedPost_](https://docs.subsocial.network/js-docs/js-sdk/classes/sharedpost.html)

**Examples:**

### A Regular Post

```typescript
import { IpfsContent } from "@subsocial/types/substrate/classes"

...
const cid = await ipfs.saveContent({
  title: "What is Subsocial?",
  image: "QmcWWpR176oFao49jrLHUoH3R9MCziE5d77fdD8qdoiinx",
  tags: [ 'Hello world', 'FAQ' ],
  body: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS.'
})

const tx = substrateApi.tx.posts.createPost('1', { RegularPost: null}, IpfsContent(cid))

...
```

### A Shared Post

```typescript
import { IpfsContent } from "@subsocial/types/substrate/classes"

...
const cid = await ipfs.saveContent({
  body: 'Keep up the good work!'
})

const tx = substrateApi.tx.posts.createPost('1', { SharedPost: '1'}, IpfsContent(cid))
...
}
```

## Update A Post

```typescript
substrateApi.tx.posts.updatePost(postId: AnyPostId, update: PostUpdateType)
```

| Params    | Description |
| ----------- | ----------- |
| _postId_ | The ID of the current space. |
| _update_ | The fields available to be updated. |

**Update properties**

| Properties    | Description |
| ----------- | ----------- |
| _spaceId?_ | If a new spaceId is provided, it will move this post to the new space. |
| _content?_ | [IpfsContent](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html) is a function that returns a substrate like implementation for enum { IPFS: "CID of your content"}. |
| _hidden?_ | boolean, if post is hidden from other users. |



Example:

```typescript
import {
  IpfsContent, 
  OptionBool,
  PostUpdate
} from "@subsocial/types/substrate/classes"

...
const cid = await ipfs.saveContent({
  title: "What is Subsocial?",
  image: "QmcWWpR176oFao49jrLHUoH3R9MCziE5d77fdD8qdoiinx",
  tags: ['Hello world', 'FAQ', 'Subsoical'], //updated field
  body: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS.'
})

const update = new PostUpdate({
  content: IpfsContent(cid),
  hidden: OptionBool(true),
})

const tx = substrateApi.tx.spaces.posts.updatePost('1', update)
...
```
