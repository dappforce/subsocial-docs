---
id: subsocial-utils
title: Subsocial Utils
displayed_sidebar: developSidebar
---

This section covers about utilities that are provided by `@subsocial/utils` package.
It contains a set of helper functions that helps development in Subsocial Ecosystem.

There are several sections which are divided by their functionality. The table below contains links to each section:

| Functionality                 | Summary                                                         |
| ----------------------------- | --------------------------------------------------------------- |
| [Accounts](#accounts)         | Parse Substrate address to Subsocial address.                   |
| [Balances](#balances)         | Format balance to readable formats.                             |
| [Markdown](#markdown)         | Process markdown texts to different formats.                    |
| [Summarize](#summarize)       | Summarize text and markdown to display well in preview.         |
| [Slugify](#slugify)           | Create slug from content body to improve SEO.                   |
| [Social Links](#social-links) |                                                                 |
| [Twitter](#twitter)           | Utilities to help you integrate posts from twitter to your app. |

## Accounts

Each substrate account have different address, based on the chain its in. This is because each chain have `address prefix`, which may be same or different to each other. For example, `Subsocial` parachain and `Soonsocial` testnet have same `address prefix`, which is `28`. But `Polkadot` has different prefix, which is `0`. This makes same account has different address format in `Subsocial` and `Polkadot`. You can manually convert addresses to any format that you want in [Subscan Address Converter](https://polkadot.subscan.io/tools/format_transform).

### toSubsocialAddress

Simple function to convert any substrate address format to subsocial address format.

```
toSubsocialAddress(address?: string): string
```

Example:

```javascript
import { toSubsocialAddress } from '@subsocial/utils'
const subsocialAddress = toSubsocialAddress(anySubstrateAddress)
```

## Balances

Most blockchains doesn't support decimals, so `BigInt` is used to store token balances. This `BigInt` numbers are paired with a constant usually named `decimals` which parses the balance into its real value. For example, if a user A have 1 token Z, where the `decimals` of token Z is 10, then the value stored in the blockchain for that user's token balance is `10000000000` (with 10 zeros).

However, this is not the value that user wants to see, so we need to format it first to its decimal version. To do so, there are several formatting functions in `@subsocial/utils` that can be used. To simplify things, the value stored in blockchain will be named as `blockchain value`, and the decimal version as `real value`.

### simpleFormatBalance

Format `blockchain value` into human readable `real value` based on decimals given.

```
simpleFormatBalance(balance: BN | string | number, decimals?: number, currency?: string, withUnit: boolean = true): string
```

```javascript
import { simpleFormatBalance } from '@subsocial/utils'
const balance = '100000000000000000000' // 1_000_000_000_000_000_000 (18 zeros)
simpleFormatBalance(balance, 10) // 100,000,000.0000 Unit
simpleFormatBalance(balance, 10, 'SUB', 'SUB') // 100,000,000.0000 SUB
simpleFormatBalance(balance, 10, 'SUB', false) // 100,000,000.0000
```

### balanceWithDecimal

Parse `real value` into `blockchain value` based on decimals given.

```
balanceWithDecimal(balance: string | number, decimal: number): BigNumber
```

```javascript
import { balanceWithDecimal } from '@subsocial/utils'
const balance = '1'
balanceWithDecimal(balance, 10).toString() // 10_000_000_000 (10 zeros)
```

### convertToBalanceWithDecimal

Format `blockchain value` into `real value` based on decimals given.

```
convertToBalanceWithDecimal(balance: string | number, decimal: number): BigNumber
```

```javascript
import { convertToBalanceWithDecimal } from '@subsocial/utils'
const balance = '10000000000' // 10_000_000_000 (10 zeros)
convertToBalanceWithDecimal(balance, 10).toString() // 1
```

### formatBalanceWithoutDecimals

Format `real value` to have number separator and token symbol

```
formatBalanceWithoutDecimals(balance: BigNumber, symbol: string): string
```

```javascript
import { formatBalanceWithoutDecimals } from '@subsocial/utils'
import BigNumber from 'bignumber.js'

const balance = new BigNumber(100_000)
formatBalanceWithoutDecimals(balance, 'SUB') // 100,000 SUB
```

### toShortMoney

Format `real value` to short format. For example, `1_000_000` will be shortened to `1M`

```
type ShortMoneyProps = {
  num: number
  prefix?: string // Any string placed before the amount
  suffix?: string // Any string placed after the amount
  fractions?: number // Number of digits after the decimal point
}
toShortMoney(arg: ShortMoneyProps): string
```

```javascript
import { toShortMoney } from '@subsocial/utils'
toShortMoney({ num: 100_000_000 }) // 100.0M
toShortMoney({ num: 1_000_000_000 }) // 1.0B
```

## Markdown

Subsocial supports any format of content, but for our app, like polkaverse, we use markdown (md) for the content. Because of that, we have several utils function related to processing md text.

### mdToText

Convert markdown text into plain text. One example case for this is for displaying preview, where you don't want to have any formatting.

```
mdToText(md: string | undefined): string | undefined
```

```javascript
import { mdToText } from '@subsocial/utils'
const mdText = '# title [link to subsocial](https://subsocial.network)'
console.log(mdToText(mdText)) // title link to subsocial
```

### mdToHtml

Convert markdown text into html.

```
mdToHtml(md: string | undefined): string | undefined
```

```javascript
import { mdToHtml } from '@subsocial/utils'
const mdText = '# title [link to subsocial](https://subsocial.network)'
console.log(mdToHtml(mdText)) // <h1>title <a href="https://subsocial.network">link to subsocial</a></h1>
```

## Summarize

This section contains simple helper functions to summarize long text. One example is to show the summary instead of full post in post list section.

### summarize

Truncates plain text so it doesn't exceed the limit given. The truncation process will not truncate word if possible.

```
type SummarizeOpt = {
  limit?: number // the max length of text
  omission?: string // the suffix that's added if the text is longer than the limit
}
summarize(text: string, opts: SummarizeOpt): string | undefined
```

```javascript
import { summarize } from '@subsocial/utils'
const text = 'Lorem ipsum dolor sit amet'
summarize(mdText, { limit: 7 }) // Lore...
summarize(mdText, { limit: 10 }) // Lorem... - this doesn't include second word entirely as it will exceed the limit.
summarize(mdText, { limit: 10, suffix: '' }) // Lorem ipsum - removes the suffix
```

### summarizeMd

Same as `summarize`, but it converts md text into plain text first before going to `summarize` function.

```
type SummarizeOpt = {
  limit?: number // the max length of text
  omission?: string // the suffix that's added if the text is longer than the limit
}
summarize(mdText: string, opts: SummarizeOpt): string | undefined
```

```javascript
import { summarizeMd } from '@subsocial/utils'
const text = '# Lorem ipsum dolor sit amet'
summarizeMd(mdText, { limit: 7 }) // Lore...
summarizeMd(mdText, { limit: 10 }) // Lorem... - this doesn't include second word entirely as it will exceed the limit.
```
