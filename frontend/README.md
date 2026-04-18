# Frontend

## Getting Started

Run the frontend locally:

```bash
npm run dev
```

The app is served on `http://localhost:3000` by default.

## Auth Session Convention

This frontend uses a single persisted Zustand store as the source of truth for authentication state.

- Store location: `lib/auth-store.ts`
- Persistence: Zustand `persist` backed by `localStorage`
- Persisted fields: `accessToken`, `tokenType`, `user`, `isAuthenticated`
- Supported auth actions: `login`, `logout`, `hydrate`, `clearSession`

## Auth API Integration

- Backend base URL is read from `NEXT_PUBLIC_API_URL`
- Default backend URL is `http://localhost:8000`
- `POST /api/auth/login` bootstraps the frontend session
- `POST /api/auth/logout` acknowledges logout and the frontend always clears the local session even if that request fails

## Route Protection

- `/dashboard` and `/profile` are protected client-side routes
- `/login` redirects authenticated users to `/dashboard`
- Public screens keep their current behavior in this iteration

## Security Note

This iteration stores JWT session data in `localStorage`. That is acceptable for the current scope, but it is less secure than an HttpOnly cookie-based flow and should not be treated as final auth hardening.
