---
sidebar_position: 3
---

# Stake Token

Staker with the tokens can stake the token as follows

```jsx
const staking_payloads = {
  type: "entry_function_payload",
  function: mokshyastaking + "::tokenstaking::stake_token",
  type_arguments: [],
  arguments: [
    staker.address(),
    collection,
    tokenname,
    tokenPropertyVersion,
    num_of_tokens,
  ],
};
let txnRequest = await client.generateTransaction(
  staker.address(),
  staking_payloads
);
let bcsTxn = AptosClient.generateBCSTransaction(staker, txnRequest);
await client.submitSignedBCSTransaction(bcsTxn);
```
