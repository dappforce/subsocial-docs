---
id: modal
title: Creating An Input Modal
description: This section explains about the input modal required for the extension of Grill Light.
keywords: [Schema, Extensions, Grill Light, Building on the Grill app, Web3 Social, Blockchain, Subsocial]
displayed_sidebar: developSidebar
---

This section covers how to create an input modal for the extension that we just created for URLs.

## Creating UrlModal.tsx file

We need to create another file inside the `components/extension/url` directory.

The first thing we need to create is a component that renders the input fields and two action buttons (for send and cancel). Like this:

![Url Modal](/img/extension/url-modal.png)

```ts

  import { useState } from "react"
  import useModalStore from "@/stores/modal"

  const URLModal = () => {

    const [url, setURL] = useState<string>('')
    const [title, setTitle] = useState<string>('')

    const { closeModal } = useModalStore()

    const sendURL = () => {  }

    const close = () => {
      setTitle('')
      setURL('')
      closeModal()
    }

    return <div>
      <h3 className="font-bold text-lg">Attach an URL</h3>
      <div className="mt-4">
        <h2>External URL</h2>
        <input type="text" value={url} onChange={(e) => setURL(e.target.value)} placeholder="Paste your external URL" className="input input-bordered w-full max-w-xs mt-1" />
      </div>

      <div className="mt-4">
        <h2>Title</h2>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Any title for the URL" className="input input-bordered w-full max-w-xs mt-1" />
      </div>

      <div className="modal-action">
        <label onClick={close} className="btn btn-outline btn-secondary">Cancel</label>
        <label onClick={sendURL} className="btn">Add</label>
      </div>
    </div>
  }

  export default URLModal

```

Now we need to import Redux Store to add the logics, like this:

```tsx
  
  import useExtensionsStore from "@/stores/extensions"
  import { UrlExtension } from "./UrlExtension"

  const URLModal = () => {
  
    ...
    
    const { addExtension } = useExtensionsStore()

    const sendURL = () => {
      if (url.trim() == '' && title.trim() == '') return;

        const urlExt = new UrlExtension({ title, value: url })
        addExtension(urlExt)
        close()
        return;
    }

    ...

  }

  export default URLModal
```

Here's the full code for Modal file:

```ts

  import useExtensionsStore from "@/stores/extensions"
  import { useState } from "react"
  import { UrlExtension } from "./UrlExtension"
  import useModalStore from "@/stores/modal"

  const URLModal = () => {

    const [url, setURL] = useState<string>('')
    const [title, setTitle] = useState<string>('')

    const { closeModal } = useModalStore()
    const { addExtension } = useExtensionsStore()

    const sendURL = () => {
      if (url.trim() == '' && title.trim() == '') return;

        const urlExt = new UrlExtension({ title, value: url })
        addExtension(urlExt)
        close()
        return;
    }

    const close = () => {
      setTitle('')
      setURL('')
      closeModal()
    }

    return <div>
      <h3 className="font-bold text-lg">Attach an URL</h3>
      <div className="mt-4">
        <h2>External URL</h2>
        <input type="text" value={url} onChange={(e) => setURL(e.target.value)} placeholder="Paste your external URL" className="input input-bordered w-full max-w-xs mt-1" />
      </div>

      <div className="mt-4">
        <h2>Title</h2>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Any title for the URL" className="input input-bordered w-full max-w-xs mt-1" />
      </div>

      <div className="modal-action">
        <label onClick={close} className="btn btn-outline btn-secondary">Cancel</label>
        <label onClick={sendURL} className="btn">Add</label>
      </div>
    </div>
  }

  export default URLModal

```

Awesome, now we just need to add our newly created extension to the registry.
