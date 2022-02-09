---
id: spaces
title: Spaces
---

## Find and load single space

### findSpace

```
findSpace(query: FindSpaceQuery): Promise<SpaceData | undefined>
```

Example:

```typescript
flatApi.subsocial.findSpace({id: '1'})
```

| Properties    | Description |
| ----------- | ----------- |
| _id_ | id of desired struct. |
| _visibility_ | Filter for visible state of the structs (see [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility)). |

> 🆃 [FindSpaceQuery](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findspacequery): [*FindStruct*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#findstruct) < [*AnySpaceId*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid) >

> 🆃 [SpaceData](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata): [*CommonData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata) < [*Space*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.space.html), [*SpaceContent*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent) >

## Find and load an array of spaces

### findAllSpaces

```
flatApi.subsocial.findAllSpaces(ids: AnySpaceId[]): Promise<SpaceData[]>
```

Example:

```typescript
flatApi.subsocial.findAllSpaces([ '1' ])
```

> 🆃 [AnySpaceId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid): [*SpaceId*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html) | *BN*

> 🆃 [SpaceData](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata): [*CommonData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata) < [*Space*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.space.html), [*SpaceContent*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent) >

### findSpaces

```
flatApi.subsocial.findSpaces(query: FindSpacesQuery): Promise<SpaceData[]>
```

Example:

```typescript
flatApi.subsocial.findSpaces({
  ids: [ '1', '1354', '1573', '1599', '1040' ],
  visibility: "onlyVisible",
})
```

| Properties    | Description |
| ----------- | ----------- |
| _ids_ | An array of ids of desired structs. |
| _visibility_ | Filter for visible state of the structs (see [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility)). |
| _withContentOnly?_ | Boolean. |

> 🆃 [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility): 'onlyVisible' | 'onlyHidden' | 'onlyPublic' | 'onlyUnlisted'

> 🆃 [SpaceData](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata): [*CommonData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata) < [*Space*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.space.html), [*SpaceContent*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent) >

### findPublicSpaces

Load an array of information about public spaces from the Subsocial blockchain and IPFS by a given array of space `ids`.

A space is considered public if it meets these conditions:

- The `hidden` field on its blockchain structure is `false`.
- And there is a corresponding JSON file that represents the space's content on IPFS.

```
flatApi.subsocial.findPublicSpaces(ids: AnySpaceId[]): Promise<SpaceData[]>
```

Example:

```typescript
flatApi.subsocial.findPublicSpaces([ '1' ])
```

> 🆃 [AnySpaceId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid): [*SpaceId*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html) | *BN*

> 🆃 [SpaceData](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata): [*CommonData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata) < [*Space*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.space.html), [*SpaceContent*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent) >

### findUnlistedSpaces

Find and load an array of information about unlisted spaces from the Subsocial blockchain and IPFS by a given array of space `ids`.

A space is considered unlisted if it meets either of these conditions:

- The `hidden` field on its blockchain structure is `true`.
- Or there is no corresponding JSON file that represents the space's content on IPFS.

```
flatApi.subsocial.findUnlistedSpaces(ids: AnySpaceId[]): Promise<SpaceData[]>
```

Example:

```typescript
flatApi.subsocial.findUnlistedSpaces(['1'])
```

> 🆃 [AnySpaceId](https://docs.subsocial.network/js-docs/js-sdk/modules.html#anyspaceid): [*SpaceId*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.spaceid.html) | *BN*

> 🆃 [SpaceData](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata): [*CommonData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata) < [*Space*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.space.html), [*SpaceContent*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent) >


