---
id: transactions
title: Transactions
---

All posts and spaces are associated with public key pairs called accounts.
So, these structures can be created or updated via [transactions](https://polkadot.js.org/docs/api/start/api.tx/). And you need to use a wallet / extension to sign these transactions. Therefore, Subsocial supports the [Polkadot {.js} extension](https://polkadot.js.org/extension/), which allows you to easily manage your keys in a browser.


## Creating a Space

You need to add 2 more dependencies for this

```
  yarn add @polkadot/keyring @polkadot/wasm-crypto
```

Let's start with an example of creating a space:

```typescript
import { IpfsContent } from '@subsocial/types/substrate/classes'
import { Keyring } from '@polkadot/keyring'
import { waitReady } from '@polkadot/wasm-crypto'

// Create a keyring instance.
const keyring = new Keyring({ type: 'sr25519' })

const createSpace = async () => {
  // wait initialize wasm.
  await waitReady()
  
  const substrateApi = await flatApi.subsocial.substrate.api
  const ipfs = await flatApi.subsocial.ipfs
  
  // create content object on IPFS and get CID.
  const ipfsImageCid = await flatApi.subsocial.ipfs.saveFile(file)

  const cid = await ipfs.saveContent({
    about: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS',
    image: ipfsImageCid,
    name: 'Subsocial',
    tags: ['subsocial']
  })

  /* Creating a transaction for the createSpace method.
   createSpace(
    parentId: optional,
    handleId: optional,
    content: string or IPFS CID or any other (required),
    permissions: optional
   )
  */
  const tx = substrateApi.tx.spaces.createSpace(
    null,
    null,
    IpfsContent(cid),
    null
  )

  // Add your mnemonic in a config file and import it from there.
  const accountPair = keyring.addFromMnemonic('add your mnemonic here')

  // Signing the transaction and sending for execution.
  tx.signAndSend(accountPair, async (result) => {
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
Fist we created an instance of the Keyring class (lean more about keyrings [here](https://polkadot.js.org/docs/keyring/start/)). 
In the next step we connected to the Substrate API using getSubstrateApi and the Substrate node URL, and we also connected to IPFS by flatApi.
After that we used substrateAPI and IPFS for creating content. Then, we used the previously created content to create a space and then sign a transaction.

Learn more about [transactions](https://polkadot.js.org/docs/api/start/api.tx/) and [mnemonics](https://polkadot.js.org/docs/util-crypto/examples/create-mnemonic). 

## More examples

#### Create a vote reaction

```typescript
import { IpfsContent } from '@subsocial/types/substrate/classes'
import { Keyring } from '@polkadot/keyring'
import { waitReady } from '@polkadot/wasm-crypto'

const keyring = new Keyring({ type: 'sr25519' })

const makeUpvote = async () => {
  await waitReady()

  const substrateApi = await flatApi.subsocial.substrate.api

  /*
    createPostReaction(
      postId: number,
      kind: 'Upvote' | 'Downvote' | number
    )
  */
  const tx = substrateApi.tx.reactions.createPostReaction('1', 'Upvote')

  const accountPair = keyring.addFromMnemonic('add your mnemonic here')

  tx.signAndSend(accountPair);
}
```

#### Start following a space 

```typescript
import { IpfsContent } from '@subsocial/types/substrate/classes'
import { Keyring } from '@polkadot/keyring'
import { waitReady } from '@polkadot/wasm-crypto'

const keyring = new Keyring({ type: 'sr25519' })

const followSpace = async () => {
  await waitReady()

  const substrateApi = await flatApi.subsocial.substrate.api

  /*
    followSpace(
      spaceId: u64 | number
    )
  */
  const tx = substrateApi.tx.spaceFollows.followSpace(1)
  
  const accountPair = keyring.addFromMnemonic('add your mnemonic here')

  tx.signAndSend(accountPair);
}
```

> For more convenient work with accounts and keys, use [the polkadot.{js} extension](https://polkadot.js.org/docs/extension/usage).
