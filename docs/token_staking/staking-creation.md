---
sidebar_position: 2
---

# Staking Creation

Provide Daily Percentage Return(DPR), Collection Name, Total Amount Deposited
The staking creator can provide any coin type, which needs to be distributed

```jsx
const create_staking_payloads = {
  type: "entry_function_payload",
  function: mokshyastaking + "::tokenstaking::create_staking", //use account address for mokshyastaking
  type_arguments: ["0x1::aptos_coin::AptosCoin"], // Coin Type
  arguments: [DPR, collection_name, total_amount_deposited],
};
let txnRequest = await client.generateTransaction(
  creator.address(),
  create_staking_payloads
);
let bcsTxn = AptosClient.generateBCSTransaction(creator, txnRequest);
await client.submitSignedBCSTransaction(bcsTxn);
```

Here creator should be the creator of the NFT collection

The staking creator can use following function to Control Staking

```jsx title="Stop Staking"
const stop_staking_payloads = {
  type: "entry_function_payload",
  function: mokshyastaking + "::tokenstaking::creator_stop_staking", //use account address for mokshyastaking
  type_arguments: [],
  arguments: [collection_name],
};
let txnRequest = await client.generateTransaction(
  creator.address(),
  stop_staking_payloads
);
let bcsTxn = AptosClient.generateBCSTransaction(creator, txnRequest);
await client.submitSignedBCSTransaction(bcsTxn);
```

```jsx title="Update DPR"
const update_dpr_payloads = {
  type: "entry_function_payload",
  function: mokshyastaking + "::tokenstaking::update_dpr", //use account address for mokshyastaking
  type_arguments: [],
  arguments: [new_dpr, collection_name],
};
let txnRequest = await client.generateTransaction(
  creator.address(),
  update_dpr_payloads
);
let bcsTxn = AptosClient.generateBCSTransaction(creator, txnRequest);
await client.submitSignedBCSTransaction(bcsTxn);
```

The program stops the staking feature when the vault doesn't have staking rewards for disbursement

```jsx title="Fund Reward Token"
const fund_payloads = {
  type: "entry_function_payload",
  function: mokshyastaking + "::tokenstaking::deposit_staking_rewards", //use account address for mokshyastaking
  type_arguments: ["0x1::aptos_coin::AptosCoin"], //coin type
  arguments: [collection_name, amount],
};
let txnRequest = await client.generateTransaction(
  creator.address(),
  fund_payloads
);
let bcsTxn = AptosClient.generateBCSTransaction(creator, txnRequest);
await client.submitSignedBCSTransaction(bcsTxn);
```
