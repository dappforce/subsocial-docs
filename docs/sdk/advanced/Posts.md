---
id: posts
title: Posts
---

## Find and load a single post

### findPost

```
flatApi.subsocial.findPost(query: FindPostQuery): Promise<PostData | undefined>
```

Example:

```typescript
flatApi.subsocial.findPost({id: '1'})
```

| Properties    | Description |
| ----------- | ----------- |
| _id_ | ID of the desired struct. |
| _visibility_ | Filter for the visible state of the structs (see [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility)). |

> 🆃 [PostData](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postdata): [*CommonData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata) < [*Post*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.post.html), [*PostContent*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#postcontent) >

### findPostWithAllDetails

Finds and loads a post with their extension, and the owner's profile and space (if defined).

```
flatApi.subsocial.findPostWithAllDetails(id: AnyPostId): Promise<PostWithAllDetails | undefined>
```

Example:

```typescript
flatApi.subsocial.findPostWithAllDetails('1')
```

> 🆃 [AnyPostId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid): [_PostId_](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html) | _BN_

> 🆃 [PostWithAllDetails](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithalldetails): [*PostWithOwner*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithowner) & [*PostWithSpace*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithspace)

### findPostWithSomeDetails

```
flatApi.subsocial.findPostWithSomeDetails(query: FindPostWithDetailsQuery): Promise<PostWithSomeDetails | undefined>
```

Example:

```typescript
flatApi.subsocial.findPostWithAllDetails('1')
```

| Properties    | Description |
| ----------- | ----------- |
| _id_ | ID of desired struct. |
| _visibility_ | Filter for the visible state of the structs (see [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility)) |
| _withContentOnly?_ | Boolean. |
| _withSpace?_ | Pass `true` to get the space data. |
| _withOwner?_ | Pass `true` to get the profile data. |

> 🆃 [PostWithSomeDetails](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithsomedetails): { ext?: *Exclude*<[*PostWithSomeDetails*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithsomedetails), "ext">; owner?: [*ProfileData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#profiledata); post: [*PostData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postdata); space?: [*SpaceData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata) }

> 🆃 [FindPostWithDetailsQuery](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostwithdetailsquery): [*FindPostQuery*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostquery) & [*PostDetailsOpts*   ](https://docs.subsocial.network/js-docs/js-sdk/modules.html#postdetailsopts)

> 🆃 [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility): 'onlyVisible' | 'onlyHidden' | 'onlyPublic' | 'onlyUnlisted'

## Find and load an array of posts

### findAllPosts

```
flatApi.subsocial.findAllPosts(ids: AnyPostId[]): Promise<PostData[]>
```

Example:

```typescript
flatApi.subsocial.findAllPosts([ '1' ])
```

> 🆃 [AnyPostId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid): [_PostId_](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html) | _BN_

> 🆃 [PostData](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postdata): [*CommonData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata) < [*Post*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.post.html), [*PostContent*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#postcontent) >

### findPosts

```
flatApi.subsocial.findPosts(query: FindPostsQuery): Promise<PostData[]>
```

Example:

```javascript
flatApi.subsocial.findPosts({
  ids: [ '1', '9', '32' ],
  visibility: 'onlyVisible',
})
```

| Properties    | Description |
| ----------- | ----------- |
| _ids_ | An array of IDs of the desired structs. |
| _visibility_ | Filter for the visible state of the structs (see [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility)). |
| _withContentOnly?_ | Boolean. |

> 🆃 [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility): 'onlyVisible' | 'onlyHidden' | 'onlyPublic' | 'onlyUnlisted'

The four visible state filters correspond to these conditions:

| Filters     | Description |
| ----------- | ----------- |
| _onlyVisible_ | Returns posts where the `hidden` field on the corresponding Substrate struct is `false`. |
| _onlyHidden_ | Returns posts where the `hidden` field on the corresponding Substrate struct is `true`. |
| _onlyPublic_ | Returns posts where the `hidden` field on the corresponding Substrate struct is `false` and there is a corresponding JSON file on IPFS. |
| _onlyUnlisted_ | Returns posts where either the `hidden` field is `true` or there is no corresponding JSON file on IPFS. |

> 🆃 [PostData](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postdata): [*CommonData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata) < [*Post*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.post.html), [*PostContent*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#postcontent) >

### findPostsWithAllDetails

Finds and loads a posts with their extension, and the owner's profile and space (if defined).

``` 
flatApi.subsocial.findPostsWithAllDetails(query: FindPostsQuery): Promise<PostWithAllDetails[]>
```

Example:

```typescript
flatApi.subsocial.findPostsWithAllDetails({
  ids: [ '1' ], 
  visibility: 'onlyVisible'
})
```

| Properties    | Description |
| ----------- | ----------- |
| _ids_ | An array of IDs of the desired structs. |
| _visibility_ | Filter for the visible state of the structs (see [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility)) |
| _withContentOnly?_ | Boolean. |

> 🆃 [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility): 'onlyVisible' | 'onlyHidden' | 'onlyPublic' | 'onlyUnlisted'

The four visible state filters correspond to the next conditions:

| Filters     | Description |
| ----------- | ----------- |
| _onlyVisible_ | Returns posts where the `hidden` field on the corresponding Substrate struct is `false`. |
| _onlyHidden_ | Returns posts where the `hidden` field on the corresponding Substrate struct is `true`. |
| _onlyPublic_ | Returns posts where the `hidden` field on the corresponding Substrate struct is `false` and there is a corresponding JSON file on IPFS. |
| _onlyUnlisted_ | Returns posts where either the `hidden` field is `true` or there is no corresponding JSON file on IPFS. |

> 🆃 [FindPostsQuery](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostsquery): [*FindStructs*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findstructs) < [*AnyPostId*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid) >

> 🆃 [PostWithAllDetails](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithalldetails): [*PostWithOwner*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithowner) & [*PostWithSpace*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithspace)

### findPostsWithSomeDetails

Finds and loads posts with their extension, and the owner's profile and and space (if defined and specified in properties).

``` 
flatApi.subsocial.findPostsWithSomeDetails(query: FindPostsWithDetailsQuery): Promise<PostWithSomeDetails[]>
```

Example:

```typescript
flatApi.subsocial.findPostsWithSomeDetails({
  id: '1',
  withOwner: true
}): Promise<PostWithSomeDetails[]>

```

| Properties    | Description |
| ----------- | ----------- |
| _ids_ | An array of IDs of the desired structs. |
| _visibility_ | Filter for the visible state of the structs (see [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility)) |
| _withContentOnly?_ | Boolean. |
| _withSpace?_ | Pass `true` to get the space data. |
| _withOwner?_ | Pass `true` to get the profile data. |

> 🆃 [PostWithSomeDetails](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithsomedetails): { ext?: *Exclude*<[*PostWithSomeDetails*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithsomedetails), "ext">; owner?: [*ProfileData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#profiledata); post: [*PostData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postdata); space?: [*SpaceData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata) }

> 🆃 [FindPostWithDetailsQuery](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostwithdetailsquery): [*FindPostQuery*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostquery) & [*PostDetailsOpts*   ](https://docs.subsocial.network/js-docs/js-sdk/modules.html#postdetailsopts)

> 🆃 [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility): 'onlyVisible' | 'onlyHidden' | 'onlyPublic' | 'onlyUnlisted'

### findPublicPostsWithAllDetails

Finds and loads posts that have the `hidden == false` field in the Substrate struct, and their IPFS content is not empty, with their extension, and the owner's profile and space (if defined).

``` 
flatApi.subsocial.findPublicPostsWithAllDetails(ids: AnyPostId[]): Promise<PostWithAllDetails[]>
```

Example:

```typescript
flatApi.subsocial.findPublicPostsWithAllDetails(['1'])
```

> 🆃 [AnyPostId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid): [*PostId*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html) | *BN*

> 🆃 [PostWithAllDetails](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithalldetails): [*PostWithOwner*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithowner) & [*PostWithSpace*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithspace)

### findPublicPostsWithSomeDetails

Finds and loads posts that have the `hidden == false` field in the Substrate struct and their IPFS content is not empty, with their extension, and the owner's profile and space (if defined and specified in properties).

``` 
flatApi.subsocial.findPublicPostsWithSomeDetails(query: FindPostsWithDetailsQuery): Promise<PostWithSomeDetails[]>
```

Example:

```typescript
flatApi.subsocial.findPublicPostsWithSomeDetails({
  id: '1',
  withOwner: true
}): Promise<PostWithSomeDetails[]>
```

| Properties    | Description |
| ----------- | ----------- |
| _ids_ | An array of IDs of the desired structs. |
| _visibility_ | Filter for the visible state of the structs (see [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility)) |
| _withContentOnly?_ | Boolean. |
| _withSpace?_ | Pass `true` to get the space data. |
| _withOwner?_ | Pass `true` to get the profile data. |

> 🆃 [PostWithSomeDetails](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithsomedetails): { ext?: *Exclude*<[*PostWithSomeDetails*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithsomedetails), "ext">; owner?: [*ProfileData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#profiledata); post: [*PostData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postdata); space?: [*SpaceData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata) }

> 🆃 [FindPostWithDetailsQuery](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostwithdetailsquery): [*FindPostQuery*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostquery) & [*PostDetailsOpts*   ](https://docs.subsocial.network/js-docs/js-sdk/modules.html#postdetailsopts)

> 🆃 [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility): 'onlyVisible' | 'onlyHidden' | 'onlyPublic' | 'onlyUnlisted'

### findUnlistedPosts

Finds and loads an array of information about unlisted posts from the Subsocial blockchain and IPFS by a given array of post `ids`.

A post is considered unlisted if it meets either of these conditions:

- The `hidden` field on it's blockchain structure is `true`.
- Or there is no corresponding JSON file that represents the post's content on IPFS.

``` 
flatApi.subsocia.findUnlistedPosts(ids: AnyPostId[]): Promise<PostData[]>
```

Example:

```typescript
flatApi.subsocia.findUnlistedPosts(['1'])
```

> 🆃 [AnyPostId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid): [_PostId_](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html) | _BN_

> 🆃 [PostData](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postdata): [*CommonData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata) < [*Post*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.post.html), [*PostContent*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#postcontent) >

### findUnlistedPostsWithAllDetails

Finds and loads posts that have the `hidden == true` field in the Substrate struct and their IPFS content is not empty, with their extension, and the owner's profile and space (if defined).

``` 
flatApi.subsocial.findUnlistedPostsWithAllDetails(ids: AnyPostId[]): Promise<PostWithAllDetails[]>
```

Example:

```typescript
flatApi.subsocial.findUnlistedPostsWithAllDetails(['1'])
```

> 🆃 [AnyPostId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anypostid): [*PostId*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.postid.html) | *BN*

> 🆃 [PostWithAllDetails](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithalldetails): [*PostWithOwner*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithowner) & [*PostWithSpace*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithspace)

### findUnlistedPostsWithSomeDetails

Finds and loads posts that have the' hidden == true' field in the Substrate struct and their IPFS content is not empty, with their extension, and owner's profile and space (if defined and specified in properties).

``` 
flatApi.subsocial.findUnlistedPostsWithSomeDetails(query: FindPostsWithDetailsQuery): Promise<PostWithSomeDetails[]>
```

Example:

```typescript
flatApi.subsocial.findUnlistedPostsWithSomeDetails({
  ids: ['1'],
  withOwner: true
}): Promise<PostWithSomeDetails[]>
```

| Properties    | Description |
| ----------- | ----------- |
| _ids_ | An array of IDs of the desired structs. |
| _visibility_ | Filter for the visible state of the structs (see [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility)) |
| _withContentOnly?_ | Boolean. |
| _withSpace?_ | Pass `true` to get the space data. |
| _withOwner?_ | Pass `true` to get the profile data. |

> 🆃 [PostWithSomeDetails](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithsomedetails): { ext?: *Exclude*<[*PostWithSomeDetails*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postwithsomedetails), "ext">; owner?: [*ProfileData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#profiledata); post: [*PostData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#postdata); space?: [*SpaceData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata) }

> 🆃 [FindPostsWithDetailsQuery](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostswithdetailsquery): [* FindPostsQuery*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findpostsquery) & [*PostDetailsOpts*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#postdetailsopts)

> 🆃 [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility): 'onlyVisible' | 'onlyHidden' | 'onlyPublic' | 'onlyUnlisted'
