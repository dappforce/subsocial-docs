---
id: developers
title: Developer's FAQs
---

### What is Subsocial?
- Subsocial is a platform for developers to create decentralized social apps. 
- It provides all native features required for building a social app that is decentralized without the need to worry about blockchain and off-chain parts. So that you can focus on building your app not on re-inventing the wheel.
- It is based on substrate and polkadot ecosystem.

### Does Subsocial have its own chain?
- Subsocial runs their own substrate-based chain on which devs can easily connect and create their Social Dapps, it supports features like creating spaces (room for posts, and content), posts, upvotes/downvotes, comments, monetization, etc. 
- For transactions on this chain, users need to have SUB tokens (read [tokenomics](https://docs.subsocial.network/docs/tokenomics/token-economics)) and the polkadotjs extension installed on their browser.

### How do I get these SUB tokens?
- While building you can easily run a local subsocial chain on your machine, in which you can have any amount of SUB tokens to test and build. Once, you have something to deploy and share with the community we would love to send you some SUBs.
- It's best to test your Dapps on Subsocial's testnet called **SoonSocial**. And for getting these tokens you can use our faucet on our [discord server](https://discord.gg/yHRFdyMCmA). 
- The facuet project is opensource [here](https://github.com/dappforce/substrate-faucet).

### Do I need to know **RUST** or **POLKADOT** ecosystem?
You **don’t** need to learn about RUST or POLKADOT ecosystem to build decentralized apps, you can use our typescript-based SDK to connect and interact with chains through frontends.

### Am I supposed to create smart contracts for my Dapp?
- **No**, Building on Subsocial doesn’t require creating a smart contract. The chain itself supports all the features necessary for building your own social dapps. 
- We have posts-collection called **Spaces** which holds posts related to a particular topic. You can create a Dapp for a specific type of space.

> **NOTE**: We are working on adding support for smart contracts that will be using [ink](https://github.com/paritytech/ink).

### How do I get started?
- Install [polkadotjs extension](https://polkadot.js.org/extension/) and create a wallet to be a part of the ecosystem.
- To have a deeper look into how things work and available features, try our own social network called [SubSocial Web App](https://app.subsocial.network). Try to use the project and engage with people in the community.
- You can also get started by running several example/template apps on different technologies that we created for you, as follows: 
  - [React App](https://github.com/dappforce/subsocial-react-example)
  - [Vue App](https://github.com/dappforce/subsocial-vue-example)
  - [Angular App](https://github.com/dappforce/subsocial-angular-example)

