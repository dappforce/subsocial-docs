---
id: extensions
title: Understanding Extensions
description: Learn what are Grill Extensions and how you can leverage to create improved chat experiences for your users.
keywords: [Extensions, Grill Light, Building on Grill App, Web3 Social, Blockchain, Subsocial]
displayed_sidebar: developSidebar
---

Grill Light introduces support for Custom Extensions that opens the scope for in-chat elements for your users.

## What are Extensions?

An extension is a schema defination for new set of chat element with a proper components and a very specific usecase of sharing information.

:::info Example
 **NFT Extension** helps allows people to share NFTs as a chat element in the grill app from different chains like EVM, Solana, etc. 
:::

## How extensions work?

Every extension have 3 things:

- A form input to ask user to share data about the chat element (for NFT, it can be contract address & token id)
- JSON Schema to set the structure of the data for storage before it is sent to IPFS
- Parser with React component that shows the chat element in the Grill App UI and gives users a functionality to interact with. 

## Extension structuring in Chat 

A typical chat message on Grill have the following schema when it is sent to IPFS for storage.

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

> In the following pages, we will see how to create an extension for image in Grill app.

