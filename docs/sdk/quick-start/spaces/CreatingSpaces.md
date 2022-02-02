---
id: creating-spaces
title: Creating and updating 
---
## Create Space

```
substrateApi.tx.spaces.createSpace(parentIdOpt, handleOpt, content, permissionsOpt)
```

Params:  
1: `parentIdOpt` - don't use now.  
2: `handleOpt` - disabled now.  
3: `Content` - [IpfsContent](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html) is function that return substrate like implementation for enum { IPFS: "CID of your content"}.  
4: `permissions` - advanced options.  

Example: 

```typescript
import { IpfsContent } from "@subsocial/types/substrate/classes"
...
const cid = await ipfs.saveContent({
  about: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS',
  image: 'Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe', // ipfsImageCid = await api.subsocial.ipfs.saveFile(file)
  name: 'Subsocial',
  tags: [ 'subsocial' ]
})

const tx = substrateApi.tx.spaces.createSpace(
  null,
  null,
  IpfsContent(cid),
  null
)
...
```

## Update space

```
substrateApi.tx.spaces.updateSpace(spaceId: AnySpaceId, update: SpaceUpdateType)
```

Params:  
1: `spaceId` - id of the current space.  
2: `update` - fields available to updating.  

Update properties:  
1: `handle?` - if enabled.  
2: `content?`: [IpfsContent](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html) is function that return substrate like implementation for enum { IPFS: "CID of your content"}.  
3: `hidden?` - boolean, hidden space for other users.  
4: `permissions?`:  - advance opt.  

Example: 

```typescript
import {
  IpfsContent, 
  OptionBool,
  SpaceUpdate
} from "@subsocial/types/substrate/classes"

...
const cid = await ipfs.saveContent({
  about: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS',
  image: 'Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe', 
  name: 'Subsocial updated', // updated field
  tags: ['subsocial']
})

const update = new SpaceUpdate({
  content: IpfsContent(cid),
  hidden: OptionBool(true),
})

const tx = substrateApi.tx.spaces.updateSpace('1', update)
...
```

> 🆃 [AnySpaceId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid): [*SpaceId*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html) | *BN*  

> 🆃 [SpaceUpdateType](https://docs.subsocial.network/js-docs/js-sdk/modules.html#spaceupdatetype): { content: [_OptionContent_](https://docs.subsocial.network/js-docs/js-sdk/classes/optioncontent.html), handle: [_OptionOptionText_](https://docs.subsocial.network/js-docs/js-sdk/classes/optionoptiontext.html), hidden: _Option_<_bool_>, permissions: _Option_<_Option_<[_SpacePermissions_](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spacepermissions.html) >> }  

> 🅸 [SpaceUpdate](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceupdate.html)  

> [OptionBool](https://docs.subsocial.network/js-docs/js-sdk/classes/optionbool.html)  
