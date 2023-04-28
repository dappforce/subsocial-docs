---
id: fetch-profiles
title: Fetch Profiles
displayed_sidebar: developSidebar
---

<head>
  <title>How To Profiles With The Subsocial JS SDK</title>
</head>

import IFrameViewer from '@site/src/components/IframeComponent';

**This section covers how to fetch profiles from the Subsocial blockchain.**

## Find and load a single profile

```
api.base.findProfileSpace(id: AnyAccountId): Promise<RawSpaceData | undefined>
```

Example:

```javascript
api.base.findProfileSpace('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8')
```

Output: 

```json
{
  "struct": {
    "id": 12168,
    "created": {
      "account": "3pje7zib32ZA2h61dkCH3Rw4q9PPsoYyEGQ9gPZpNRFHQFnq",
      "block": 639386,
      "time": 1603970334000
    },
    "edited": false,
    "owner": "3pje7zib32ZA2h61dkCH3Rw4q9PPsoYyEGQ9gPZpNRFHQFnq",
    "content": {
      "ipfs": "0x62616679726569623569746469763462656262716f7764667170737533766f63746667696861743464716f32736f787077326a646e637376623234"
    },
    "hidden": false,
    "permissions": null
  },
  "content": {
    "name": "Shawn Tabrizi",
    "about": "I am a developer at Parity Technologies working on Substrate!",
    "image": "QmUBw1ZyV8P4jkbnhBMU734Cks7bXnRo8gQzwzyvDMbNBz"
  }
}
```

> 🆃 [AnyAccountId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyaccountid): *AccountId* | *string*

> 🆃 [ProfileData](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#profiledata): [*CommonData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata) < [*SocialAccountWithId*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#socialaccountwithid), [*ProfileContent*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#profilecontent) > & { profile?: [*Profile*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.profile.html) }

 <IFrameViewer
      src="https://play.subsocial.network/reading-data/profile/single-account?iframe=true"
  />
<br/>
