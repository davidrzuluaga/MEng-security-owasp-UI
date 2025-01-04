export const get = async <ResponseType>(
  path: string,
  headers?: HeadersInit,
  params?: URLSearchParams,
  tags?: string[]
) => {
  const url = params ? `${path}?${params}` : `${path}`;
  try {
    const res = await fetch(url, {
      headers: new Headers(headers),
      next: { tags },
    });

    if (!res.ok) {
      const errorMsg = `GET request failed with status ${res.status}: ${res.statusText}`;
      console.error(errorMsg);
      throw new Error(errorMsg);
    }

    const data = (await res.json()) as ResponseType;

    return data;
  } catch (error) {
    console.error(`Error in GET request ${url}:`, error);
    throw error;
  }
};

export const post = async <ResponseType, BodyType>(
  path: string,
  body: BodyType,
  headers?: HeadersInit,
  params?: URLSearchParams
) => {
  const url = params ? `${path}?${params}` : `${path}`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        ...headers,
      }),
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorMsg = `POST request failed with status ${res.status}: ${res.statusText}`;
      console.error(errorMsg);
      throw new Error(errorMsg);
    }

    const data = (await res.json()) as ResponseType;

    return data;
  } catch (error) {
    console.error(`Error in POST request ${url}:`, error);
    throw error;
  }
};

export const patch = async <ResponseType, BodyType>(
  path: string,
  body: BodyType,
  headers?: HeadersInit,
  params?: URLSearchParams
) => {
  const url = params ? `${path}?${params}` : `${path}`;
  try {
    const res = await fetch(url, {
      method: "put",
      headers: new Headers({
        "Content-Type": "application/json",
        ...headers,
      }),
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorMsg = `PATCH request failed with status ${res.status}: ${res.statusText}`;
      console.error(errorMsg);
      throw new Error(errorMsg);
    }

    const data = (await res.json()) as ResponseType;

    return data;
  } catch (error) {
    console.error(`Error in PATCH request ${url}:`, error);
    throw error;
  }
};
