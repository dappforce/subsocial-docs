---
id: creating-spaces
title: Creating And Updating 
---
## Create A Space

```
substrateApi.tx.spaces.createSpace(parentIdOpt, handleOpt, content, permissionsOpt)
```


| Params    | Description |
| ----------- | ----------- |
| _parentIdOpt_ | don't use now. |
| _handleOpt_ |  disabled now.   |
| _content_ |  [IpfsContent](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html) is a function that returns a substrate like implementation for enum { IPFS: "CID of your content"}. |
| _permissions_ |  advanced options. |

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

## Update A Space

```
substrateApi.tx.spaces.updateSpace(spaceId: AnySpaceId, update: SpaceUpdateType)
```

| Params    | Description |
| ----------- | ----------- |
| _spaceId_ | ID of the current space. |
| _update_ |  fields available to be updated. |

**Update properties**

| Properties    | Description |
| ----------- | ----------- |
| _handle_? | if enabled. A handle is an alias for a space ID. |
| _content_? | [IpfsContent](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.reaction.html) is a function that returns a substrate like implementation for enum { IPFS: "CID of your content"}.|
| _hidden_? | boolean, if space is hidden from other users. |
| _permissions_? | advance opt. |

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
