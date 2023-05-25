---
id: getting-started
title: Getting Started
description: Learn how to get started with Grill Light, an experimental version of the Grill app that powers seamless Web3 communications.
keywords: [Grill Light, Building on the Grill app, Web3 Social, Blockchain, Subsocial]
displayed_sidebar: developSidebar
---
The Grill Light app is an experimental version of the [Grill.chat](https://grill.chat). ![Grill App](https://raw.githubusercontent.com/dappforce/grillchat/main/src/assets/logo/logo.svg)

## What is Grill.chat? 

A chat application built on top of the Subsocial blockchain 🔗.

Grill.chat offers a smooth and simple onboarding and user experience while still leveraging the power of blockchain technology.

It can be integrated in multiple dapps to boost user engagement and community traction.

## How does it work? 🧐

Let us try to break-down how Grill.chat works:

### The Blockchain

Grill Chat is a next-js app connecting to our [xSocial](/docs/develop/xSocial) blockchain that provides 2 seconds block times for chat messages. 

### Content Storage

The messages content is parsed to JSON objects and stored in Web3Buckets on the Crust network, and the content identifier (CID) is included in the transaction on the xSocial chain.

### Wallets 

The frontend client acts as a wallet by creating a key-pair for in-chat identity when a user sends their first message, enabling a smooth experience, as they don't need to have a wallet extension to use the app. 

Later on, the secret for in-chat identity can be extracted and stored manually by using the export button under Profile. 

### Fees

As Grill.chat uses the [xSocial](/docs/develop/xSocial) blockchain under the hood, we leverage the [energy](/docs/develop/concepts/sponsored/energy) pallet to sponsor user transactions for chat messages. This means the users don't need to hold any tokens to use the Grill App. 

For integrations, you can sponsor transactions for your users, and gate access based upon on-chain credentials such as NFTs, DAO memberships, etc.

## Extensibility

Grill.chat is highly extensible, as you can integrate it using an iFrame in your dapp, or append the app with different types of functionality extensions like sharing NFTs, linking on-chain proposals, discussing a tweet or topic, etc.

Further in the docs we will share in detail how to create new extensions on top of Grill Light.

 

