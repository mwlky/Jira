export function isTokenValid(token: string | null): boolean {
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1])) as { exp: number };
    const expiry = payload.exp * 1000;
    return Date.now() < expiry;
  } catch (error) {
    return false;
  }
}

export const authFetch = async (url: string, options: RequestInit = {}) => {
  const token = localStorage.getItem("token");

  const authOptions: RequestInit = {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(url, authOptions);

  if(!response.ok){
    throw new Error(`HTTP ${response.status}: ${response.statusText}`)
  }

  return response;
};
