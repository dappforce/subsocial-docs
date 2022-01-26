---
id: profiles
title: Profiles
---
Your [profile](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.profile.html) is linked to your Subsocial account address, and is an overview of your activity on Subsocial. You can set a profile picture and a username for your account, as well as a personal website link. Below your profile overview is a collection of all of your posts, comments, reactions, and Spaces. You can view others’ profiles to see this information about them.

> [Learn more in Glossary](/docs/glossary/overview)


## Find and load single profile

```
flatApi.findProfile(id: AnyAccountId): Promise<ProfileData | undefined>
```

Example:

```javascript
flatApi.findProfile('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')
```

Output: 

```json
{
    "id": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
    "struct": {
        "id": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
        "followersCount": 473,
        "followingAccountsCount": 16,
        "followingSpacesCount": 337,
        "reputation": 112873,
        "hasProfile": true,
        "createdByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
        "createdAtBlock": 717415,
        "createdAtTime": 1601225712000,
        "isUpdated": true,
        "updatedByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
        "updatedAtBlock": 717425,
        "updatedAtTime": 1601225772000,
        "contentId": "bafyreihqm342gynm5ubkb3is4736t5tdgu7znkm6k5ew44mys7ab34wqvu"
    },
    "content": {
        "about": "Subsocial official account.",
        "avatar": "Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe",
        "name": "Subsocial",
        "summary": "Subsocial official account.",
        "isShowMore": false
    }
}
```

> 🆃 [AnyAccountId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyaccountid): *AccountId* | *string*

> 🆃 [ProfileData](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#profiledata): [*CommonData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata) < [*SocialAccountWithId*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#socialaccountwithid), [*ProfileContent*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#profilecontent) > & { profile?: [*Profile*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.profile.html) }


## Find and load an array of profiles

```
flatApi.findProfiles(ids: AnyAccountId[]): Promise<ProfileData[]>
```

## Find and load structs and content

If needs to store information in different places:

#### Get structs

```
flatApi.findProfileStructs(ids: AnyAccountId[]): Promise<ProfileStruct[]>
flatApi.findProfileStruct(id: AnyAccountId): Promise<ProfileStruct | undefined>
```

Example:

```typescript
flatApi.findProfileStruct('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')
```

Output:

```json
{
  "id": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
  "followersCount": 473,
  "followingAccountsCount": 16,
  "followingSpacesCount": 337,
  "reputation": 112873,
  "hasProfile": true,
  "createdByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
  "createdAtBlock": 717415,
  "createdAtTime": 1601225712000,
  "isUpdated": true,
  "updatedByAccount": "3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8",
  "updatedAtBlock": 717425,
  "updatedAtTime": 1601225772000,
  "contentId": "bafyreihqm342gynm5ubkb3is4736t5tdgu7znkm6k5ew44mys7ab34wqvu"
}
```

#### Get contents

Find and load off-chain information about profiles from IPFS by a given `cid`.

Profile information only exists if there is a corresponding JSON file that represents the profiles' content on IPFS.

```
flatApi.subsocial.ipfs.findProfiles(cids: IpfsCid[]): Promise<ContentResult<ProfileContent>>
flatApi.subsocial.ipfs.findProfile(cid: IpfsCid): Promise<ProfileContent | undefined>
```

Example: 

```typescript
import { convertToDerivedContent } from "@subsocial/api/flat-subsocial/utils";

(async () => {
  convertToDerivedContent(await res.subsocial.ipfs.findProfile("bafyreihqm342gynm5ubkb3is4736t5tdgu7znkm6k5ew44mys7ab34wqvu"))
})()
```

Output: 

```json
{
  "bafyreihqm342gynm5ubkb3is4736t5tdgu7znkm6k5ew44mys7ab34wqvu": {
    "about": "Subsocial official account.",
    "avatar": "Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe",
    "name": "Subsocial",
    "summary": "Subsocial official account.",
    "isShowMore": false
  }
}
```


> 🆃 [IpfsCid](https://docs.subsocial.network/js-docs/js-sdk/modules.html#ipfscid): *string* | *CID* | *IpfsCid*

> 🆃 [ContentResult](https://docs.subsocial.network/js-docs/js-sdk/modules.html#contentresult) <*T*>: *Record*<*CidAsStr*, *T*>

> 🆃 [ProfileContent](https://docs.subsocial.network/js-docs/js-sdk/modules.html#profilecontent): { about: *string*; avatar: *string*; name: *string* }
