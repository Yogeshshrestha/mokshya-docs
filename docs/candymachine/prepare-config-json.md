---
sidebar_position: 3
---

# Prepare config.json

Config file consists of all the data needed to set up your minting. You will find a config.example.json file in the root folder.

:::note
You can edit config.example.json to config.json
:::

```jsx title="config.json"
{
"Network": "Mainnet",
"creator_private_key": "",
"collection_name": "NFT Collection Name",
"collection_description": "NFT Collection Description",
"baseuri": "https://mokshya.io/images/",
"royalty_payee_address": "",
"royalty_points_denominator": "1000",
"royalty_points_numerator": "40",
"presale_mint_time": "1668394236",
"public_sale_mint_time": "1668394336",
"presale_mint_price": "1000",
"public_sale_mint_price": "2000",
"total_supply": "1000",
"mutable": "true",
"whitelist": [
"0x4a11ff56bbeea529664cceaf36052150718fe22aaa3bce43957febe7222295f6",
"0x1f57ab7c321b6e2e1544a882f85a9d8d32ce4ad173fbbaf61c2b6d6e864173e7"
],
"resource_account": ""
}
```

- **creator_private_key** is required parameter from which candy machine is created. You can create a private key from aptos init command or just export from our available wallet extension.
- **royalty_points_denominator & royalty_points_numerator**

For Royalities, If you want 4.2 % fee on each NFT trade. Your Numerator should be <font color="red"> 42 </font> and denominator should be <font color="red"> 1000 </font>.

```jsx
fee_percentage*10  = Numerator
1000 = Denominator
```

- **Baseuri** is the root URL of your metadata collection. You need to provide the [arweave](https://www.arweave.org/) url or you can upload your metadata in your server and provide the url.
- **mutable** is the parameter which sets if your collection and token data can be updated by the creator or not.
- **whitelist** is the array of addresses which can mint the NFT in presale time.
- **resource_account** is the original creator address which is generated from candy machine program. Learn more [here](https://aptos.dev/concepts/accounts/).
