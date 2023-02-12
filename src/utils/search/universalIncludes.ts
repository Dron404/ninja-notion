export function universalIncludes<T>(
  value: string,
  data: string | T[] | undefined
): boolean {
  return Array.isArray(data)
    ? !!data.join().includes(value)
    : !!data?.includes(value);
}
