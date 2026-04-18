export type AuthenticatedUser = {
  id: number;
  username: string;
  email: string;
  role: string;
};

export type LoginResponse = {
  status: string;
  message: string;
  access_token: string;
  token_type: string;
  user: AuthenticatedUser;
};

export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
};

export type RegisterResponse = {
  status: string;
  message: string;
  user: AuthenticatedUser;
};

type ApiErrorPayload = {
  detail?: string;
  message?: string;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "http://localhost:8000";

async function parseJsonSafely<T>(response: Response): Promise<T | null> {
  const text = await response.text();
  if (!text) {
    return null;
  }

  return JSON.parse(text) as T;
}

export async function loginRequest(email: string, password: string): Promise<LoginResponse> {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const payload = await parseJsonSafely<LoginResponse & ApiErrorPayload>(response);

  if (!response.ok) {
    throw new Error(payload?.detail ?? payload?.message ?? "Unable to login");
  }

  if (!payload) {
    throw new Error("Empty login response");
  }

  return payload;
}

export async function registerRequest(payload: RegisterPayload): Promise<RegisterResponse> {
  const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const parsedPayload = await parseJsonSafely<RegisterResponse & ApiErrorPayload>(response);

  if (!response.ok) {
    throw new Error(parsedPayload?.detail ?? parsedPayload?.message ?? "Unable to register");
  }

  if (!parsedPayload) {
    throw new Error("Empty register response");
  }

  return parsedPayload;
}

export async function logoutRequest(accessToken?: string | null) {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    method: "POST",
    headers: accessToken
      ? {
          Authorization: `Bearer ${accessToken}`,
        }
      : undefined,
  });

  const payload = await parseJsonSafely<{ status: string; message: string } & ApiErrorPayload>(
    response
  );

  if (!response.ok) {
    throw new Error(payload?.detail ?? payload?.message ?? "Unable to logout");
  }

  return payload;
}
