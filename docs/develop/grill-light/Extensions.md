---
id: extensions
title: Understanding Extensions
description: Learn what Grill Extensions are and how you can leverage them to create improved chat experiences for your users.
keywords: [Extensions, Grill Light, Building on the Grill app, Web3 Social, Blockchain, Subsocial]
displayed_sidebar: developSidebar
---

Grill Light introduces support for Custom Extensions which increases the scope of in-chat elements for your users.

## What are extensions?

An extension is a schema definition for a new set of chat elements with proper components and a very specific use case for sharing information.Extension data is stored along with the related chat message content in IPFS.

:::info Example
 The **NFT Extension** allows people to share NFTs as a chat element in the Grill app from different chains like Ethereum, Solana, etc. 
:::

## How do extensions work?

Every extension have three things:

- An input form for the user to share data about the chat element (for example, the contract address & token id of an NFT)
- JSON Schema to set the structure of the data for storage before it is sent to IPFS
- Parser with React component that shows the chat element in the Grill App UI and gives users a functionality to interact with. 

## Structuring an extension in the chat

A typical chat message on Grill has the following schema when it is sent to IPFS for storage. The data of each extension can be stored in the extensions field of the related chat message.

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

> In the following pages, we will see how to create an extension for images in the Grill app.

## How to define a schema structure?

The schema for an extension explains how its content should be stored on IPFS and it should follow the next format:

```json
{
  "type": "string",
  "options": {
    // Your schema structure here.
  }
}
```
