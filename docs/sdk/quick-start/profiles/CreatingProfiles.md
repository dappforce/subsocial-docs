---
id: creating-profiles
title: Creating and updating
---

## Create Profile

```
substateApi.tx.profiles.createProfile(content)
```

> 🅸 [IpfsContent](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html) is function that return substrate like implementation for enum { IPFS: "CID of your content"}.  

Example:

```typescript
import { IpfsContent } from "@subsocial/types/substrate/classes"

...
const cid = await ipfs.saveContent({
  about: 'Subsocial official account.',
  avatar: 'Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe', // ipfsImageCid = await api.subsocial.ipfs.saveFile(file)
  name: 'Subsocial',
})

const tx = substrateApi.tx.profiles.createProfile(IpfsContent('bafyreib3mgbou4xln42qqcgj6qlt3cif35x4ribisxgq7unhpun525l54e'))
...
```

## Update Profile

```
substateApi.tx.profiles.updateProfile(update: ProfileUpdateType)
```

Update properties:  
1: `content`: [IpfsContent](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html) is function that return substrate like implementation for enum { IPFS: "CID of your content"}.  

Example: 

```typescript
import { IpfsContent } from "@subsocial/types/substrate/classes"

...
const cid = await ipfs.saveContent({
  about: 'Subsocial official account.',
  avatar: 'Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe',
  name: 'Subsocial updated', //updated field
})

const update = { content: IpfsContent(cid) }

const tx = substrateApi.tx.profiles.updateProfile(update)
...
```

> 🆃 [ProfileUpdateType](https://docs.subsocial.network/js-docs/js-sdk/modules.html#profileupdatetype): { content: [_OptionContent_](https://docs.subsocial.network/js-docs/js-sdk/classes/optioncontent.html) }  
