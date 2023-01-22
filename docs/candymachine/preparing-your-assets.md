---
sidebar_position: 2
---

# Preparing your assets

## Example NFT Collection

Create an Asset Folder and add Images and Metadata into it.

# missing!

Upload it in arweave using **[arkb](https://www.npmjs.com/package/arkb)**

Install arkb

```bash
npm install -g arkb
```

upload your images to **[areweave](https://www.arweave.org/)**.

```bash
arkb deploy ./Assets/images --use-bundler URL_OF_BUNDLR_NODE --wallet path/to/my/wallet.json
```

:::note

For more detail review - **[https://docs.arweave.org/developers/tools/textury-arkb](https://docs.arweave.org/developers/tools/textury-arkb)**

:::

Now you will see a link like https://arweave.net/Your_ID

copy your arweave url and your json file must have image parameter with https://arweave.net/Your_ID/index_of_image.json

:::note

https://arweave.net/Your_ID/ is your baseuri that you need to add in config.json

:::

Example:

<div>https://arweave.net/Your_ID/0.png </div>

Example of json file

```jsx
{
  "name": "Mokshya Protocol #0",
  "description": "Building Open Source Solutions for Aptos Blockchain.",
  "image": "https://arweave.net/your_id/0.png",
  "external_url": "https://mokshya.io",
  "attributes": [
    {
      "trait_type": "number",
      "value": "0"
    }
  ]
}
```
