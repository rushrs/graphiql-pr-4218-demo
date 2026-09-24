import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GraphiQL } from 'graphiql';
import { createGraphiQLFetcher } from '@graphiql/toolkit-pr/src/create-fetcher/index.ts';
import 'graphiql/style.css';
import './main.css';

const fetcher = createGraphiQLFetcher({
  url: '/graphql',
  sseUrl: '/graphql',
});

const defaultQuery = `subscription Countdown {
  countdown(from: 10)
}`;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GraphiQL fetcher={fetcher} defaultQuery={defaultQuery} />
  </StrictMode>,
);
