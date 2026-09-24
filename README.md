# GraphiQL SSE demo

Minimal reproduction for [graphql/graphiql#4218](https://github.com/graphql/graphiql/pull/4218). It uses the PR's `sseUrl` option with a local GraphQL Yoga server that emits a countdown subscription over Server-Sent Events.

## Run

Requires Node.js 22.22 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open <http://localhost:5173> and run the preloaded `Countdown` subscription. A new result should arrive every second without a WebSocket connection.

The demo installs `@graphiql/toolkit` directly from the PR branch and imports its source under the `@graphiql/toolkit-pr` alias, so it exercises the proposed implementation rather than a copy.
