---
id: fetch-usernames
title: Fetching Usernames
displayed_sidebar: developSidebar
---

<head>
  <title>Fetch Subsocial Usernames | JS SDK Guide</title>
</head>

import IFrameViewer from '@site/src/components/IframeComponent';

**This section covers how to fetch details about a particular username on the Subsocial blockchain.**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info What are Subsocial Usernames?
Subsocial usernames allow you to map a human-readable name to your Substrate account. Read more [here](/docs/tutorials/usernames).
:::

The Subsocial username entity allows you to map data like URLs, text, and spaces to a human readable text string. To explore these properties of an already registered username, we can use the following approaches:

### Usernames by owner

An owner is a substrate account that can hold up to 3 usernames for now. With the following method we can fetch all of them:

```typescript
api.blockchain.domainsByOwner(accountId: string): Promise<string[]>
```

Example:

```typescript
const accountId = '5HYYeCa1Hae5YYGJ2pHskHLVrA7V5WjaSuSbntidhhD9qqgs'
const usernames = await api.blockchain.domainsByOwner(accountId)
console.log(usernames)
```

Response:

```json
[
  "tusharojha.sub",
  "ilovepolka.sub",
  "wagmi.sub"
]
```

> Try it yourself, on the [Subsocial Playground](https://play.subsocial.network/reading-data/domains/by-owner).


 <IFrameViewer
      src="https://play.subsocial.network/reading-data/domains/by-owner?iframe=true"
  />


### Details by username

A username entity holds a lot of values on-chain like created, expiresAt, owner, content, innerValue and much more.

Let's see how we can explore these properties by passing the username:


<Tabs
defaultValue="single"
values={[
{label: 'Single', value: 'single'},
{label: 'Multiple', value: 'multiple'},
]}>
<TabItem value="single">


```typescript
api.blockchain.registeredDomain(username: string): Promise<PalletDomainsDomainMeta[]>
```

Example:

```typescript
const username = 'olehmell.sub'
const usernameDetails = await api.blockchain.registeredDomain(username)
return usernameDetails
```

Response:

```json
[
  {
    "created": {
      "account": "3omeLMCdtrojRPf7KyvTg78EvLxyJMo7mb2bqM28EEvxmXFM",
      "block": 344181,
      "time": 1649878698238
    },
    "updated": null,
    "expiresAt": 2972181,
    "owner": "3omeLMCdtrojRPf7KyvTg78EvLxyJMo7mb2bqM28EEvxmXFM",
    "content": {
      "none": null
    },
    "innerValue": {
      "space": 1626
    },
    "outerValue": "0x68747470733a2f2f6769746875622e636f6d2f6f6c65686d656c6c",
    "domainDeposit": 0,
    "outerValueDeposit": 2700000000
  }
]
```

  </TabItem>
  <TabItem value="multiple">


```typescript
api.blockchain.registeredDomains(usernames: string[]): Promise<PalletDomainsDomainMeta[]>
```

Example:

```typescript
const usernames = ['olehmell.sub', 'ilovepolka.dot']
const usernameDetails = await api.blockchain.registeredDomain(usernames)
return usernameDetails
```

Response:

```json
[
  {
    "created": {
      "account": "3omeLMCdtrojRPf7KyvTg78EvLxyJMo7mb2bqM28EEvxmXFM",
      "block": 344181,
      "time": 1649878698238
    },
    "updated": null,
    "expiresAt": 2972181,
    "owner": "3omeLMCdtrojRPf7KyvTg78EvLxyJMo7mb2bqM28EEvxmXFM",
    "content": {
      "none": null
    },
    "innerValue": {
      "space": 1626
    },
    "outerValue": "0x68747470733a2f2f6769746875622e636f6d2f6f6c65686d656c6c",
    "domainDeposit": 0,
    "outerValueDeposit": 2700000000
  },
  {
    "created": {
      "account": "3tXK2JzMuWPuMiboMMyYTfcYoN7NJwvHojgmBKiRDitKuMLo",
      "block": 406861,
      "time": 1651591092295
    },
    "updated": null,
    "expiresAt": 3034861,
    "owner": "3tXK2JzMuWPuMiboMMyYTfcYoN7NJwvHojgmBKiRDitKuMLo",
    "content": {
      "none": null
    },
    "innerValue": null,
    "outerValue": null,
    "domainDeposit": 10000000000,
    "outerValueDeposit": 0
  }
]
```

  </TabItem>
</Tabs>

<IFrameViewer
    src="https://play.subsocial.network/reading-data/domains/by-name?iframe=true"
/>



### Username of a space

A space can have username pointing to it. While building apps you might want to know about these usernames, and you can easily get them using the following method:

```typescript
api.blockchain.domainNameBySpaceId(accountId: string, spaceId: AnySpaceId): Promise<string>
```

Example:

```typescript
const accountId = '3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8'
const spaceId = '1'

const username = await api.blockchain.domainNameBySpaceId(accountId, spaceId)
return { userName: username }
```

Response:

```json
{
  "userName": "subsocial.sub"
}
```

<IFrameViewer
    src="https://play.subsocial.network/reading-data/domains/by-space?iframe=true"
/>
