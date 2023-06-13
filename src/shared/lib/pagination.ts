export const getLimit = (pageNumber: number, pageSize: number) => pageSize;
export const getOffset = (pageNumber: number, pageSize: number) =>
  (pageNumber - 1) * pageSize;
export const getPageSize = (offset: number, limit: number) => limit;
export const getPageNumber = (offset: number, limit: number) =>
  Math.floor(offset / limit) + 1;
