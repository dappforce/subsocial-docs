---
id: transactions
title: Signing & Sending Transactions
displayed_sidebar: developSidebar
---

**This section covers how to sign and send transactions on the Subsocial blockchain.**

All posts and spaces are associated with public key pairs called accounts.
So, these structures can be created or updated via [transactions](https://polkadot.js.org/docs/api/start/api.tx/). And you need to use a wallet / extension to sign these transactions. Therefore, Subsocial supports the [Polkadot {.js} extension](https://polkadot.js.org/extension/), which allows you to easily manage your keys in a browser.

> If you are new to the Polkadot ecosystem and want help to understand the Polkadot{.js} extension, read this [doc](/docs/tutorials/).


## Creating a Space

You need to add 2 more dependencies for this

```bash
  yarn add @polkadot/wasm-crypto @polkadot/extension-dapp
```

Add these methods to interact with the polkadot.js wallet:

```typescript
// Sign and send transaction using polkadot.js web extension.
// Arguments: [tx] is the transaction object, accountId is the wallet adddress, callback is a method
// that listens to events of the transaction processing. See example: [logTransaction].
export const signAndSendTx = async (
  tx: any,
  accountId: string,
  callback?: (result: any) => void
) => {
  const { web3FromAddress } = await import('@polkadot/extension-dapp')
  const accounts = await getAllAccounts()

  const addresses = accounts.map((account) => account.address)

  const containsAddress = addresses.includes(accountId)
  if (!containsAddress) {
    throw Error('Address not found on Polkadot.js extension.')
  }

  const { signer } = await web3FromAddress(accountId)
  await tx.signAsync(accountId, { signer })

  await tx.send(callback ?? logTransaction)
}

// Fetch list of available accounts from the polkadot.js extension.
// It returns list of accounts, each account have address and other metadata property.
export const getAllAccounts = async () => {
  const { isWeb3Injected, web3Enable, web3Accounts } = await import(
    '@polkadot/extension-dapp'
  )
  const injectedExtensions = await web3Enable('subsocial-starter')
  if (!isWeb3Injected) {
    throw Error(`Browser does not have any polkadot.js extension`)
  }

  if (!injectedExtensions.length) {
    throw Error(`Polkadot Extension has not authorized us to get accounts`)
  }

  return await web3Accounts()
}
```

Let's start with an example of creating a space:

```typescript
import { IpfsContent } from '@subsocial/types/substrate/classes'
import { waitReady } from '@polkadot/wasm-crypto'

const createSpace = async () => {
  // wait initialize wasm.
  await waitReady()
  
  const substrateApi = await api.substrateApi
  const ipfs = api.ipfs
  
  // create content object on IPFS and get CID.
  const ipfsImageCid = await ipfs.saveFile(file)

  const cid = await ipfs.saveContent({
    about: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS',
    image: ipfsImageCid,
    name: 'Subsocial',
    tags: ['subsocial']
  })

  /* Creating a transaction for the createSpace method.
   createSpace(
    content: string or IPFS CID or any other (required),
    permissions: optional
   )
  */
  const tx = substrateApi.tx.spaces.createSpace(
    IpfsContent(cid),
    null
  )

  // Add the selected account address, to get all connected accounts
  // use the [getAllAccounts] method.
  const account = '<selected_account_address>'

  // Signing the transaction and sending for execution.
  signAndSendTx(tx, account, async (result) => {
    const { status } = result;

    if (!result || !status) {
      return;
    }

    if (status.isFinalized || status.isInBlock) {
      const blockHash = status.isFinalized
        ? status.asFinalized
        : status.asInBlock;
      
      console.log(`✅ Tx finalized. Block hash: ${blockHash.toString()}`);
    } else if (result.isError) {
      console.log(JSON.stringify(result));
    } else {
      console.log(`⏱ Current tx status: ${status.type}`);
    }
  });
}
```
You can also use an instance of the Keyring class (lean more about keyrings [here](https://polkadot.js.org/docs/keyring/start/)). 

We used substrateAPI and IPFS for creating content. Then, we used the previously created content to create a space and then sign a transaction.

Learn more about [transactions](https://polkadot.js.org/docs/api/start/api.tx/) and [mnemonics](https://polkadot.js.org/docs/util-crypto/examples/create-mnemonic). 

## More examples

#### Create a vote reaction

```typescript
import { IpfsContent } from '@subsocial/types/substrate/classes'
import { waitReady } from '@polkadot/wasm-crypto'

const makeUpvote = async () => {
  await waitReady()

  const substrateApi = await api.substrateApi

  /*
    createPostReaction(
      postId: number | string,
      kind: 'Upvote' | 'Downvote' | number
    )
  */
  const tx = substrateApi.tx.reactions.createPostReaction('1', 'Upvote')

  // Add the selected account address, to get all connected accounts
  // use the [getAllAccounts] method.
  const account = '<selected_account_address>'

  // Signing the transaction and sending for execution.
  signAndSendTx(tx, account, async (result) => {
    const { status } = result;

    if (!result || !status) {
      return;
    }

    if (status.isFinalized || status.isInBlock) {
      const blockHash = status.isFinalized
        ? status.asFinalized
        : status.asInBlock;
      
      console.log(`✅ Tx finalized. Block hash: ${blockHash.toString()}`);
    } else if (result.isError) {
      console.log(JSON.stringify(result));
    } else {
      console.log(`⏱ Current tx status: ${status.type}`);
    }
  });
}
```

#### Start following a space 

```typescript
import { IpfsContent } from '@subsocial/api/types/substrate/wrappers'
import { waitReady } from '@polkadot/wasm-crypto'

const followSpace = async () => {
  await waitReady()

  const substrateApi = await api.substrateApi

  /*
    followSpace(
      spaceId: u64 | number
    )
  */
  const tx = substrateApi.tx.spaceFollows.followSpace(1)
  
  // Add the selected account address, to get all connected accounts
  // use the [getAllAccounts] method.
  const account = '<selected_account_address>'

  // Signing the transaction and sending for execution.
  signAndSendTx(tx, account, async (result) => {
    const { status } = result;

    if (!result || !status) {
      return;
    }

    if (status.isFinalized || status.isInBlock) {
      const blockHash = status.isFinalized
        ? status.asFinalized
        : status.asInBlock;
      
      console.log(`✅ Tx finalized. Block hash: ${blockHash.toString()}`);
    } else if (result.isError) {
      console.log(JSON.stringify(result));
    } else {
      console.log(`⏱ Current tx status: ${status.type}`);
    }
  });
}
```

> For more convenient work with accounts and keys, use [the polkadot.{js} extension](https://polkadot.js.org/docs/extension/usage).
