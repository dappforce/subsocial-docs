---
id: getting-follow
title: Getting 
---
## Check if user is following

### isSpaceFollower

Checking if an account is following space.

```
substrateApi.isSpaceFollower(myAddress: AnyAccountId, spaceId: AnySpaceId): Promise<boolean>
```

Example: 

```typescript
const isFollower = await substrateApi.isSpaceFollower('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8', idToBn('1'))
```

### isAccountFollower

Checking if an account is following another account.

```
SubstrateApi.isAccountFollower(myAddress: AnyAccountId, followedAddress: AnyAccountId): Promise<boolean>
```

```typescript
const isFollower = await substrateApi.isAccountFollower('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8', idToBn('1'))
```

> 🆃 [AnyAccountId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyaccountid): *AccountId* | *string*
>
> 🅸 [AnySpaceId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid): [*SpaceId*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html) | *BN*

## Find and load a list of space followers

### spacesFollowedByAccount

Get array of space ids that the user is following.

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

Get an array of account ids that follow the space.

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

## Find and load the list of followers and subscriptions

### accountFollowers

Get an array of account ids that follow the account.

```typescript
import { GenericAccountId as SubstrateAccountId } from '@polkadot/types'
import { SubstrateId } from '@subsocial/types'

const res = await substrateApi.query.profileFollows.accountFollowers('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8') as Vec<SubstrateAccountId>
const accountFollowersIds = bnsToIds(res as unknown as SubstrateId[])
```

### accountsFollowedByAccount

Get an array of account ids that an account is following

```typescript
import { GenericAccountId as SubstrateAccountId } from '@polkadot/types'
import { SubstrateId } from '@subsocial/types'

const res = await substrateApi.query.profileFollows.accountsFollowedByAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8') as Vec<SubstrateAccountId>
const accountsFollowedByAccountIds = bnsToIds(res as unknown as SubstrateId[])
```
