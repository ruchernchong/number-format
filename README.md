# number-format

[![npm version](https://img.shields.io/npm/v/@ruchernchong/number-format.svg)](https://www.npmjs.com/package/@ruchernchong/number-format)
[![npm downloads](https://img.shields.io/npm/dm/@ruchernchong/number-format.svg)](https://www.npmjs.com/package/@ruchernchong/number-format)
[![License](https://img.shields.io/npm/l/@ruchernchong/number-format.svg)](https://github.com/username/@ruchernchong/number-format/blob/main/LICENSE)

Convert large numbers to their respective readable named values using thousands as the separator

## Installation

```bash
pnpm add @ruchernchong/number-format
```

## Usage

```javascript
const numberFormat = require("@ruchernchong/number-format");
// or
import { numberFormat } from "@ruchernchong/number-format";

// Basic example
numberFormat(1000); // 1k
```

## TypeScript Support

This package includes TypeScript type definitions. Example usage with TypeScript:

```typescript
import { numberFormat } from "@ruchernchong/number-format";

const value: string = numberFormat(1000000); // 1M
```

## Testing

```bash
pnpm test
```

## License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes.

## Support

- Create an [issue](https://github.com/ruchernchong/number-format/issues)
- Email: [hello@ruchern.dev](mailto:hello@ruchern.dev)
- Twitter: [@ruchernchong](https://twitter.com/ruchernchong)
