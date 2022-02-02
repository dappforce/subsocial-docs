---
id: creating-comments
title: Creating
---

[Post methods](/docs/sdk/quick-start/posts/creating-posts) are used for comments.

## Create comment

```typescript
import { getSubstrateApi } from '@subsocial/api'
import { IpfsContent } from '@subsocial/types/substrate/classes'

const substrateApi = getSubstrateApi({ endpoint: substrateUrl })

substrateApi.tx.posts.createPost(spaceIdOpt, { Сomment }, IpfsContent("CID of your content"))
```

> 🅸 [Comment](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.comment.html)

Comment properties:
1: `parentId?` - id of the message that was replied to.
2: `rootPostId?` - commented post id.

### Create a comment below a post

```typescript
import { IpfsContent } from "@subsocial/types/substrate/classes"

...
const cid = await ipfs.saveContent({
  body: 'Keep up the good work!'
})

const tx = substrateApi.tx.posts.createPost('1', { Comment: { parentId: null, rootPostId: '1'}}, IpfsContent(cid))

...
```

### Create a reply to a comment

```typescript
import { IpfsContent } from "@subsocial/types/substrate/classes"

...
const cid = await ipfs.saveContent({
  body: 'Agree' //replied
})

const tx = substrateApi.tx.posts.createPost('1', { Comment: { parentId: '2', rootPostId: '1'}}, IpfsContent(cid))
...
```

## Update Comment

For updating comments use [post methods](/docs/sdk/quick-start/posts/creating-posts)
