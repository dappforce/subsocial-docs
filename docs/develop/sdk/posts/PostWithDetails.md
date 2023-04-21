---
id: posts-with-details 
title: Posts With Details
displayed_sidebar: developSidebar
---

<head>
  <title>Alternate Methods to Fetch Posts on Subsocial | JS SDK Guide</title>
</head>

All entities (posts, profiles, and spaces) are interconnected. For faster data retrieval use
the `findPostWithAllDetails` method.

## Find and load a single post

### findPostWithAllDetails

Finds and loads a post with their extension and the owner's profile and space (if defined).

```
flatApi.findPostWithAllDetails(id: AnyPostId): Promise<PostWithAllDetails | undefined>
```

Example:

```typescript
flatApi.findPostWithAllDetails('1')
```

Output:

```
{
  "ext": undefined,
  "id": "1",
  "post": {"id": "1"...},
  "owner": {"id": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8"...},
  "space": {"id": "1"...}
}
```

> 🆃 [AnyPostId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid): [*PostId*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html) | *BN*

> 🆃 [PostWithAllDetails](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithalldetails): [*PostWithOwner*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithowner) & [*PostWithSpace*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithspace)

### findPostWithSomeDetails

Finds and loads a post with their extension and the owner's profile (if defined).

```
flatApi.findPostWithSomeDetails(query: FindPostWithDetailsQuery): Promise<PostWithSomeDetails | undefined>
```

| Properties    | Description |
| ----------- | ----------- |
| _ids_ | An array of IDs of desired structs. |
| _visibility_ | Filter for the visible state of the structs (see [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility)) |
| _withContentOnly?_ | Boolean. |
| _withSpace?_ | Pass `true` to get the space data. |
| _withOwner?_ | Pass `true` to get the profile data. |

> 🆃 [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility): 'onlyVisible' | 'onlyHidden' | 'onlyPublic' | 'onlyUnlisted'

The four visible state filters correspond to the next conditions:

| Filters | Description |
| ----------- | ----------- |
| _onlyVisible_ | returns posts where the `hidden` field on the corresponding Substrate struct is `false`. |
| _onlyHidden_ | returns posts where the `hidden` field on the corresponding Substrate struct is `true`. |
| _onlyPublic_ | returns posts where the `hidden` field on the corresponding Substrate struct is `false` and there is a corresponding JSON file on IPFS. |
| _onlyUnlisted_ | returns posts where either the `hidden` field is `true` or there is no corresponding JSON file on IPFS. |

Example: 

```typescript
flatApi.findPostWithSomeDetails({id: '1'})
```

Output: 

```
{
  "ext": undefined,
  "id": "1",
  "post": {"id": "1"...},
  "owner": undefined,
  "space": undefined
}
```

Example with owner: 

```typescript
flatApi.findPostWithSomeDetails({id: '1', withOwner: true})
```

Output: 

```
{
  "ext": undefined,
  "id": "1",
  "post": {"id": "1"...},
  "owner": {"id": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8"...},
  "space": undefined
}
```

> 🆃 [PostWithSomeDetails](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithsomedetails): { ext?: *Exclude*<[*PostWithSomeDetails*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithsomedetails), "ext">; owner?: [*ProfileData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#profiledata); post: [*PostData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postdata); space?: [*SpaceData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata) }

> 🆃 [FindPostWithDetailsQuery](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostwithdetailsquery): [*FindPostQuery*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostquery) & [*PostDetailsOpts*   ](https://docs.subsocial.network/js-docs/js-sdk/modules.html#postdetailsopts)

## Find and load an array of posts

### findPostsWithAllDetails

findPostsWithAllDetails returns information of the post, space and owner (profile).

```
flatApi.findPostsWithAllDetails(query: FindPostsQuery): Promise<PostWithAllDetails[]>
```

| Properties    | Description |
| ----------- | ----------- |
| _ids_ | An array of IDs of desired structs. |
| _visibility_ | Filter for the visible state of the structs (see [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility)) |
| _withContentOnly?_ | Boolean. |

> 🆃 [FindPostsQuery](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostsquery): [*FindStructs*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findstructs) < [*AnyPostId*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid) >

> 🆃 [PostWithAllDetails](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithalldetails): [*PostWithOwner*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithowner) & [*PostWithSpace*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithspace)


:point_down: **There are also methods with ready-made visibility filters.**

### findPublicPostsWithAllDetails

Find and load posts that have the `hidden == false` field in their Substrate struct and their IPFS content is
not empty, using their extension and the owner's profile and space (if defined).

```
flatApi.findPublicPostsWithAllDetails(ids: AnyPostId[]): Promise<PostWithAllDetails[]>
```

> 🆃 [PostWithAllDetails](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithalldetails): [*PostWithOwner*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithowner) & [*PostWithSpace*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithspace)

> 🆃 [AnyPostId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid): [*PostId*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html) | *BN*

### findUnlistedPostsWithAllDetails

Find and load posts that have the `hidden == true` field in their Substrate struct and their IPFS content is
not empty, using their extension and owner's profile and space (if defined).

```
flatApi.findUnlistedPostsWithAllDetails(ids: AnyPostId[]): Promise<PostWithAllDetails[]>
```

> 🆃 [PostWithAllDetails](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithalldetails): [*PostWithOwner*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithowner) & [*PostWithSpace*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithspace)

> 🆃 [AnyPostId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid): [*PostId*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html) | *BN*


### findPublicPostsWithSomeDetails

Load an array of information about public posts with the space and/or owner.

```
flatApi.findPublicPostsWithSomeDetails(query: FindPostsWithDetailsQuery): Promise<PostWithSomeDetails[]
```

| Properties    | Description |
| ----------- | ----------- |
| _ids_ | An array of IDs of desired structs. |
| _visibility_ | Filter for the visible state of the structs (see [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility)) |
| _withContentOnly?_ | Boolean. |
| _withSpace?_ | Pass `true` to get the space data. |
| _withOwner?_ | Pass `true` to get the profile data. |

> 🆃 [FindPostsWithDetailsQuery](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostswithdetailsquery): [* FindPostsQuery*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostsquery) & [*PostDetailsOpts*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#postdetailsopts)

> 🆃 [PostWithSomeDetails](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithsomedetails): { ext?: *Exclude*<[*PostWithSomeDetails*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithsomedetails), "ext">; owner?: [*ProfileData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#profiledata); post: [*PostData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postdata); space?: [*SpaceData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata) }
