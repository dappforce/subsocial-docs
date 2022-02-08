---
id: creating-posts
title: Creating and updating
---

## Create Post

```typescript
substrateApi.tx.posts.createPost(spaceIdOpt, extension, content)
```

Params:  
1: `spaceIdOpt` - Space where post will be published.  
2: `extension` - kind of post. It can be a regular post, a shared post or a comment.  
3: `content` - [IpfsContent](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html) is function that return substrate like implementation for enum { IPFS: "CID of your content"}.

> 🆃 [PostExtensionEnum](https://docs.subsocial.network/js-docs/js-sdk/modules.html#postextensionenum): [_RegularPost_](https://docs.subsocial.network/js-docs/js-sdk/classes/regularpost.html) | [_Comment_](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.comment.html) | [_SharedPost_](https://docs.subsocial.network/js-docs/js-sdk/classes/sharedpost.html)

**Examples:**

### Regular Post

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

### Shared Post

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

## Update post

```typescript
substrateApi.tx.posts.updatePost(postId: AnyPostId, update: PostUpdateType)
```

Params:  
1: `postId` - id of the current space.  
2: `update` - fields available to updating.  

Update properties:  
1: `spaceId?` - ff we provide a new spaceId in update, it will move this post to another space. 
2: `content?`: [IpfsContent](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html) is function that return substrate like implementation for enum { IPFS: "CID of your content"}.  
3: `hidden?` - boolean, hidden post for other users.  

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
