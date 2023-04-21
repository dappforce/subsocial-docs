---
id: create-comments
title: Create And Update Comments
displayed_sidebar: developSidebar
---

<head>
  <title>Create and Update Comments on the Subsocial Blockchain | JS SDK Guide</title>
</head>

**This section covers how to create and update comments on the Subsocial blockchain.**

## Create a comment

```typescript
import { IpfsContent } from '@subsocial/types/substrate/classes'

const substrateApi = await api.substrateApi

substrateApi.tx.posts.createPost(spaceIdOpt, { Сomment }, IpfsContent("CID of your content"))
```

> 🅸 [Comment](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.comment.html) 

| Properties    | Description |
| ----------- | ----------- |
| _parentId?_ | ID of the post or comment that was replied to. |
| _rootPostId?_ | ID of the original post. |

Comments directly under a post will have the same parentId and rootPostId.

### Create a comment below a post

```typescript
import { IpfsContent } from "@subsocial/api/substrate/wrappers"

...
const cid = await api.ipfs.saveContent({
  body: 'Keep up the good work!'
})

const substrateApi = await api.substrateApi

const tx = substrateApi.tx.posts.createPost('1', { Comment: { parentId: null, rootPostId: '1'}}, IpfsContent(cid))

...
```

### Create a reply to a comment

```typescript
import { IpfsContent } from "@subsocial/api/substrate/wrappers"

...
const cid = await api.ipfs.saveContent({
  body: 'Agree' //replied
})

const substrateApi = await api.substrateApi

const tx = substrateApi.tx.posts.createPost('1', { Comment: { parentId: '2', rootPostId: '1'}}, IpfsContent(cid))
...
```

## Update A Comment

For updating comments use [post methods](/docs/develop/sdk/posts/create-posts).
