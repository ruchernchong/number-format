# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`@ruchernchong/number-format` is a TypeScript utility library that converts large numbers to human-readable formats with unit suffixes (k, M, B, T). It's a single-function package published to npm.

## Core Architecture

The entire library is a single function in `src/numberFormat.ts` that:
- Takes a number and optional minimum threshold (default 1,000)
- Returns formatted string with appropriate unit suffix
- Supports negative numbers and decimal precision (2 decimal places)
- Units: k (thousand), M (million), B (billion), T (trillion)
- Uses logarithmic calculation to determine the appropriate unit scale

## Development Commands

### Build
```bash
pnpm build              # Clean build (removes dist/ first)
pnpm build:watch        # Watch mode for development
```
The build outputs to `dist/` with TypeScript declarations, source maps, and declaration maps.

### Testing
```bash
pnpm test               # Run tests in watch mode (Vitest)
pnpm test:coverage      # Run tests with coverage report
```
- Test file: `test/numberFormat.test.ts`
- Coverage thresholds: 80% for branches, functions, lines, and statements
- Tests use Vitest with `describe`, `it`, and `it.each` patterns

### Linting and Formatting
```bash
pnpm lint               # Check code with Biome
pnpm lint:fix           # Auto-fix linting issues
pnpm format             # Check formatting
pnpm format:fix         # Auto-format code
```
- Uses Biome (not ESLint/Prettier) for both linting and formatting
- Code style: double quotes, space indentation
- Biome config: `biome.json`

## Release Process

- Uses semantic-release with conventional commits
- Automated via GitHub Actions (`.releaserc.json`)
- Releases to npm and creates GitHub releases
- Updates `CHANGELOG.md` automatically
- Main branch: `main`

## TypeScript Configuration

- Target: ES2020
- Module system: ES2020 (pure ESM package)
- Output: `dist/` directory
- Excludes test files from compilation
- Package type: `"module"` (ESM only)

## Testing Patterns

When writing tests:
- Use `describe` and `it` blocks
- Use `it.each` for parameterized tests with multiple inputs
- Test edge cases: zero, negative numbers, NaN
- Verify decimal precision and formatting
- Test threshold behavior (numbers below minimum)
