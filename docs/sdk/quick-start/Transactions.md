---
id: transactions
title: Transactions
---

Spaces, posts and other structures can be created or updated using [transactions](https://polkadot.js.org/docs/api/start/api.tx/).

Let's start with an example of creating a space:

```typescript
import { getSubstrateApi } from '@subsocial/api'
import { IpfsContent } from '@subsocial/types/substrate/classes'
import { Keyring } from '@polkadot/keyring'

const keyring = new Keyring({ type: 'sr25519' })

const createSpace = async () => {
  const substrateApi = await getSubstrateApi({ endpoint: 'http://127.0.0.1:9944' }) // or const substrateApi = await flatApi.subsocial.substrate.api
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
Fist we created instance of the Keayring class (lean more about keyring [here](https://polkadot.js.org/docs/keyring/start/)) , 
In the next step  we connected to substrate API using getSubstrateApi and substrate node url, also we connected to ipfs by flatApi.
After that we can use ipfs for creating content and substrateApi. We use the previously created content to create a space and then conduct a transaction.

Lear more about [transactions](https://polkadot.js.org/docs/api/start/api.tx/) and [mnemonic](https://polkadot.js.org/docs/util-crypto/examples/create-mnemonic) 
