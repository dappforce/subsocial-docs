---
id: registry
title: Adding Extension to Registry
description: This section explains about linking the newly created extension to Grill light app registry.
keywords: [Registry, Extensions, Grill Light, Building on Grill App, Web3 Social, Blockchain, Subsocial]
displayed_sidebar: developSidebar
---

Every extension created need to be added in the registry to ensure it's listing on the Grill Extension Selector.

## Creating Extension Entry

We need to extend the **ExtensionEntry** interface to create value for the extenion related details like Modal, Extension and Schema Name.

You need to update the **registry.tsx** file inside the **components/extension** directory.

```ts

  import URLModal from './url/URLModal'
  import { UrlExtension } from './url/UrlExtension'

  const url: ExtensionEntry = {
    name: "Url",
    schemaName: UrlExtension.schemaName,
    constructor: (options: any) => new UrlExtension(options),
    modal: <URLModal />
  }

```

Now, as the last step is to add the **url** to list of extensions in the same file:

```ts

  ...

  export const registry: ExtensionEntry[] = [nft, image, url] // url is added here.

```

## Wohooo 🎊

You have successfully built your first extension on top of Grill Light. 

Now keep building for more interesting usecases and ask for any questions [here](https://t.me/+ZzvLu0ZfkQwxNGQy).