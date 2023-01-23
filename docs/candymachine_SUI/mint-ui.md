---
sidebar_position: 6
---

# Mint UI

```jsx
const moveCallMintTxn = await signer.executeMoveCall({
  packageObjectId: "0x9a69f15508a7293f639da0a99206f2526bd03642",
  module: "candymachine",
  function: "mint_nft",
  typeArguments: [],
  arguments: [candymachine_object],
  gasBudget: 10000,
});
```
