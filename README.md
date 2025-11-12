# DriftQ-Clients-JS

TypeScript/Node SDK for **DriftQ** — produce and consume messages, and call admin APIs.

- Minimal, idiomatic TypeScript
- Resilient client surface (future gRPC integration)
- Works with `driftq-core` (gRPC) — network calls are stubbed for now
- No codegen required for end‑users

---

## Requirements

- Node.js 18+
- pnpm (recommended) or npm/yarn

---

## Install

```bash
# when published
pnpm add driftq-clients-js
# or for local development
pnpm install
pnpm build
```

---

## Usage (minimal)

> In this initial release, APIs are **no‑ops** to keep the SDK compilable until gRPC stubs land. See `/examples` for runnable scaffolds.

---

## Scripts

- `pnpm build` — compile TypeScript to `dist/`
- `pnpm test` — run unit tests (vitest)
- `pnpm lint` — eslint (optional)

---

## Versioning

- Follows SemVer. Breaking surface changes bump **minor** while < v1.

---

## Contributing
Contributions are welcome! Please open an issue or pull request to discuss changes. Network code will be added once protos are wired in.

---

## License

Apache 2.0 — see `LICENSE`.
