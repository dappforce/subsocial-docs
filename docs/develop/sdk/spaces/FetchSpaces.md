---
id: fetch-spaces
title: Fetch Spaces
displayed_sidebar: developSidebar
---

<head>
  <title>How To Get Subsocial Spaces With The Subsocial JS SDK</title>
</head>

import IFrameViewer from '@site/src/components/IframeComponent';

**This section covers how to fetch spaces from the Subsocial blockchain.**

## Find and load single space

```
api.findSpace(query: FindSpaceQuery): Promise<SpaceData | undefined>
```

Example:

```javascript
api.findSpace({ id: '1' })
```

Output: 

```json
{
  "id": "1",
  "struct": {
    "createdByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
    "createdAtBlock": 0,
    "createdAtTime": 0,
    "isUpdated": true,
    "updatedByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
    "updatedAtBlock": 1976464,
    "updatedAtTime": 1608780324000,
    "contentId": "bafyreib3mgbou4xln42qqcgj6qlt3cif35x4ribisxgq7unhpun525l54e",
    "id": "1",
    "ownerId": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
    "hidden": false,
    "handle": "subsocial",
    "postsCount": 88,
    "hiddenPostsCount": 7,
    "visiblePostsCount": 81,
    "followersCount": 2200,
    "score": 65716
  },
  "content": {
    "about": "Subsocial is an open protocol for decentralized social networks and marketplaces. It's built with Substrate and IPFS. [Learn more](https://subsocial.network/)",
    "handle": "subsocial",
    "image": "Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe",
    "links": [
      "https://subsocial.network",
      "https://twitter.com/SubsocialChain",
      "https://medium.com/dappforce",
      "https://t.me/Subsocial",
      "https://github.com/dappforce",
      "https://www.youtube.com/channel/UC1xCFynfwMrjEtFdMf8nXgQ"
    ],
    "name": "Subsocial",
    "tags": [
      "subsocial",
      "polkadot",
      "substrate",
      "sofi",
      "chain",
      "ipfs"
    ],
    "summary": "Subsocial is an open protocol for decentralized social networks and marketplaces. It's built with Substrate and IPFS. Learn more",
    "isShowMore": false
  }
}
```

 <IFrameViewer
      src="https://play.subsocial.network/reading-data/space/by-id?iframe=true"
  />
<br/>

> 🆃 type FindSpaceQuery = FindStruct<*AnySpaceId*>

> 🆃 type SpaceData = EntityData<*SpaceStruct*, SpaceContent>


## Find and load an array of spaces

### findPublicSpaces

Load an array of information about public spaces from the Subsocial blockchain and IPFS by a given array of space `ids`.

A space is considered public if it meets these conditions:

- The `hidden` field on its blockchain structure is `false`.
- And there is a corresponding JSON file that represents the space's content on IPFS.

```
api.findPublicSpaces(ids: AnySpaceId[]): Promise<SpaceData[]>
```

Example:

```typescript
api.findPublicSpaces(['1'])
```

### findUnlistedSpaces

Find and load an array of information about unlisted spaces from the Subsocial blockchain and IPFS by a given array of space `ids`.

A space is considered unlisted if it meets either of these conditions:

- The `hidden` field on it's blockchain structure is `true`.
- Or there is no corresponding JSON file that represents the space's content on IPFS.

```
api.findUnlistedSpaces(ids: AnySpaceId[]): Promise<SpaceData[]>
```

Example:

```typescript
api.findUnlistedSpaces(['1'])
```


## Find and load structs and contents separately

### Get structs

```
api.findSpaceStructs(ids: AnyId[]): Promise<SpaceStruct[]>
api.findSpaceStruct(id: AnyId): Promise<SpaceStruct | undefined>
```

Example: 

```typescript
api.findSpaceStruct('1')
```

Output: 

```json
{
  "createdByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
  "createdAtBlock": 0,
  "createdAtTime": 0,
  "isUpdated": true,
  "updatedByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
  "updatedAtBlock": 1976464,
  "updatedAtTime": 1608780324000,
  "contentId": "bafyreib3mgbou4xln42qqcgj6qlt3cif35x4ribisxgq7unhpun525l54e",
  "id": "1",
  "ownerId": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
  "hidden": false,
  "handle": "subsocial",
  "postsCount": 88,
  "hiddenPostsCount": 7,
  "visiblePostsCount": 81,
  "followersCount": 2200,
  "score": 65716
}
```

## Find and load space IDs by owner

Get the IDs of all spaces created by a certain profile.

```
api.blockchain.spaceIdsByOwner(id: AnyAccountId): Promise<SpaceId[]>
```

Example:

```typescript
api.blockchain.spaceIdsByOwner('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')
```

 <IFrameViewer
      src="https://play.subsocial.network/reading-data/space/by-owner?iframe=true"
  />
<br/>

## Find and load space IDs followed by account

Find IDs of all spaces that a profile is following.

```
api.blockchain.spaceIdsFollowedByAccount(id: AnyAccountId): Promise<SpaceId[]>
```

Example:

```typescript
api.blockchain.spaceIdsFollowedByAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')
```

> 🆃 AnyAccountId: *AccountId* | *string*

> 🅸 SpaceId: string

There are more methods available inside `api.blockchain` for fetching spaceIds like getSpaceIdsWithRolesByAccount, getSpacePermissionsByAccount, etc.
