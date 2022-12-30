---
id: developers
title: Developer's FAQs
displayed_sidebar: developSidebar
---

### What is Subsocial?
- Subsocial is a platform for developers to create decentralized social apps, is built with Substrate, and based in the Polkadot ecosystem. 
- It provides all of the native features required for building a social app that is decentralized without the need to worry about blockchain and off-chain parts. This lets you focus on building your app, not on re-inventing the wheel.

### Does Subsocial have its own chain?
- Subsocial has its own Substrate-based chain on which devs can easily connect and create their Social Dapps, and it supports features like creating spaces (rooms for posts, and content), posts, upvotes/downvotes, comments, monetization, etc. 
- For transactions on this chain, users need to have SUB tokens or NRG (read the [tokenomics](https://docs.subsocial.network/docs/tokenomics/token-economics)) and a Substrate compatible wallet extension installed in their browser.

### How do I get SUB tokens?
- While building you can easily run a local Subsocial chain on your machine, in which you can have any amount of SUB tokens to test and build. Once you have something to deploy and share with the community we can send you some SUB.
- It's best to test your Dapps on Subsocial's testnet called **SoonSocial**. And for getting these tokens you can use the faucet in our [Discord server](https://discord.gg/yHRFdyMCmA). 
- The faucet project is open source [here](https://github.com/dappforce/substrate-faucet).

### Do I need to know **RUST** or the **POLKADOT** ecosystem?
You **don’t** need to learn about RUST or the POLKADOT ecosystem to build decentralized apps, you can use our typescript-based SDK to connect and interact with chains through frontends.

### Am I supposed to create smart contracts for my Dapp?
- **No**, Building on Subsocial doesn’t require creating a smart contract. The chain itself supports all the features necessary for building your own social dapps. 
- We have **Spaces** which hold posts related to a particular topic. You can create a Dapp for a specific type of space, for example.

> **NOTE**: We are working on adding support for smart contracts that will be using [ink](https://github.com/paritytech/ink).

### How do I get started?
- Install the [Polkadot.js extension](https://polkadot.js.org/extension/) and create a wallet to be a part of the ecosystem.
- To have a deeper look into how things work and available features, try our own social network: [Polkaverse App](https://polkaverse.com). Try to use the project and engage with people in the community.
- You can easily get started by trying out our SDK on the [Subsocial Playground](https://play.subsocial.network)
- To create your first Dapp in minutes, use the **Subsocial Starter** template [Read More](/docs/develop/developer-quickstart)

We have a set of example apps on different technologies that you can try: 
  - [React App](https://github.com/dappforce/subsocial-react-example)
  - [Vue App](https://github.com/dappforce/subsocial-vue-example)
  - [Angular App](https://github.com/dappforce/subsocial-angular-example)

