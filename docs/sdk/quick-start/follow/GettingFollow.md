---
id: getting-follow
title: Getting Follows
---
## Check if a user is following a space or account

### isSpaceFollower

This checks if an account is following a particular space.

```
substrateApi.isSpaceFollower(myAddress: AnyAccountId, spaceId: AnySpaceId): Promise<boolean>
```

Example: 

```typescript
const isFollower = await substrateApi.isSpaceFollower('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8', idToBn('1'))
```

### isAccountFollower

This checks if an account is following a particular account.

```
SubstrateApi.isAccountFollower(myAddress: AnyAccountId, followedAddress: AnyAccountId): Promise<boolean>
```

```typescript
const isFollower = await substrateApi.isAccountFollower('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8', idToBn('1'))
```

> 🆃 [AnyAccountId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyaccountid): *AccountId* | *string*

> 🅸 [AnySpaceId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid): [*SpaceId*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html) | *BN*

## Find and load a list of space followers

### spacesFollowedByAccount

Get an array of space IDs that an account is following.

```
readyApi.query.spaceFollows.spacesFollowedByAccount(account: AccountId)
```

Example: 

```typescript
import { Vec } from "@polkadot/types";
import { SpaceId as SubstrateSpaceId } from '@subsocial/types/substrate/interfaces'
import { bnsToIds } from '@subsocial/utils'

const res = await substrateApi.query.spaceFollows.spacesFollowedByAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8') as Vec<SubstrateSpaceId>
const followedSpaceIds = bnsToIds(res) // array of Space ids
```

### spaceFollowers

Get an array of account IDs that follow a space.

```
readyApi.query.spaceFollows.spaceFollowers(spaceId: SpaceId)
```

Example:

```typescript
import { GenericAccountId as SubstrateAccountId } from '@polkadot/types'
import { SubstrateId } from '@subsocial/types';

const res = await substrateApi.query.spaceFollows.spaceFollowers('1') as Vec<SubstrateAccountId>
const followersBySpaceId = bnsToIds(res as unknown as SubstrateId[]) // array of Account ids
```

## Find and load the list of followers and followings

### accountFollowers

Get an array of account IDs that follow an account.

```typescript
import { GenericAccountId as SubstrateAccountId } from '@polkadot/types'
import { SubstrateId } from '@subsocial/types'

const res = await substrateApi.query.profileFollows.accountFollowers('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8') as Vec<SubstrateAccountId>
const accountFollowersIds = bnsToIds(res as unknown as SubstrateId[])
```

### accountsFollowedByAccount

Get an array of account IDs that an account is following.

```typescript
import { GenericAccountId as SubstrateAccountId } from '@polkadot/types'
import { SubstrateId } from '@subsocial/types'

const res = await substrateApi.query.profileFollows.accountsFollowedByAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8') as Vec<SubstrateAccountId>
const accountsFollowedByAccountIds = bnsToIds(res as unknown as SubstrateId[])
```
