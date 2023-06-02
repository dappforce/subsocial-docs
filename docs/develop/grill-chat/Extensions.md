---
id: extensions
title: Extensions with Light Grill
description: Learn what Grill Extensions are and how you can leverage them to create improved chat experiences for your users.
keywords: [Extensions, Light Grill, Building on the Grill app, Web3 Social, Blockchain, Subsocial]
displayed_sidebar: developSidebar
---

Light Grill an experimental version of Grill Chat, introduces support for Custom Extensions that broadens the scope of in-chat elements to build great experience for your users.

## What are extensions?

An extension is a schema definition for a new set of chat elements with proper components and a very specific use case for sharing information.

:::info Example
 The **NFT Extension** allows people to share NFTs as a chat element in the Grill app from different chains like Ethereum, Solana, etc. 
:::

## How do extensions work?

Every extension have three things:

- An input form for the user to share data about the chat element (for example, the contract address & token id of an NFT)
- JSON Schema to set the structure of the data for storage before it is sent to IPFS
- Parser with React component that shows the chat element in the Grill App UI and gives users a functionality to interact with. 

## Structuring an extension in the chat

A typical chat message on Grill has the following schema when it is sent to IPFS for storage.

```json
{
  "body": "", // Chat message here.
  "extensions": [ // Array of chat extensions.
    {...}, // Extension for NFT.
    {...}, // Extension for Image.
    {...} // or any other extension.
  ]
}
```

> Learn how to build an extension from scratch in our [Zero to Hero Guide](/docs/zero-to-hero/extension/overview).