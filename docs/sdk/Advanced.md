---
id: advanced
title: Advanced
---

Subsocial api has additional methods without flat wrapper.

## [Spaces](/docs/sdk/quick-start/spaces/overview)

### Find and load an array of spaces 

#### findSpaces

```
flatApi.subsocial.findSpaces(filter: FindSpacesQuery): Promise<SpaceData[]>
```

Example:

```typescript
flatApi.subsocial.findSpaces({ 
  ids: [ '1', '1354', '1573', '1599', '1040'],
  visibility: "onlyVisible",
})
```

Properties:
- `ids` - An array of ids of desired structs.
- `visibility` - Filter for visible state of the structs (see [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility)).
- `withContentOnly?` - Boolean.

> 🆃 [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility): 'onlyVisible' | 'onlyHidden' | 'onlyPublic' | 'onlyUnlisted'
>
> The four visible state filters correspond to the next conditions:
> - `onlyVisible` – returns spaces where `hidden` field on corresponding Substrate struct is `false`.
> - `onlyHidden` – returns spaces where `hidden` field on corresponding Substrate struct is `true`.
> - `onlyPublic` – returns spaces where `hidden` field on corresponding Substrate struct is `false`
    > and there is a corresponding JSON file on IPFS.
> - `onlyUnlisted` – returns spaces where either the `hidden` field is `true`
    > or there is a no corresponding JSON file on IPFS.

> 🆃 [SpaceData](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#spacedata): [*CommonData*](https://docs.subsocial.network/js-docs/js-sdk/modules/dto.html#commondata) < [*Space*](https://docs.subsocial.network/js-docs/js-sdk/interfaces/interfaces.space.html), [*SpaceContent*](https://docs.subsocial.network/js-docs/js-sdk/modules.html#spacecontent) >

## [Posts](/docs/sdk/quick-start/posts/overview)

### Find and load an array of posts

```
flatApi.subsocial.findPosts(filter: FindPostsQuery): Promise<PostData[]>
```

Example:

```javascript
flatApi.subsocial.findPosts({ 
  ids: [ '1', '9', '32'],
  visibility: 'onlyVisible',
})
```

Properties:
- `ids` - An array of ids of desired structs.
- `visibility` - Filter for visible state of the structs (see [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility)).
- `withContentOnly?`- Boolean.

> 🆃 [Visibility](https://docs.subsocial.network/js-docs/js-sdk/modules.html#visibility): 'onlyVisible' | 'onlyHidden' | 'onlyPublic' | 'onlyUnlisted'
>
> The four visible state filters correspond to the next conditions:
> - `onlyVisible` – returns posts where `hidden` field on corresponding Substrate struct is `false`.
> - `onlyHidden` – returns posts where `hidden` field on corresponding Substrate struct is `true`.
> - `onlyPublic` – returns posts where `hidden` field on corresponding Substrate struct is `false`
    > and there is a corresponding JSON file on IPFS.
> - `onlyUnlisted` – returns posts where either the `hidden` field is `true`
    > or there is a no corresponding JSON file on IPFS.
