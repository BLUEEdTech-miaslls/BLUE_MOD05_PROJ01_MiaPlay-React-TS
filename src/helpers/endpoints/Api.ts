type args = [input: RequestInfo, init?: RequestInit | undefined];

export const Api = async (...args: args): Promise<Response> => {
  let [url, config] = args;
  const response = await fetch(url, config);
  return response;
};
