---
id: energy
title: Energy
displayed_sidebar: developSidebar
---

<head>
  <title>Using Subsocial's Energy System | SDK Guide</title>
</head>

**This section covers interactions that you can do with the energy module.**

*We recommend to learn [Signing & Sending Transactions](https://docs.subsocial.network/docs/develop/sdk/transactions) before this.*

*Also you can learn more about energy [here](/docs/develop/concepts/sponsored/energy.md)*

### Burn SUB to generate energy

```
substrateApi.tx.energy.generateEnergy(target, burnAmount)
```

```typescript
import { convertToBalanceWithDecimal } from '@subsocial/utils'

const burnAmount = 1 // 1 SUB

const parsedBurnAmount = convertToBalanceWithDecimal(burnAmount, 10) // SUB token uses 10 decimals, SOON (testnet) uses 12 decimals

// or you can just multiply it manually
// const parsedBurnAmount = burnAmount * 10 ** 10

const target = '3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8' // change it to target account
const tx = substrateApi.tx.energy.generateEnergy(target, parsedBurnAmount.toString())
```
