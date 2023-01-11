---
id: create-follow
title: Following And Unfollowing
displayed_sidebar: developSidebar
---
**This section covers how to follow and unfollow on the Subsocial blockchain.**

## Methods for profiles

### Follow An Account

Start following an account.

```
substrateApi.tx.accountFollows.followAccount(AccountId: AnyAccountId)
```

Example: 

```typescript
const substrateApi = await api.substrateApi
const tx = substrateApi.tx.accountFollows.followAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')
```

### Unfollow An Account

Stop following an account.

```
substrateApi.tx.accountFollows.unfollowAccount(AccountId: AnyAccountId)
```

Example: 

```typescript
const substrateApi = await api.substrateApi
const tx = substrateApi.tx.accountFollows.unfollowAccount('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')
```

> 🆃 [AnyAccountId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyaccountid): *AccountId* | *string*

## Methods for spaces

### Follow A Space

Start following a space.

```
substrateApi.tx.spaceFollows.followSpace(SpaceId: AnySpaceId)
```

Example:

```typescript
const substrateApi = await api.substrateApi
const tx = substrateApi.tx.spaceFollows.followSpace('1')
```

### Unfollow A Space

Stop following a space.

```
substrateApi.tx.spaceFollows.unfollowSpace(SpaceId: AnySpaceId)
```

Example:

```typescript
const substrateApi = await api.substrateApi
const tx = substrateApi.tx.spaceFollows.unfollowSpace('1')
```

> 🆃 [AnySpaceId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid): [*SpaceId*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html) | *BN*
