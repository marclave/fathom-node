// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke test: calls every generated operation once to confirm the SDK can reach each endpoint.
// Run it from this repo with `bun tests/smoke-test.ts`. Each case below calls one SDK method
// exactly the way the SDK exposes it (positional params, request body, pagination, streaming).
//
// Two environment variables tune a run:
//   - SCALAR_SMOKE_FILTER: comma-separated needles; only operations whose name or path contains
//     one of them run, so you can smoke-test a subset without editing this file.
//   - SCALAR_SMOKE_REPORT: a file path; when set, the run writes a JSON report there instead of
//     printing a table. The generator uses this to collect per-operation results.
import { writeFileSync } from 'node:fs';

// The package exports the client class. The client reads auth and the base URL from the
// environment, so it needs no constructor options to point at a server.
import fathom from '@fathom/fathom-analytics';

// One shared client runs every case.
const client = new fathom();

// The result of running one case, collected for the JSON report or the printed table.
type SmokeResult = {
  operation: string;
  method: string;
  path: string;
  label?: string;
  status: 'passed' | 'failed';
  durationMs: number;
  error?: string;
};

// One or two entries per generated operation: the first passes only the arguments the method
// requires, the second also fills every optional parameter and body property. `label` says which
// is which, and is absent when the operation has no optional argument and so has only one case.
// `run` performs the real SDK call; the other fields are metadata used for filtering and
// reporting. This list is generated, so it stays in sync with the SDK surface.
const cases: {
  operation: string;
  method: string;
  path: string;
  label?: string;
  run: () => Promise<unknown>;
}[] = [
  {
    operation: 'list',
    method: 'GET',
    path: '/account',
    run: async () => {
      await client.account.list();
    },
  },

  {
    operation: 'listToken',
    method: 'GET',
    path: '/token',
    run: async () => {
      await client.account.listToken();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/sites',
    label: 'required params',
    run: async () => {
      await client.sites.list({
        limit: 10,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/sites',
    label: 'all params',
    run: async () => {
      await client.sites.list({
        limit: 10,
        starting_after: 'startingAfter',
        ending_before: 'endingBefore',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/sites',
    label: 'required params',
    run: async () => {
      await client.sites.create({
        name: 'Bugs Bunny Portfolio',
        sharing: 'none',
        multi_domain: false,
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/sites',
    label: 'all params',
    run: async () => {
      await client.sites.create({
        name: 'Bugs Bunny Portfolio',
        sharing: 'none',
        share_password: '',
        timezone: '',
        multi_domain: false,
        multi_domain_option: 'combined',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/sites/{site_id}',
    run: async () => {
      await client.sites.retrieve('CDBUGS');
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/sites/{site_id}',
    label: 'required params',
    run: async () => {
      await client.sites.update('CDBUGS');
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/sites/{site_id}',
    label: 'all params',
    run: async () => {
      await client.sites.update('CDBUGS', {
        name: 'Acme Holdings Inc',
        sharing: 'none',
        share_password: '',
        timezone: '',
        multi_domain: false,
        multi_domain_option: 'combined',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/sites/{site_id}',
    run: async () => {
      await client.sites.delete('CDBUGS');
    },
  },

  {
    operation: 'wipe',
    method: 'DELETE',
    path: '/sites/{site_id}/data',
    run: async () => {
      await client.sites.wipe('CDBUGS');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/sites/{site_id}/events',
    label: 'required params',
    run: async () => {
      await client.events.list('CDBUGS', {
        limit: 10,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/sites/{site_id}/events',
    label: 'all params',
    run: async () => {
      await client.events.list('CDBUGS', {
        limit: 10,
        starting_after: 'startingAfter',
        ending_before: 'endingBefore',
      });
    },
  },

  {
    operation: 'deleteByName',
    method: 'DELETE',
    path: '/sites/{site_id}/events',
    run: async () => {
      await client.events.deleteByName('CDBUGS', {
        name: 'Purchase early access',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/sites/{site_id}/events',
    run: async () => {
      await client.events.create('CDBUGS', {
        name: 'Purchase early access',
        currency: 'dollar',
      });
    },
  },

  {
    operation: 'setCurrency',
    method: 'POST',
    path: '/sites/{site_id}/events/currency',
    run: async () => {
      await client.events.setCurrency('CDBUGS', {
        name: 'Purchase early access',
        currency: 'pound',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/sites/{site_id}/events/{event_id}',
    run: async () => {
      await client.events.retrieve('ABCDEFGH', {
        site_id: 'CDBUGS',
      });
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/sites/{site_id}/events/{event_id}',
    label: 'required params',
    run: async () => {
      await client.events.update('ABCDEFGH', {
        site_id: 'CDBUGS',
      });
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/sites/{site_id}/events/{event_id}',
    label: 'all params',
    run: async () => {
      await client.events.update('ABCDEFGH', {
        site_id: 'CDBUGS',
        name: 'Purchase early access (live)',
        currency: 'dollar',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/sites/{site_id}/events/{event_id}',
    run: async () => {
      await client.events.delete('ABCDEFGH', {
        site_id: 'CDBUGS',
      });
    },
  },

  {
    operation: 'wipe',
    method: 'DELETE',
    path: '/sites/{site_id}/events/{event_id}/data',
    run: async () => {
      await client.events.wipe('ABCDEFGH', {
        site_id: 'CDBUGS',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/sites/{site_id}/milestones',
    label: 'required params',
    run: async () => {
      await client.milestones.list('CDBUGS', {
        limit: 10,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/sites/{site_id}/milestones',
    label: 'all params',
    run: async () => {
      await client.milestones.list('CDBUGS', {
        limit: 10,
        starting_after: 'startingAfter',
        ending_before: 'endingBefore',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/sites/{site_id}/milestones',
    run: async () => {
      await client.milestones.create('CDBUGS', {
        name: 'Website Redesign Launch',
        milestone_date: '2024-01-15',
      });
    },
  },

  {
    operation: 'retrieve',
    method: 'GET',
    path: '/sites/{site_id}/milestones/{milestone_id}',
    run: async () => {
      await client.milestones.retrieve('ddc9cdff-ab83-41fa-96c6-dfb276a862e7', {
        site_id: 'CDBUGS',
      });
    },
  },

  {
    operation: 'update',
    method: 'POST',
    path: '/sites/{site_id}/milestones/{milestone_id}',
    run: async () => {
      await client.milestones.update('ddc9cdff-ab83-41fa-96c6-dfb276a862e7', {
        site_id: 'CDBUGS',
        name: 'Website Redesign Launch v2',
        milestone_date: '2024-01-20',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/sites/{site_id}/milestones/{milestone_id}',
    run: async () => {
      await client.milestones.delete('ddc9cdff-ab83-41fa-96c6-dfb276a862e7', {
        site_id: 'CDBUGS',
      });
    },
  },

  {
    operation: 'aggregation',
    method: 'GET',
    path: '/aggregations',
    label: 'required params',
    run: async () => {
      await client.reports.aggregation({
        entity: 'pageview',
        aggregates: 'pageviews',
      });
    },
  },

  {
    operation: 'aggregation',
    method: 'GET',
    path: '/aggregations',
    label: 'all params',
    run: async () => {
      await client.reports.aggregation({
        entity: 'pageview',
        entity_id: 'CDBUGS',
        site_id: 'siteId',
        entity_name: 'entityName',
        aggregates: 'pageviews',
        date_grouping: 'hour',
        field_grouping: 'fieldGrouping',
        sort_by: 'sortBy',
        date_from: 'dateFrom',
        date_to: 'dateTo',
        timezone: 'timezone',
        limit: 1,
        filters: 'filters',
      });
    },
  },

  {
    operation: 'currentVisitors',
    method: 'GET',
    path: '/current_visitors',
    run: async () => {
      await client.reports.currentVisitors({
        site_id: 'CDBUGS',
        detailed: false,
      });
    },
  },
];

const main = async (): Promise<void> => {
  // SCALAR_SMOKE_FILTER (comma-separated) keeps only cases whose operation name or path matches
  // one of the needles, so a caller can smoke-test a subset. With no filter, every case runs.
  const filter = process.env['SCALAR_SMOKE_FILTER'];
  const needles = filter
    ? filter
        .split(',')
        .map((needle) => needle.trim())
        .filter(Boolean)
    : [];
  const selected =
    needles.length > 0
      ? cases.filter((testCase) =>
          needles.some((needle) => testCase.operation.includes(needle) || testCase.path.includes(needle)),
        )
      : cases;

  // Run every selected case concurrently. Promise.allSettled means one failing operation never
  // blocks the others, so a single run reports the status of every endpoint.
  const settled = await Promise.allSettled(
    selected.map(async (testCase): Promise<SmokeResult> => {
      const startedAt = Date.now();
      // `label` distinguishes the required-params run from the all-params run of the same
      // operation; it is omitted entirely when the operation contributed only one case.
      const identity = {
        operation: testCase.operation,
        method: testCase.method,
        path: testCase.path,
        ...(testCase.label ? { label: testCase.label } : {}),
      };
      try {
        await testCase.run();
        return { ...identity, status: 'passed', durationMs: Date.now() - startedAt };
      } catch (error) {
        // Prefer the stack so a failure points at the failing SDK call; fall back to the message.
        const message = error instanceof Error ? (error.stack ?? error.message) : String(error);
        return { ...identity, status: 'failed', durationMs: Date.now() - startedAt, error: message };
      }
    }),
  );

  // allSettled never rejects, but defensively map any rejected slot to a failed result.
  const results: SmokeResult[] = settled.map((result) =>
    result.status === 'fulfilled'
      ? result.value
      : {
          operation: 'unknown',
          method: '',
          path: '',
          status: 'failed',
          durationMs: 0,
          error: String(result.reason),
        },
  );
  const failed = results.filter((result) => result.status === 'failed');

  // With SCALAR_SMOKE_REPORT set, write a machine-readable report; otherwise print a table.
  const reportPath = process.env['SCALAR_SMOKE_REPORT'];
  if (reportPath) {
    writeFileSync(reportPath, JSON.stringify({ total: results.length, failed: failed.length, results }));
  } else {
    for (const result of results) {
      const suffix = result.label ? ` [${result.label}]` : '';
      if (result.status === 'passed')
        console.log(
          `\u2714 ${result.operation}${suffix} (${result.method} ${result.path}) ${result.durationMs}ms`,
        );
      else
        console.error(
          `\u2718 ${result.operation}${suffix} (${result.method} ${result.path})\n${result.error ?? ''}`,
        );
    }
    if (results.length === 0) {
      console.error('No code samples ran (empty SDK or a SCALAR_SMOKE_FILTER that matched nothing).');
    } else {
      console.log(`\n${results.length - failed.length}/${results.length} samples passed`);
    }
  }

  // An empty run (no operations, or a filter that matched nothing) is a failure, not a vacuous pass.
  if (failed.length > 0 || results.length === 0) process.exitCode = 1;
};

void main();
