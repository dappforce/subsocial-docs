---
id: fetch-comments
title: Fetch Comments
displayed_sidebar: developSidebar
---
**This section covers how to create and update comments on Subsocial blockchain.**

## Get replies

```
substrateApi.getReplyIdsByPostId(id: AnyPostId): Promise<PostId[]>
```

Example: 

```typescript
import { idToBn } from "@subsocial/utils"

const substrate = flatApi.subsocial.substrate

// Get reply ids (comments) by parent post id and fetch posts by ids
const replyIds = await substrate.getReplyIdsByPostId(idToBn('1'))

// For getting comments use posts functions
const replies = await flatApi.findPublicPosts(replyIds)
```
