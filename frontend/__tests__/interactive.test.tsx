import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import LoginPage from '../app/login/page';
import RegisterPage from '../app/register/page';
import DashboardPage from '../app/dashboard/page';
import ProfilePage from '../app/profile/page';
import { useAuthStore } from '../lib/auth-store';
import { routerReplaceMock } from './setup';

describe('Interactive Auth Flow', () => {
  beforeEach(() => {
    localStorage.clear();
    routerReplaceMock.mockReset();
    vi.restoreAllMocks();

    useAuthStore.setState({
      accessToken: null,
      tokenType: null,
      user: null,
      isAuthenticated: false,
      hasHydrated: true,
    });
  });

  test('LoginPage submits credentials, stores session, and redirects', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      text: async () =>
        JSON.stringify({
          status: 'success',
          message: 'Login successful',
          access_token: 'jwt-token',
          token_type: 'bearer',
          user: {
            id: 7,
            username: 'operator',
            email: 'operator@stockflow.com',
            role: 'customer',
          },
        }),
    });

    vi.stubGlobal('fetch', fetchMock);

    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText(/Operator Email/i), {
      target: { value: 'operator@stockflow.com' },
    });
    fireEvent.change(screen.getByLabelText(/Secure Passkey/i), {
      target: { value: 'correctpassword' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Sign In/i }));

    await waitFor(() => {
      expect(useAuthStore.getState().isAuthenticated).toBe(true);
    });

    expect(useAuthStore.getState().accessToken).toBe('jwt-token');
    expect(routerReplaceMock).toHaveBeenCalledWith('/dashboard');
  });

  test('LoginPage renders backend error without persisting session', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      text: async () => JSON.stringify({ detail: 'Invalid credentials' }),
    });

    vi.stubGlobal('fetch', fetchMock);

    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText(/Operator Email/i), {
      target: { value: 'operator@stockflow.com' },
    });
    fireEvent.change(screen.getByLabelText(/Secure Passkey/i), {
      target: { value: 'wrongpassword' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Sign In/i }));

    await waitFor(() => {
      expect(screen.getByText(/Invalid credentials/i)).toBeInTheDocument();
    });

    expect(useAuthStore.getState().isAuthenticated).toBe(false);
    expect(routerReplaceMock).not.toHaveBeenCalled();
  });

  test('RegisterPage submits credentials and redirects to login', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      text: async () =>
        JSON.stringify({
          status: 'success',
          message: 'User registered successfully',
          user: {
            id: 8,
            username: 'new-operator',
            email: 'new@stockflow.com',
            role: 'customer',
          },
        }),
    });

    vi.stubGlobal('fetch', fetchMock);

    render(<RegisterPage />);

    fireEvent.change(screen.getByLabelText(/Operator Name/i), {
      target: { value: 'new-operator' },
    });
    fireEvent.change(screen.getByLabelText(/Email Identity/i), {
      target: { value: 'new@stockflow.com' },
    });
    fireEvent.change(screen.getByLabelText(/Secure Passkey/i), {
      target: { value: 'strongpassword' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Establish Account/i }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        'http://localhost:8000/api/auth/register',
        expect.objectContaining({
          method: 'POST',
        })
      );
    });

    expect(routerReplaceMock).toHaveBeenCalledWith('/login');
    expect(useAuthStore.getState().isAuthenticated).toBe(false);
  });

  test('RegisterPage renders backend error without redirecting', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      text: async () => JSON.stringify({ detail: 'Email already registered' }),
    });

    vi.stubGlobal('fetch', fetchMock);

    render(<RegisterPage />);

    fireEvent.change(screen.getByLabelText(/Operator Name/i), {
      target: { value: 'duplicate' },
    });
    fireEvent.change(screen.getByLabelText(/Email Identity/i), {
      target: { value: 'duplicate@stockflow.com' },
    });
    fireEvent.change(screen.getByLabelText(/Secure Passkey/i), {
      target: { value: 'strongpassword' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Establish Account/i }));

    await waitFor(() => {
      expect(screen.getByText(/Email already registered/i)).toBeInTheDocument();
    });

    expect(routerReplaceMock).not.toHaveBeenCalled();
  });

  test('Dashboard redirects to login when there is no session', async () => {
    render(<DashboardPage />);

    await waitFor(() => {
      expect(routerReplaceMock).toHaveBeenCalledWith('/login');
    });
  });

  test('Profile logout clears session and redirects to login', async () => {
    useAuthStore.setState({
      accessToken: 'persisted-token',
      tokenType: 'bearer',
      user: {
        id: 3,
        username: 'jaxen',
        email: 'jaxen@stockflow.com',
        role: 'admin',
      },
      isAuthenticated: true,
      hasHydrated: true,
    });

    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      text: async () =>
        JSON.stringify({
          status: 'success',
          message: 'Logout acknowledged. Client session cleared successfully.',
        }),
    });

    vi.stubGlobal('fetch', fetchMock);

    render(<ProfilePage />);

    fireEvent.click(screen.getAllByRole('button', { name: /Log Out/i })[0]);

    await waitFor(() => {
      expect(useAuthStore.getState().isAuthenticated).toBe(false);
    });

    expect(routerReplaceMock).toHaveBeenCalledWith('/login');
  });
});
