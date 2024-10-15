import { UseQueryOptions } from "react-query";

export type IOptionsParam<T, P> =
  Omit<UseQueryOptions<T, unknown, T, (string | P)[]>, "queryKey" | "queryFn"> | undefined
