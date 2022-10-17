---
id: fetch-follow
title: Fetch Follows
displayed_sidebar: developSidebar
---
**This section covers how to fetch follows on the Subsocial blockchain.**

## Check if a user is following a space or account

### isSpaceFollower

This checks if an account is following a particular space.

```
api.blockchain.isSpaceFollower(myAddress: AnyAccountId, spaceId: AnySpaceId): Promise<boolean>
```

Example: 

```typescript
const isFollower = await api.blockchain.isSpaceFollower('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8', idToBn('1'))
```

### isAccountFollower

This checks if an account is following a particular account.

```
api.blockchain.isAccountFollower(myAddress: AnyAccountId, followedAddress: AnyAccountId): Promise<boolean>
```

```typescript
const isFollower = await api.blockchain.isAccountFollower('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8', idToBn('1'))
```

> 🆃 [AnyAccountId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyaccountid): *AccountId* | *string*

> 🅸 [AnySpaceId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid): [*SpaceId*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html) | *BN*

## Find and load a list of space followers

### spaceIdsFollowedByAccount

Get an array of space IDs that an account is following.

```
api.blockchain.spaceIdsFollowedByAccount(account: AccountId)
```

Example: 

```typescript
import { bnsToIds } from '@subsocial/utils'

const res = await api.blockchain.spacesFollowedByAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')
const followedSpaceIds = bnsToIds(res) // array of Space ids
```

### spaceFollowers

Get an array of account IDs that follow a space.

```
api.substrateApi.query.spaceFollows.spaceFollowers(spaceId: SpaceId)
```

Example:

```typescript
const followersBySpaceId = await api.substrateApi.query.spaceFollows.spaceFollowers('1')
```

## Find and load the list of followers and followings

### accountFollowers

Get an array of account IDs that follow an account.

```typescript
const substrateApi = await api.substrateApi
const accountFollowersIds = await substrateApi.query.accountFollows.accountFollowers('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')
const accountFollowersIds = res
```

### accountsFollowedByAccount

Get an array of account IDs that an account is following.

```typescript
const substrateApi = await api.substrateApi
const res = await substrateApi.query.accountFollows.accountsFollowedByAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')
const accountsFollowedByAccountIds = res
```
