---
id: create-profiles
title: Create And Update Profiles
displayed_sidebar: developSidebar
---

<head>
  <title>Creating and Updating Profiles With The Subsocial JS SDK</title>
</head>

import IFrameViewer from '@site/src/components/IframeComponent';

**This section covers how to create and update profiles on the Subsocial blockchain.**

## Create a profile

To create a profile it is first necessary to create a space and then set it as the profile.

```
substrateApi.tx.spaces.createSpace(content, permissionsOpt)
substrateApi.tx.profiles.setProfile(spaceId)
```

> 🅸 [IpfsContent](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html) is function that return substrate like implementation for enum { IPFS: "CID of your content"}.  

Example:

```typescript
import { IpfsContent } from "@subsocial/api/substrate/wrappers"

...
const cid = await api.ipfs.saveContent({
  about: 'Subsocial official account.',
  avatar: 'Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe', // ipfsImageCid = await api.subsocial.ipfs.saveFile(file)
  name: 'Subsocial',
})

const spaceTransaction = substrateApi.tx.spaces.createSpace(
  IpfsContent(cid),
  null // Permissions config (optional)
)

// Send the spaceTransaction and wait for it to get the newly created spaceId.
// Now set this space as your profile.

const profileTx = substrateApi.tx.profiles.setProfile(spaceId);
...
```

 <IFrameViewer
      src="https://play.subsocial.network/writing-data/profile?iframe=true"
  />
<br/>

## Update a profile

Updating a profile is the same as updating the profile space. You can just update the profile space and it will work out of the box.

> 🆃 [ProfileUpdateType](https://docs.subsocial.network/js-docs/js-sdk/modules.html#profileupdatetype): { content: [_OptionContent_](https://docs.subsocial.network/js-docs/js-sdk/classes/optioncontent.html) }  
