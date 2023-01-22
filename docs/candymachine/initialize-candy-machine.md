---
sidebar_position: 4
---

# Initialize Candy Machine

Once your collection assets are uploaded and config file is ready, we need to provide the information about minting to the smart contract and set up the candy machine.

:::note
Before initializing the candy machine you should check

- your metadata have manifest file and when you can open the json file by just adding numbers at the end like yourdomain.com/manifest/0.json
- Make sure you have enough gas fee to initialize candymachine
- Make sure you have fill up all config.json parameter except resource_account

:::

```bash
ts-node packages/CLI/src/index.ts --create_candy
```

:::note
Make sure you are in the aptos-candymachine folder and installed all the modules required to run the CLI
:::
