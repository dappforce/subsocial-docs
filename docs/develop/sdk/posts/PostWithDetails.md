---
id: posts-with-details 
title: Posts With Details
displayed_sidebar: developSidebar
---

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

> Read API docs [here](https://js-sdk-api.subsocial.network/interfaces/api_src_subsocial.ISubsocialApi.html#findPostWithAllDetails)

### findPostWithSomeDetails

Finds and loads a post with their extension and the owner's profile (if defined).

```
flatApi.findPostWithSomeDetails(query: FindPostWithDetailsQuery): Promise<PostWithSomeDetails | undefined>
```

| Properties    | Description |
| ----------- | ----------- |
| _ids_ | An array of IDs of desired structs. |
| _visibility_ | Filter for the visible state of the structs |
| _withContentOnly?_ | Boolean. |
| _withSpace?_ | Pass `true` to get the space data. |
| _withOwner?_ | Pass `true` to get the profile data. |

> 🆃 type Visibility: 'onlyVisible' | 'onlyHidden' | 'onlyPublic' | 'onlyUnlisted'

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

> Read API docs [here](https://js-sdk-api.subsocial.network/interfaces/api_src_subsocial.ISubsocialApi.html#findPostWithSomeDetails)

## Find and load an array of posts

### findPostsWithAllDetails

findPostsWithAllDetails returns information of the post, space and owner (profile).

```
flatApi.findPostsWithAllDetails(query: FindPostsQuery): Promise<PostWithAllDetails[]>
```

| Properties    | Description |
| ----------- | ----------- |
| _ids_ | An array of IDs of desired structs. |
| _visibility_ | Filter for the visible state of the structs |
| _withContentOnly?_ | Boolean. |


> Read API docs [here](https://js-sdk-api.subsocial.network/classes/api_src_subsocial.SubsocialApi.html#findPostsWithAllDetails)

:point_down: **There are also methods with ready-made visibility filters.**

### findPublicPostsWithAllDetails

Find and load posts that have the `hidden == false` field in their Substrate struct and their IPFS content is
not empty, using their extension and the owner's profile and space (if defined).

```
api.findPublicPostsWithAllDetails(ids: AnyPostId[]): Promise<PostWithAllDetails[]>
```

> Read API docs [here](https://js-sdk-api.subsocial.network/interfaces/api_src_subsocial.ISubsocialApi.html#findPublicPostsWithAllDetails)

### findUnlistedPostsWithAllDetails

Find and load posts that have the `hidden == true` field in their Substrate struct and their IPFS content is
not empty, using their extension and owner's profile and space (if defined).

```
flatApi.findUnlistedPostsWithAllDetails(ids: AnyPostId[]): Promise<PostWithAllDetails[]>
```

> Read API docs [here](https://js-sdk-api.subsocial.network/interfaces/api_src_subsocial.ISubsocialApi.html#findUnlistedPostsWithAllDetails)


### findPublicPostsWithSomeDetails

Load an array of information about public posts with the space and/or owner.

```
flatApi.findPublicPostsWithSomeDetails(query: FindPostsWithDetailsQuery): Promise<PostWithSomeDetails[]
```

| Properties    | Description |
| ----------- | ----------- |
| _ids_ | An array of IDs of desired structs. |
| _visibility_ | Filter for the visible state of the structs |
| _withContentOnly?_ | Boolean. |
| _withSpace?_ | Pass `true` to get the space data. |
| _withOwner?_ | Pass `true` to get the profile data. |

> Read API docs [here](https://js-sdk-api.subsocial.network/interfaces/api_src_subsocial.ISubsocialApi.html#findPublicPostsWithSomeDetails)
