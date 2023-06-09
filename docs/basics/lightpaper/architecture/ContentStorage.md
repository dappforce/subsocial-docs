---
id: content-storage
title: Content Storage
displayed_sidebar: homeSidebar
---

Subsocial uses the [InterPlanetary File System](https://ipfs.io/) (IPFS) for storage. 
When a file is uploaded to IPFS, it is hashed to create a CID, which can be thought of as directions to find that file.
The only thing that is put onto the Subsocial blockchain is the CID of content. Applications can then use the CID to load the content from IPFS.

The problem with normal IPFS is that random strangers on the internet are not going to want to host users' content.
Multiple blockchain projects have been created that add a payment layer on top of IPFS, solving this problem.
Content uploaded to these networks can be stored for decades with just a tiny payment.

However, these projects have tokens of their own that are required to pay the network to store a piece of content.
This means that users would need to acquire another token to pay the storage fee, and this can be inconvenient.

Alternative options include applications paying all of the storage fees for users, or at least handling some token conversion, 
allowing users to pay for storage in SUB or DOT.

The solution to this will be covered in the Applications section.
In short, applications on Subsocial can use one of these payment layer solutions to manage content storage.
