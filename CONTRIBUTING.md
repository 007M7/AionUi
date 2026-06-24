# Contributing Guide

> **Chinese version**: [CONTRIBUTING.zh.md](CONTRIBUTING.zh.md)

## Prerequisites

See [docs/contributing/development.md](docs/contributing/development.md) for environment setup. You will need:

- Node.js 22+
- [bun](https://bun.sh)
- [prek](https://github.com/j178/prek) (`npm install -g @j178/prek`)

- **Test commands**:
  - `bun test` 鈥?run all tests
  - `bun test --project dom` 鈥?run DOM-related tests
  - `bun run test:coverage` 鈥?generate coverage report
  - `bun run test:e2e` 鈥?run end-to-end tests

### PR Checklist

Before submitting, please confirm:

- [ ] `bun run format` passed
- [ ] `bun run lint` passed
- [ ] `bunx vitest run` passed
- [ ] No `any` type violations (TypeScript strict mode)
- [ ] No unhandled Promise rejections
- [ ] PR only contains one scope (atomic)
- [ ] Commits follow Conventional Commit format

## Rule 1: Atomic PRs

Each pull request must contain **exactly one feature or one bug fix** that cannot be further decomposed.

**How to check:** Ask yourself (or an AI): _"Can this diff be split into multiple independently mergeable PRs?"_ If so, split it before submitting.

### Examples

**Acceptable (single PR):**

- A single-root-cause bug fix, even if it touches multiple files (e.g., fixing toast z-index across modal and chat layers)
- A complete feature (e.g., team creation modal and its form validation)

**Must be split into multiple PRs:**

- Team chat scroll fix + Sentry user tracking + Office preview perf improvements = 3 PRs
- Multiple unrelated bug fixes bundled together (e.g., titlebar navigation fix + i18n missing keys + voice input UI fix)
- Independent technical layers (e.g., IPC bridge refactor + renderer process components + Worker process changes, belonging to unrelated features)

## Rule 2: Commit and PR Title Format

Commit messages and PR titles must use the English Conventional Commit format:

```text
<type>(<scope>): <subject>
```

`type` must be one of:

| Type       | Purpose                  | Changelog Visible |
| ---------- | ------------------------ | ----------------- |
| `feat`     | New user-facing feature  | Yes               |
| `fix`      | Bug fix                  | Yes               |
| `perf`     | Performance improvement  | Yes               |
| `refactor` | Code refactoring         | Yes               |
| `docs`     | Documentation            | Yes               |
| `style`    | Formatting or styling    | No                |
| `chore`    | Maintenance work         | No                |
| `test`     | Tests                    | No                |
| `ci`       | CI configuration         | No                |
| `build`    | Build system changes     | No                |

Examples:

- `fix(preview): restore local html loading`
- `feat(workspace): add file preview shortcuts`
- `docs(contributing): document pr title format`

## Rule 3: Pre-Push Local Validation

CI will reject your PR if these checks do not pass. **Run them locally before pushing to save time.**

### Step-by-step

```bash
# 1. Format (required 鈥?applies to .ts, .tsx, .css, .json, .md)
bun run format

# 2. Lint (skip if no .ts/.tsx changes)
bun run lint

# 3. Type check (skip if no .ts/.tsx changes)
bunx tsc --noEmit

# 4. i18n validation (only if files under src/renderer/, locales/, or src/common/config/i18n/ are changed)
bun run i18n:types
node scripts/check-i18n.js

# 5. Tests
bunx vitest run
```

### One-liner

This replicates the exact CI quality check, then runs tests:

```bash
prek run --from-ref origin/main --to-ref HEAD
bunx vitest run
```

> `prek` runs format-check + lint + tsc in parallel. If errors appear, run the auto-fix commands above, then re-run `prek`.

### Common failures

| Failure Type | How To Fix                                               |
| ------------ | -------------------------------------------------------- |
| Format error | `bun run format` (auto-fixed)                            |
| Lint error   | `bun run lint:fix` for auto-fixable parts, rest manually |
| Type error   | Fix TypeScript issues, re-run `bunx tsc --noEmit`        |
| i18n error   | Check for missing keys, run `bun run i18n:types`         |
| Test failures | Fix the failing test or implementation; re-run `bunx vitest run` |

## Enforcement

If a PR does not follow the rules, maintainers may:

1. **Close and ask for resubmission** (preferred) 鈥?you retain full authorship when correctly re-submitted.
2. **Cherry-pick valuable parts** 鈥?your author info is kept in git history, but the original PR appears as "Closed" rather than "Merged".

Code style, dependencies, and documentation polish are handled by maintainers after merging. Your PR only needs to focus on the functional change itself.
