// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';

export class Reports extends APIResource {
  /**
   * Build a custom report. Group and filter on the fields you care about.
   *
   * **Permissions:** Requires read access to the relevant site (`all-sites-readonly`, `read:{site_id}` or `manage:{site_id}`).
   *
   * **Returns:** Returns an array of objects. The properties of each object vary based on the aggregates and groupings you've asked for. All numeric values are returned as strings.
   *
   * > This API endpoint is only accurate on data from March 2021 onwards. Before then, we did not tie browser, country, pathname, etc. together, so we have no way to offer this advanced filtering on that data.
   *
   * > Grouped reports (`field_grouping`) default to 500 rows unless you set `limit`. The maximum is 1000, and this endpoint has no pagination. BI tools such as Looker Studio / Data Studio that fire many aggregations at once will hit the [concurrency cap](/api/v1/rate-limits), not the row cap. Space those requests, cache one extract per period, or raise the API plan.
   *
   * > **Goal codes are no longer available:** Reporting on an event by its goal code (`entity_id` with `entity=event`) is no longer available. Report on events using `site_id` and `entity_name` instead. Pageview reporting, where `entity_id` is the site `id`, is unaffected.
   *
   * #### Filtering
   *
   * Filters are supplied as a JSON array. Each filter is an object with a `property`, an `operator` and a string `value`. You can add as many filters as you like; see the examples in the code panel.
   *
   * We support the following operators:
   *
   * - `is`: exact match
   * - `is not`: everything except an exact match
   * - `is like`: contains the term (supports wildcards `*`)
   * - `is not like`: does not contain the term
   * - `matching`: matches a regular expression (regex) pattern
   * - `not matching`: does not match a regex pattern
   *
   * **Operator availability depends on the field.** Text-style fields support all six operators; categorical fields support only `is` and `is not`:
   *
   * - **All six operators:** `domain`, `hostname`, `pathname`, `entry_page`, `exit_page`, `referrer_hostname`, `referrer_pathname`, `referrer_source`, `ref`, `utm_campaign`, `utm_source`, `utm_medium`, `utm_content`, `utm_term`
   * - **`is` / `is not` only:** `device_type`, `operating_system`, `browser`, `country_code`, `city`, `state`, `region`
   *
   * Note: `domain` can be filtered on but not grouped by, while `keyword` can be grouped by but not filtered on.
   *
   * ##### Entry and exit pages
   *
   * `entry_page` is the pathname of the first pageview in a visit. `exit_page` is the pathname of the last pageview before the visitor leaves. Both are session-level fields. They mirror the Entry Pages and Exit Pages reports on your dashboard and work for both `field_grouping` and `filters`.
   *
   * When you filter by `entry_page`, only visits that *entered* on that page are included. A visitor who lands on `/home` and later views `/pricing` is excluded by `{"property": "entry_page", "operator": "is", "value": "/pricing"}`, but included when filtering on `pathname` instead.
   *
   * ##### Regex examples
   *
   * With `matching` / `not matching` you can build sophisticated filters:
   *
   * - `^/(about|contact|pricing)$`: match only /about, /contact and /pricing
   * - `^/(about|contact|pricing)`: match paths starting with those
   * - `^/blog/\d{4}/\d{2}/`: match blog URLs like /blog/2025/07/my-post
   * - `^/products/[^/]+/$`: match product category pages
   *
   * @param {ReportAggregationParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful response
   *
   * @example
   * ```ts
   * await client.reports.aggregation({
   *   entity: 'pageview',
   *   aggregates: 'pageviews',
   * });
   * ```
   */
  aggregation(query: ReportAggregationParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/aggregations', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the total number of current visitors on a site. The detailed view also returns the top 150 pages and top 150 referrers.
   *
   * **Permissions:** Requires read access to the site (`all-sites-readonly`, `read:{site_id}` or `manage:{site_id}`).
   *
   * **Returns:** The current visitor count, with an optional detailed breakdown.
   *
   * @param {ReportCurrentVisitorsParams} query - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Simple
   *
   * @example
   * ```ts
   * await client.reports.currentVisitors({
   *   site_id: 'CDBUGS',
   *   detailed: false,
   * });
   * ```
   */
  currentVisitors(query: ReportCurrentVisitorsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/current_visitors', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ReportAggregationParams {
  /**
   * The entity you want to report on. Events are treated separately from pageviews. Supported values: `pageview` and `event`.
   */
  entity: 'pageview' | 'event';
  /**
   * When `entity` is `pageview`, this is the `id` of the site you want to aggregate on. When `entity` is `event`, do not pass a goal code here. Use `site_id` and `entity_name` instead. Pageview usage is unchanged.
   *
   * **Required when entity is "pageview".**
   */
  entity_id?: string;
  /**
   * The `id` of the site the event belongs to.
   *
   * **Required when entity is "event" and entity_id is omitted.**
   */
  site_id?: string;
  /**
   * The name of the event you want to report on. Example: `purchase`.
   *
   * **Required when entity is "event" and entity_id is omitted.**
   */
  entity_name?: string;
  /**
   * The aggregates you wish to include, separated by a comma.
   *
   * Supported values for **pageview** entities: `visits`, `uniques`, `pageviews`, `avg_duration` and `bounce_rate`. The difference between "visits" and "uniques" is that visits are unique site visits whilst uniques are unique page visits.
   *
   * Supported values for **event** entities: `conversions`, `unique_conversions` and `value` (value is returned in cents).
   */
  aggregates: string;
  /**
   * By default, we don't do any date grouping and return total aggregations. Override this with `hour`, `day`, `month` or `year`. Note: `hour` grouping is only supported for date ranges of up to 7 days.
   */
  date_grouping?: 'hour' | 'day' | 'month' | 'year';
  /**
   * The fields you want to group by, separated by a comma (e.g. `hostname,pathname`). Supported values: `hostname`, `pathname`, `entry_page`, `exit_page`, `referrer_hostname`, `referrer_pathname`, `referrer_source`, `browser`, `country_code`, `city`, `state`, `region`, `device_type`, `operating_system`, `utm_campaign`, `utm_content`, `utm_medium`, `utm_source`, `utm_term`, `keyword` and `ref`.
   */
  field_grouping?: string;
  /**
   * The field you want to sort by, in the format `field:asc|desc`. You can use any field present in `aggregates` or `field_grouping`. When using `date_grouping`, you can also sort by `timestamp:asc` or `timestamp:desc`.
   * Example: `pageviews:desc`
   */
  sort_by?: string;
  /**
   * Timestamp (e.g. `2022-04-01 15:31:00`). Should match the timezone you're reporting in. Defaults to the entity's first recorded data.
   */
  date_from?: string;
  /**
   * Timestamp (e.g. `2022-04-01 15:31:00`). Should match the timezone you're reporting in. Default: now.
   */
  date_to?: string;
  /**
   * **Deprecated.** We now report using each site's configured timezone by default. If provided, this [TZ database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) overrides the site's timezone for this request. We'll be removing this parameter in the future.
   */
  timezone?: string;
  /**
   * Optional integer from `1` to `1000` inclusive.
   *
   * **Default.** When `field_grouping` is set and you omit `limit`, we return at most 500 rows. When `field_grouping` is omitted, there is no default row cap. `date_grouping` alone does not trigger the 500 default.
   *
   * **Maximum.** A `limit` above 1000 returns HTTP 400 with an `errors.limit` validation message. There is no pagination on this endpoint, so you cannot walk past 1000 grouped rows with a cursor. Narrow the result with `filters` and/or a shorter `date_from` / `date_to`, then issue more requests.
   */
  limit?: number;
  /**
   * A JSON-encoded array of filter objects. See the filtering reference below for the full list of supported properties and operators. Each filter's `value` must be a string.
   */
  filters?: string;
}

export interface ReportCurrentVisitorsParams {
  /**
   * The `id` of the site.
   * Example: `CDBUGS`
   */
  site_id: string;
  /**
   * Set to `true` for a detailed breakdown of pages and referrers. Otherwise you'll only get a count.
   * @default false
   */
  detailed?: boolean;
}
export declare namespace Reports {
  export {
    type ReportAggregationParams as ReportAggregationParams,
    type ReportCurrentVisitorsParams as ReportCurrentVisitorsParams,
  };
}
