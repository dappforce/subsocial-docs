---
id: fetch-comments
title: Fetch Comments
displayed_sidebar: developSidebar
---
**This section covers how to fetch comments on the Subsocial blockchain.**

Comments in Subsocial Blockchain are a type of post and as we call it Extension. You can read more about it [here](/docs/develop/how-to-guides/posts/create-posts). 

## Get replies

```
api.blockchain.getReplyIdsByPostId(id: AnyPostId): Promise<PostId[]>
```

Example: 

```typescript
import { idToBn } from "@subsocial/utils"

// Get reply ids (comments) by parent post id and fetch posts by ids
const replyIds = await api.blockchain.getReplyIdsByPostId(idToBn('1'))

// For getting comments use posts functions
const replies = await api.findPublicPosts(replyIds)
```
