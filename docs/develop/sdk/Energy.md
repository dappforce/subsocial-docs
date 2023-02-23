---
id: energy
title: Energy
displayed_sidebar: developSidebar
---

**This section covers interaction that you can do with energy module. You can learn more [here](/docs/develop/concepts/sponsored/energy.md)**

### Burn SUB to generate energy

```
substrateApi.tx.energy.generateEnergy(target, burnAmount)
```

```typescript
import { convertToBalanceWithDecimal } from '@subsocial/utils'

const burnAmount = 1 // 1 SUB
const parsedBurnAmount = convertToBalanceWithDecimal(burnAmount, 10) // SUB token uses 10 decimals
// or you can just multiply it manually
// const parsedBurnAmount = burnAmount * 10 ** 10
const tx = substrateApi.tx.reactions.createPostReaction('3osmnRNnrcScHsgkTJH1xyBF5kGjpbWHsGrqM31BJpy4vwn8', parsedBurnAmount.toString())
```
