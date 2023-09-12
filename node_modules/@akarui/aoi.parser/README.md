<div align="center">
    <img src="./.github/assets/logo.gif" alt="aoiparser">

<p>A custom parser to upgrade aoi.js existing parsers to latest features</p>
</div>

## Installation

**node.js 17.0.0 or newer is required.**

```bash
npm install @akarui/aoi.parser
yarn add @akarui/aoi.parser
```

## Setup

```js
const { Util } = require("aoi.js");
const { setup } = require("@akarui/aoi.parser");

setup(Util);
```

## Example

```js
//  example on sending a embed with 1 button
$sendMessage[
    {newEmbed:
        {title:Hello World}
        {description:This is an example}
        {color:Random}
        {footer:This is a footer}
    }
    {actionRow:
        {button:
            Label:
            1:
            customid:
            no:
            💀
        }
    }
]
```

## Links

- [Docs](https://aoi-parser.vercel.app)
- [NPM](https://npmjs.com/package/@akarui/aoi.parser)
- [GitHub](https://github.com/Akaruidevelopment/aoi.parser)
  
## License

[Apache-2.0](./LICENSE)

## Contributors

<a href="https://github.com/Akaruidevelopment/aoi.parser/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AkaruiDevelopment/aoi.parser"  alt="aoi.parser-contributors"/>
</a>