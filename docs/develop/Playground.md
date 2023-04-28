---
id: playground
title: Playground
displayed_sidebar: developSidebar
---

<head>
  <title>Subsocial SDK Playground - Run code snippets online</title>
</head>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

Subsocial's Playground is an easy tool that allows you to run code snippets from our SDK without downloading anything.

This Playground provides a perfect environment to play, test and debug some of your code snippets before building a real project. 

:::info

The Playground is running on our Testnet called Soonsocial. You can get some test tokens from our [Discord bot](https://discord.gg/JRTMTtPK).

:::

### Try out the [Subsocial Playground](https://play.subsocial.network/)

## Built-in APIs
It comes with a set of rules & in-built function to help you focus on library methods rather than writing everything from scratch. The following list represents these functions and their code: 

### Subsocial API
The Subsocial Playground comes with the Subsocial SDK's `api` instance. This is used to interact with most of the SDK methods. Here is how it's being created under the hood:

<Tabs
  defaultValue="testnet"
  values={[
    {label: 'TestNet', value: 'testnet'},
    {label: 'MainNet', value: 'mainnet'},
    {label: 'LocalNet', value: 'localnet'},
  ]}>
  <TabItem value="mainnet">

```ts
  const configDetails = {
    substrateNodeUrl: 'wss://para.f3joule.space',
    ipfsNodeUrl: 'https://ipfs.subsocial.network'
  }
```

  </TabItem>
  <TabItem value="testnet">

```ts
  const configDetails = {
    substrateNodeUrl: 'wss://rco-para.subsocial.network',
    ipfsNodeUrl: 'https://gw.crustfiles.app'
  }
```

  </TabItem>
  <TabItem value="localnet">

```ts
  const configDetails = {
    substrateNodeUrl: 'http://127.0.0.1:9944',
    ipfsNodeUrl: 'http://127.0.0.1:8080'
  }
```
:::caution

Make sure to run local Subsocial & IPFS nodes before using these configs in your project.

:::
  </TabItem>
</Tabs>

```typescript
  const api = api = await SubsocialApi.create({
    ...configDetails,
    useServer: {
      httpRequestMethod: 'get'
    }
  })
```

### IPFS API
The Subsocial Playground comes with the CRUST IPFS API's `ipfs` instance. This is use to store data related spaces, posts and comments on the network. Let's see how the configuration is set:


```typescript
  // Required only for Testnet.
  const authHeader = 'c3ViLTVGQTluUURWZzI2N0RFZDhtMVp5cFhMQm52TjdTRnhZd1Y3bmRxU1lHaU45VFRwdToweDEwMmQ3ZmJhYWQwZGUwNzFjNDFmM2NjYzQzYmQ0NzIxNzFkZGFiYWM0MzEzZTc5YTY3ZWExOWM0OWFlNjgyZjY0YWUxMmRlY2YyNzhjNTEwZGY4YzZjZTZhYzdlZTEwNzY2N2YzYTBjZjM5OGUxN2VhMzAyMmRkNmEyYjc1OTBi';

  api.ipfs.setWriteHeaders({
    authorization: 'Basic ' + authHeader
  })
```

### Keyring
The Subsocial Playground comes with a basic `keyring` instance to help you sign and send transactions. By default, we use the Alice (Test) account for our Testnet transactions, but you can change it if you want. 


```typescript
  import { Keyring } from "@polkadot/api"
  import { waitReady } from '@polkadot/wasm-crypto';

  await waitReady()
  const keyring = new Keyring({ type: 'sr25519' })
```

### Sending Transaction
The Subsocial Playground allows you to sign and send transactions with Mnemonic phrases using both Keyring and the Polkadot.js extension. 

#### Using Keyring
To sign and send transactions with Mnemonic phrases through Keyring, use:

```typescript
  transaction.signAndSend(pair, logger) 
```

The logger is a method that tracks the transaction and show toasts in UI. Here's how it works:

```typescript
const logger = (result: any) => {
    const { status } = result

    if (!result || !status) {
      return;
    }
    if (status.isFinalized) {
      const blockHash = status.isFinalized
        ? status.asFinalized
        : status.asInBlock;
      console.log('✅ Tx finalized. Block hash', blockHash.toString());
      showToast(`✅ Transaction: ${status.isFinalized ? 'Finalised' : 'Added in Block'}`);
      const newIds = getNewIdsFromEvent(result); // get first argument from array.
      if (newIds.length > 0) {
        showToast(`⚡️ New Item Id: ${newIds[0]}`)
      }
      return;
    } else if (result.isError) {
      console.log(JSON.stringify(result));
      showToast(JSON.stringify(result));
    } else {
      console.log('⏱ Current tx status:', status.type);
      showToast(`⏱ Current tx status: ${status.type}`);
    }
  }
```

#### Using Polkadot.js Extension
Signing using the Polkadot.js extension: 

#### Syntax

```typescript
  signAndSendTx(transactionVariable, accountAddressToSignFrom)
```

Implementation of signAndSendTx function: 

```typescript
  const signAndSendTx = async (tx: any, accountId: string) => {
    const { isWeb3Injected, web3Enable, web3AccountsSubscribe, web3FromAddress } = await import('@polkadot/extension-dapp')
    const injectedExtensions = await web3Enable('twitter-dapp-subsocial')
    if (!isWeb3Injected) {
      showToast(`Browser does not have any polkadot.js extension`);
      return;
    }

    if (!injectedExtensions.length) {
      showToast(`Polkadot Extension has not authorized us to get accounts`);
      return;
    }

    await web3AccountsSubscribe(async (accounts) => {
      if (accounts.length > 0) {
        const addresses = accounts.map((account) => account.address)

        const containsAddress = addresses.includes(accountId)
        if (!containsAddress) {
          showToast("😬 Address not found on Polkadot.js extension.")
          return;
        }
        const { signer } = await web3FromAddress(accountId)
        await tx.signAsync(accountId, { signer })

        await tx.send(logger)
      }
    })
  }
```