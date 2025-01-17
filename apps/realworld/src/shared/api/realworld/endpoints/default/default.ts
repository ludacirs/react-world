/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Conduit API
 * Conduit API
 * OpenAPI spec version: 1.0.0
 */
import { useQuery } from '@tanstack/react-query';
import type { UseQueryOptions, QueryFunction, UseQueryResult, QueryKey } from '@tanstack/react-query';
import type { TagsResponse, GenericErrorModel } from '../../models';
import { axiosInstance } from '../../axios/axiosInstance';

/**
 * Get tags. Auth not required
 * @summary Get tags
 */
export const getTags = (signal?: AbortSignal) => {
  return axiosInstance<TagsResponse>({ url: `/tags`, method: 'get', signal });
};

export const getGetTagsQueryKey = () => [`/tags`] as const;

export const getGetTagsQueryOptions = <
  TData = Awaited<ReturnType<typeof getTags>>,
  TError = GenericErrorModel,
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getTags>>, TError, TData>;
}): UseQueryOptions<Awaited<ReturnType<typeof getTags>>, TError, TData> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetTagsQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getTags>>> = ({ signal }) => getTags(signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type GetTagsQueryResult = NonNullable<Awaited<ReturnType<typeof getTags>>>;
export type GetTagsQueryError = GenericErrorModel;

/**
 * @summary Get tags
 */
export const useGetTags = <TData = Awaited<ReturnType<typeof getTags>>, TError = GenericErrorModel>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getTags>>, TError, TData>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetTagsQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};
