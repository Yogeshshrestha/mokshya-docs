---
sidebar_position: 4
---

# Claim Reward and Unstake

Users can claim reward as follows

```jsx
const claim_reward_payloads = {
  type: "entry_function_payload",
  function: mokshyastaking + "::tokenstaking::claim_reward",
  type_arguments: ["0x1::aptos_coin::AptosCoin"],
  arguments: [collection, tokenname, account1.address()],
};
let txnRequest = await client.generateTransaction(
  staker.address(),
  claim_reward_payloads
);
let bcsTxn = AptosClient.generateBCSTransaction(staker, txnRequest);
await client.submitSignedBCSTransaction(bcsTxn);
```

Users can Un-stake Tokens as follows

```jsx
const unstaking_payloads = {
  type: "entry_function_payload",
  function: mokshyastaking + "::tokenstaking::unstake_token",
  type_arguments: ["0x1::aptos_coin::AptosCoin"],
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
  unstaking_payloads
);
let bcsTxn = AptosClient.generateBCSTransaction(staker, txnRequest);
await client.submitSignedBCSTransaction(bcsTxn);
```
