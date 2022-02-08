---
id: transactions
title: Transactions
---

All posts and spaces are associated with public key pairs (accounts).
So, these and other structures can be created or updated using [transactions](https://polkadot.js.org/docs/api/start/api.tx/).
Also, Subsocial supports the [Polkadot {.js} extension](https://polkadot.js.org/extension/), which allows you to easily manage your keys in a browser.


## Example Code

Let's start with an example of creating a space:

```typescript
import { IpfsContent } from '@subsocial/types/substrate/classes'
import { Keyring } from '@polkadot/keyring'
import { waitReady } from '@polkadot/wasm-crypto'

const keyring = new Keyring({ type: 'sr25519' })

const createSpace = async () => {
  // wait initialize wasm
  await waitReady()
  
  const substrateApi = await flatApi.subsocial.substrate.api
  const ipfs = await flatApi.subsocial.ipfs
  
  //create content 
  const cid = await ipfs.saveContent({
    about: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS',
    image: 'Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe', // ipfsImageCid = await flatApi.subsocial.ipfs.saveFile(file)
    name: 'Subsocial',
    tags: ['subsocial']
  })

  const tx = substrateApi.tx.spaces.createSpace(
    null,
    null,
    IpfsContent(cid),
    null
  )

  const accountPair = keyring.addFromMnemonic('your mnemonic')

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
Fist we created an instance of the Keyring class (lean more about keyring [here](https://polkadot.js.org/docs/keyring/start/)). 
In the next step we connected to the Substrate API using getSubstrateApi and the Substrate node URL, and we also connected to IPFS by flatApi.
After that we can use IPFS for creating content and substrateApi. We use the previously created content to create a space and then conduct a transaction.

Lear more about [transactions](https://polkadot.js.org/docs/api/start/api.tx/) and [mnemonics](https://polkadot.js.org/docs/util-crypto/examples/create-mnemonic). 

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
  const tx = substrateApi.tx.reactions.createPostReaction('1', 'Upvote')

  const accountPair = keyring.addFromMnemonic('your mnemonic')

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
  const tx = substrateApi.tx.spaceFollows.followSpace('1')
  
  const accountPair = keyring.addFromMnemonic('your mnemonic')

  tx.signAndSend(accountPair);
}
```
