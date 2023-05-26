---
id: modal
title: Creating An Input Modal
description: This section explains about the input modal required for the extension of Grill Light.
keywords: [Schema, Extensions, Grill Light, Building on the Grill app, Web3 Social, Blockchain, Subsocial]
displayed_sidebar: developSidebar
---

This section covers how to create an input modal for the extension that we just created for URLs.

## Creating UrlModal.tsx file

We need to create another file inside the `components/Extensions/url` directory.

The first thing we need to create is a component that renders the input fields and two action buttons (for send and cancel). Like this:

![Url Modal](/img/extension/url-modal.jpg)

```tsx

import useExtensionsStore from "@/stores/extensions"
import { useState } from "react"
import { UrlExtension } from "./UrlExtension"
import useModalStore from "@/stores/modal"
import CancelIcon from '@/assets/icons/cancel.svg'

const inputClass = "input input-bordered w-full mt-1 focus:outline-indigo-800 focus:outline-offset-0"

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
    <div className="flex justify-between">
      <h3 className="font-bold text-lg">Attach URL</h3>
      <button
        onClick={close}
        className="p-1 rounded-full transition bg-transparent disabled:hover:ring-0 disabled:ring-offset-0 hover:ring-2 focus-visible:!ring-2 focus-visible:outline-none inline-block text-center absolute right-6 m-1 mr-0 text-2xl text-text-muted"
      >
        <CancelIcon />
      </button>
    </div>

    <div className="mt-4">
      <h2>External URL</h2>
      <input type="text" className={inputClass} value={url} onChange={(e) => setURL(e.target.value)} placeholder="Paste your external URL" />
    </div>

    <div className="mt-4">
      <h2>Title</h2>
      <input type="text" className={inputClass} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Any title for the URL" />
    </div>

    <div className="modal-action">
      <label onClick={sendURL} className="btn w-full font-normal normal-case hover:bg-indigo-800 hover:border-indigo-800 rounded-3xl">Add</label>
    </div>
  </div>
}

export default URLModal

```

Now we need to import Redux Store to add the logics, like this:

```tsx

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

```

Here's the full code for **UrlModal.tsx** file:

```tsx

import useExtensionsStore from "@/stores/extensions"
import { useState } from "react"
import { UrlExtension } from "./UrlExtension"
import useModalStore from "@/stores/modal"
import CancelIcon from '@/assets/icons/cancel.svg'

const inputClass = "input input-bordered w-full mt-1 focus:outline-indigo-800 focus:outline-offset-0"

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
    <div className="flex justify-between">
      <h3 className="font-bold text-lg">Attach URL</h3>
      <button
        onClick={close}
        className="p-1 rounded-full transition bg-transparent disabled:hover:ring-0 disabled:ring-offset-0 hover:ring-2 focus-visible:!ring-2 focus-visible:outline-none inline-block text-center absolute right-6 m-1 mr-0 text-2xl text-text-muted"
      >
        <CancelIcon />
      </button>
    </div>

    <div className="mt-4">
      <h2>External URL</h2>
      <input type="text" className={inputClass} value={url} onChange={(e) => setURL(e.target.value)} placeholder="Paste your external URL" />
    </div>

    <div className="mt-4">
      <h2>Title</h2>
      <input type="text" className={inputClass} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Any title for the URL" />
    </div>

    <div className="modal-action">
      <label onClick={sendURL} className="btn w-full font-normal normal-case hover:bg-indigo-800 hover:border-indigo-800 rounded-3xl">Add</label>
    </div>
  </div>
}

export default URLModal

```

Awesome, now we just need to add our newly created extension to the registry.
