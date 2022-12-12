---
id: register-usernames
title: Registering Usernames
displayed_sidebar: developSidebar
---
**This section covers how to programatically register Subsocial Username on the Subsocial blockchain.**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info What is Subsocial Username?
Subsocial usernames allow you to map a human-readable name to your Substrate account. Read more [here](/docs/tutorials/usernames).
:::

To register a Subsocial username from web UI, go to https://polkaverse.com/dd.

### Registering username

To register new username, you need to pass a set of details to create the transaction:

```typescript
api.substrateApi.tx.domains.registerDomain(fullDomain: Bytes | string | Uint8Array, content: SubsocialSupportContent | {
                None: any;
            } | {
                Other: any;
            } | {
                IPFS: any;
            } | string | Uint8Array, expiresIn: u32 | AnyNumber | Uint8Array)
```

| Params    | Description |
| ----------- | ----------- |
| _fullDomain_ | Full username like myname.sub |
| _content_ | The content field can have values like string, IPFS content, urls or Subsocial defined object. |
| _expiresIn_ | The number of blocks after which username expires. |


Example:

```typescript
const username = 'ramesh.sub'
const content = {
  IPFS: 'my custom content'
}
const expiresIn = 1000

const substrateApi = await api.substrateApi
const usernameTransaction = await substrateApi.tx.domains.registerDomain(username, content, expiresIn)
```

### Updating content 

To set content for an existing username, you can use the following method:

```typescript
api.substrateApi.tx.domains.setDomainContent(domain: Bytes | string | Uint8Array, content: SubsocialSupportContent | {
                None: any;
            } | {
                Other: any;
            } | {
                IPFS: any;
            } | string | Uint8Array)
```

| Params    | Description |
| ----------- | ----------- |
| _domain_ | Existing username like myname.sub |
| _content_ | The content field can have values like string, IPFS content, urls or Subsocial defined object. |


Example:

```typescript
const username = 'ramesh.sub'
const content = {
  IPFS: 'my new custom content'
}

const substrateApi = await api.substrateApi
const usernameTransaction = await substrateApi.tx.domains.setDomainContent(username, content)
```

### Updating values

Each username entity have properties called innerValue and outerValue that can be set by user. Generally, we use innerValue for referencing a particular space on Subsocial blockchain and outer for websites or urls.

To set values for an existing username, you can use the following method:


<Tabs
defaultValue="inner"
values={[
{label: 'Inner Value', value: 'inner'},
{label: 'Outer Value', value: 'outer'},
]}>
<TabItem value="inner">

```typescript
api.substrateApi.tx.domains.setInnerValue(domain: Bytes | string | Uint8Array, valueOpt: Option<PalletDomainsInnerValue> | null | Uint8Array | PalletDomainsInnerValue | {
                Account: any;
            } | {
                Space: any;
            } | {
                Post: any;
            } | string)
```

| Params    | Description |
| ----------- | ----------- |
| _domain_ | Existing username like myname.sub |
| _valueOpt_ | The value opt can point to Subsocial blockchain entities like Space, Account, Post, etc. |


Example:

```typescript
const username = 'ramesh.sub'
const valueOpt = {
  Space: '1'
}

const substrateApi = await api.substrateApi
const usernameTransaction = await substrateApi.tx.domains.setInnerValue(username, valueOpt)
```

  </TabItem>
  <TabItem value="outer">

```typescript
api.substrateApi.tx.domains.setOuterValue(domain: Bytes | string | Uint8Array, valueOpt: Option<Bytes> | null | Uint8Array | Bytes | string)
```

| Params    | Description |
| ----------- | ----------- |
| _domain_ | Existing username like myname.sub |
| _valueOpt_ | The valueOpt field can have values like string, urls or can be null too. |


Example:

```typescript
const username = 'ramesh.sub'
const valueOpt = 'https://polkaverse.com'

const substrateApi = await api.substrateApi
const usernameTransaction = await substrateApi.tx.domains.setOuterValue(username, valueOpt)
```

  </TabItem>
</Tabs>
