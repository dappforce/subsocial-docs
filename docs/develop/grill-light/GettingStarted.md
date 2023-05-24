---
id: getting-started
title: Getting Started
description: Learn how to get started with Grill Light App, an experimental version of the Grill app that powers seamless web3 communications.
keywords: [Grill Light, Building on Grill App, Web3 Social, Blockchain, Subsocial]
displayed_sidebar: developSidebar
---
Grill Light App, is an experimental version of the [Grill Chat](https://grill.chat). ![Grill App](https://raw.githubusercontent.com/dappforce/grillchat/main/src/assets/logo/logo.svg)

## What is Grill Chat? 

A chat application built on top of the Subsocial blockchain 🔗.

Grill.chat offers a smooth and simple onboarding and user experience while still leveraging the power of blockchain technology.

It can be integrated in multiple dapps to boost user engagement and community traction.

## How does it work? 🧐

Let us try to break-down how Grill Chat works:

### Blockchain

Grill Chat is a next-js app connecting to our [xSocial](/docs/develop/xSocial) blockchain that provides 2 seconds block-time for chat messages. 

### Content Storage

The messages content is parsed to JSON objects and stored on CRUST storage buckets and the content identitier (CID) is included the transaction of xSocial chain.

### Wallets 

The frontend client creates a key-pair for wallet for in-chat identity at the time of first message sending, it enables smooth experience as you don't need to have any wallet extension for the app. 

Later the secret for in-chat identity can be extracted and stored manually by export button under profile. 

### Fees

As Grill Chat uses the [xSocial](/docs/develop/xSocial) blockchain under the hood, we leverage [energy](/docs/develop/concepts/sponsored/energy) pallet to sponsor user transactions for chat messages. This means the users don't need to hold any tokens to use the Grill App. 

For integration, you can sponsor transactions for your users and gate people based on on-chain credentials like NFTs, Memberships, etc.

## Extensibility

Grill App is highly extensibile as you can integrate grill using iFrame in your dapp for your usecase or append the app with different types of extensions for functionalities like NFT sharing, On-chain Proposal linking, Discussion chats on a tweet or topic, etc.

Further in the docs we will share in detail how to create new extensions on top of Grill Light App.

 

