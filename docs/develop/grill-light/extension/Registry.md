---
id: registry
title: Adding An Extension To The Registry
description: This section explains how to link a newly created extension to Grill Light's extension registry.
keywords: [Registry, Extensions, Grill Light, Building on Grill App, Web3 Social, Blockchain, Subsocial]
displayed_sidebar: developSidebar
---

Every extension that is created needs to be added to the registry to ensure it is listed on the Grill Extension Selector.

## Creating An Extension Entry

We need to extend the **ExtensionEntry** interface to create values for the extension related details like Modal, Extension and Schema Name.

You need to update the **registry.tsx** file inside the **components/extension** directory.

```ts

  import URLModal from './url/URLModal'
  import { UrlExtension } from './url/UrlExtension'

  const url: Extension = {
    name: "Url",
    label: UrlExtension.extensionName,
    constructor: (options: any) => new UrlExtension(options),
    modal: <URLModal />
  }

```

Now, the last step is to add the **url** to the list of extensions in the same file:

```ts

  ...

  export const registry: ExtensionEntry[] = [nft, image, url] // url is added here.

```

## Wohooo 🎊

You have successfully built your first extension on top of Grill Light!

Now keep building for more interesting use cases, and ask any questions [here](hhttps://t.me/+0bn2xWmRXdpmM2Y6).
