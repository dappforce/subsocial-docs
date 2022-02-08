---
id: flat-api
title: Flat API
---

Flat API creates a new connection to the Flat Subsocial API (with a wrapper which returns flat structs). 
Thus, using the Flat, we abstract from the blockchain and can use the usual javascript types.

```
FlatSubsocialApi(props: NewSubsocialApiProps): FlatSubsocialApi
```

>🆃 NewSubsocialApiProps: Omit<[*SubsocialApiProps*](https://docs.subsocial.network/js-docs/js-sdk/modules/api.html#subsocialapiprops), 'substrateApi'> & { substrateNodeUrl: *string*, substrateApi?: *ApiPromise* }
