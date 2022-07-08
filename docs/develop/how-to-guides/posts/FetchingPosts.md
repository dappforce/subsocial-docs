---
id: fetch-posts
title: Fetch Posts
displayed_sidebar: developSidebar
---
**This section covers how to fetch posts from Subsocial blockchain.**

## Find and load a single post

```
flatApi.findPost(query: FindPostQuery): Promise<PostData | undefined
```

Example:

```typescript
flatApi.findPost({ id: '1' })
```

Output: 

```json
{
    "id": "1",
    "struct": {
        "createdByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
        "createdAtBlock": 658170,
        "createdAtTime": 1600870242000,
        "isUpdated": false,
        "contentId": "bafyreidzue2dtxpj6n4x5mktrt7las5wz5diqma47zr25uau743dhe76we",
        "id": "1",
        "ownerId": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
        "hidden": false,
        "spaceId": "1",
        "repliesCount": 12,
        "hiddenRepliesCount": 0,
        "visibleRepliesCount": 12,
        "sharesCount": 0,
        "upvotesCount": 29,
        "downvotesCount": 0,
        "score": 835,
        "isRegularPost": true,
        "isSharedPost": false,
        "isComment": false
    },
    "content": {
        "body": "Subsocial is an open protocol for decentralized social networks and marketplaces. It's built with [Substrate](https://www.substrate.io/) and [IPFS](https://ipfs.io/).",
        "image": "QmcWWpR176oFao49jrLHUoH3R9MCziE5d77fdD8qdoiinx",
        "tags": [
            "Hello World",
            "FAQ"
        ],
        "title": "What is Subsocial?",
        "summary": "Subsocial is an open protocol for decentralized social networks and marketplaces. It's built with Substrate and IPFS.",
        "isShowMore": false
    }
}
```

> 🆃 [FindPostQuery](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostquery): [*FindStruct*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findstruct) < [*AnyPostId*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid) >

> 🆃 [PostData](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postdata): [*CommonData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata) < [*Post*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.post.html), [*PostContent*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#postcontent) >

## Find and load an array of posts

Find and load an array of information about public posts from the Subsocial blockchain and IPFS by a given array of post `ids`.

A post is considered public if it meets these conditions:

- The `hidden` field on its blockchain structure is `false`.
- And there is a corresponding JSON file that represents the post's content on IPFS.

```
flatApi.findPublicPosts(ids: AnyId[]): Promise<PostData[]>
```

> 🆃 [FindPostsQuery](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostsquery): [*FindStructs*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findstructs) < [*AnyPostId*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid) >

> 🆃 [PostData](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postdata): [*CommonData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata) < [*Post*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.post.html), [*PostContent*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#postcontent) >

## Find and load structs and contents separately

### Get structs

```
flatApi.findPostStructs(ids: AnyId[]): Promise<PostStruct[]>
flatApi.findPostStructs(id: AnyId): Promise<PostStruct | undefined>
```

Example: 

```typescript
flatApi.findPostStruct('1')
```

Output: 

```json
{
  "createdByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
  "createdAtBlock": 658170,
  "createdAtTime": 1600870242000,
  "isUpdated": false,
  "contentId": "bafyreidzue2dtxpj6n4x5mktrt7las5wz5diqma47zr25uau743dhe76we",
  "id": "1",
  "ownerId": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
  "hidden": false,
  "spaceId": "1",
  "repliesCount": 12,
  "hiddenRepliesCount": 0,
  "visibleRepliesCount": 12,
  "sharesCount": 0,
  "upvotesCount": 29,
  "downvotesCount": 0,
  "score": 835,
  "isRegularPost": true,
  "isSharedPost": false,
  "isComment": false
}
```

### Get contents

Find and load off-chain information about a post from IPFS by a given `cid`.

Post information only exists if there is a corresponding JSON file that represents the post's content on IPFS.

```
flatApi.subsocial.ipfs.findPosts(cids: IpfsCid[]): Promise<ContentResult<PostContent>>
flatApi.subsocial.ipfs.findPost(cid: IpfsCid): Promise<PostContent | undefined>
```

Example: 

```typescript
import { convertToDerivedContent } from "@subsocial/api/flat-subsocial/utils" //add summary and isShowMore properties

(async () => {
  convertToDerivedContent(await flatApi.subsocial.ipfs.findPost('bafyreidzue2dtxpj6n4x5mktrt7las5wz5diqma47zr25uau743dhe76we'))
})()
```
Output: 

```json
{
  "bafyreidzue2dtxpj6n4x5mktrt7las5wz5diqma47zr25uau743dhe76we": {
    "body": "Subsocial is an open protocol for decentralized social networks and marketplaces. It's built with [Substrate](https://www.substrate.io/) and [IPFS](https://ipfs.io/).",
    "image": "QmcWWpR176oFao49jrLHUoH3R9MCziE5d77fdD8qdoiinx",
    "tags": [
      "Hello World",
      "FAQ"
    ],
    "title": "What is Subsocial?",
    "summary": "Subsocial is an open protocol for decentralized social networks and marketplaces. It's built with Substrate and IPFS.",
    "isShowMore": false
  }
}
```

> 🆃 [IpfsCid](https://docs.subsocial.network/js-docs/js-sdk/modules.html#ipfscid): *string* | *CID* | *IpfsCid*

> 🆃 [ContentResult](https://docs.subsocial.network/js-docs/js-sdk/modules.html#contentresult) &lt;*T*&gt;: *Record*<*CidAsStr*, *T*>

> 🆃 [PostContent](https://docs.subsocial.network/js-docs/js-sdk/modules.html#postcontent): *CommonPostContent* & { canonical: *string*; image: *string*; link?: *string*; meta?: *MetaItem[]*; tags: *string[]*; title: *string* }

## Find and load post IDs by space ID

```
substrateApi.postIdsBySpaceId(id: AnySpaceId): Promise<PostId[]>
```

Example:
```typescript
substrateApi.postIdsBySpaceId('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')
```

> 🆃 [AnySpaceId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid): [*SpaceId*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html) | *BN*  

> 🅸 [PostId](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html)
