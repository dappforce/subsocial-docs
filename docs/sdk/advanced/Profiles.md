---
id: profiles
title: Profiles
---
 
## Find and load a single profile

```
flatApi.subsocial.findProfile(id: AnyAccountId): Promise<ProfileData | undefined>
```

Example:

```javascript
flatApi.subsocial.findProfile('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')
```

> 🆃 [AnyAccountId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyaccountid): *AccountId* | *string*

> 🆃 [ProfileData](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#profiledata): [*CommonData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata) < [*SocialAccountWithId*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#socialaccountwithid), [*ProfileContent*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#profilecontent) > & { profile?: [*Profile*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.profile.html) }

## Find and load an array of profiles

```
flatApi.subsocial.findProfiles(ids: AnyAccountId[]): Promise<ProfileData[]>
```

Example:

```javascript
flatApi.subsocial.findProfiles([ '3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8' ])
```

> 🆃 [AnyAccountId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyaccountid): *AccountId* | *string*

> 🆃 [ProfileData](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#profiledata): [*CommonData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata) < [*SocialAccountWithId*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#socialaccountwithid), [*ProfileContent*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#profilecontent) > & { profile?: [*Profile*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.profile.html) }
