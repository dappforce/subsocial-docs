---
id: overview
title: Overview
description: A step-by-step guide for building a new extension on Light Grill.
keywords: [Extensions, Light Grill, Building on the Grill app, Web3 Social, Blockchain, Subsocial]
displayed_sidebar: developSidebar
---

In this section, we will cover how to create a new extension on top of the Light Grill app.

We will be building a new extension for URLs on top of the Light Grill app.

## Components of an Extension

Each extension should have:
- A very specific usecase / purpose, for example: sending NFTs or image from IPFS / URL, etc. 
- A new JSON schema to be used in IPFS extending the **ExtensionWidget** class.
- A utility class for serializing / de-serializing the JSON and implementing the preview renderer.
- An input modal for users to enter data.

## Building A URL Extension

In this section, we will write an extension for attaching URLs with a chat message. This URLs extension powers the use case of sharing external endpoints like original sources, video links, portfolio websites, etc.

Here's how it will look in the chat:
![URL Message](/img/extension/url-message.png)

