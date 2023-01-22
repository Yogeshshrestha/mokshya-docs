---
sidebar_position: 6
---

# Mint UI

Add config.json resource_account to the env file of Candy Machine ui

You can specify the Network

```mdx title=".env"
WHITELIST_MINT_DATE=1668143197
WHITELIST_MINT_PRICE=0.1

PUBLIC_MINT_DATE=1668143197
PUBLIC_MINT_PRICE=0.1

PORT=3000
NETWORK=Testnet

CANDY_MACHINE_ID=0x589db8bafed425239e1671313cabc182d23d2f952c1a512a0af81eae0085e293
RESOURCE_ACCOUNT=<your resource account from config.json file>
```

:::note
Make sure you have initialize candy machine
:::

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
