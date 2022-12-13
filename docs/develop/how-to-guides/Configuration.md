---
id: configuration
title: Configuration
displayed_sidebar: developSidebar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Once you have the basic knowledge and understanding about how decentralized social networks work, it's time to get started building your own Social Dapp. To integrate Subsocial with your dApp, you have to add the following configuration settings (we reccomand starting with the tetnet):

<Tabs
defaultValue="testnet"
values={[
{label: 'TestNet', value: 'testnet'},
{label: 'MainNet', value: 'mainnet'},
{label: 'LocalNet', value: 'localnet'},
]}>
<TabItem value="mainnet">

```ts
const config = {
  substrateNodeUrl: "wss://para.f3joule.space",
  ipfsNodeUrl: "https://ipfs.subsocial.network",
};
```

  </TabItem>
  <TabItem value="testnet">

```ts
const config = {
  substrateNodeUrl: "wss://rco-para.subsocial.network",
  ipfsNodeUrl: "https://gw.crustfiles.app",
};
```

  </TabItem>
  <TabItem value="localnet">

```ts
const config = {
  substrateNodeUrl: "http://127.0.0.1:9944",
  ipfsNodeUrl: "http://127.0.0.1:8080",
};
```

:::caution

Make sure to run local Subsocial & IPFS node before using these configs in your project.

:::
</TabItem>
</Tabs>
