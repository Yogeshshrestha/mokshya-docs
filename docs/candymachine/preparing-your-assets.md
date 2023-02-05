---
sidebar_position: 2
---

# Preparing your assets

## Example NFT Collection

Create an Asset Folder and add Images and Metadata into it.

| Assets/images | Assets/metadata |
| ------------- | --------------- |
| 0.png         | 0.json          |
| 1.png         | 1.json          |
| 2.png         | 2.json          |
| 3.png         | 3.json          |
| 4.png         | 4.json          |
| 5.png         | 5.json          |
| 6.png         | 6.json          |
| 7.png         | 7.json          |
| 8.png         | 8.json          |
| 9.png         | 9.json          |

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

Now you will see a link like `https://arweave.net/Your_ID`

copy your arweave url and your json file must have image parameter with `https://arweave.net/Your_ID/index_of_image.json`

:::note

`https://arweave.net/Your_ID/` is your baseuri that you need to add in config.json

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
