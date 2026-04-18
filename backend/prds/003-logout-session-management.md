# PRD-003: Logout And Session Management

## Problem and Goal
The project already supports user registration and login, but logout is only a placeholder and the frontend does not persist authenticated state. Users can navigate to private screens without a real session, and collaborators do not have a documented auth-session convention to follow.

The goal of this feature is to introduce a consistent login/logout flow with persisted frontend session state, basic private-route protection, and a stable backend logout contract that supports the current stateless JWT model.

## Scope
- Persist authenticated session state in the frontend with Zustand and `persist` backed by `localStorage`.
- Convert the login screen into a real API-driven form.
- Implement logout from authenticated UI entry points and redirect users to `/login`.
- Protect `/dashboard` and `/profile` with client-side guards.
- Keep `POST /api/auth/logout` as a stable success acknowledgement endpoint for client teardown.

## Affected Actors
- Authenticated marketplace users accessing dashboard and profile screens.
- Frontend contributors who need a single source of truth for auth session state.
- Backend contributors extending auth flows without breaking the current login/logout contract.

## Implementation Approach
- The frontend owns session persistence and route guards for this iteration.
- The backend keeps JWT issuance in `POST /api/auth/login` and acknowledges logout requests via a service-backed `POST /api/auth/logout`.
- Logout in v1 invalidates the client session only. The backend response is intentionally stable so token revocation can be added later without changing the client contract.

## Data, Contracts, and Integrations
- `POST /api/auth/login` keeps returning `status`, `message`, `access_token`, `token_type`, and `user`.
- `POST /api/auth/logout` returns a success acknowledgement payload for session teardown.
- Frontend auth state includes `accessToken`, `tokenType`, `user`, and `isAuthenticated` in a persisted Zustand store.
- Frontend API integration targets the backend base URL from `NEXT_PUBLIC_API_URL`, defaulting to `http://localhost:8000`.

## Validations, Permissions, and Rules
- Private screens `/dashboard` and `/profile` redirect unauthenticated users to `/login`.
- `/login` redirects authenticated users to `/dashboard`.
- Logout must clear persisted client state even if the backend logout request fails.
- No role-based authorization changes are introduced in this feature.

## Risks and Edge Cases
- `localStorage` persistence is less secure than HttpOnly cookies, but is accepted for this iteration.
- Because JWTs are stateless in v1, backend logout does not revoke already-issued tokens.
- Hydration timing on the client must be handled carefully to avoid flashing protected content before the persisted session is loaded.

## Out of Scope
- Token revocation or blacklisting.
- Multi-device session invalidation.
- App-wide authorization rules beyond `/dashboard` and `/profile`.
- Migration from token storage in `localStorage` to cookies.
