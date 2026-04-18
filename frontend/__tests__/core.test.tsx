import { render, screen } from '@testing-library/react';
import { expect, test, describe, beforeEach } from 'vitest';
import HomePage from '../app/page';
import LoginPage from '../app/login/page';
import RegisterPage from '../app/register/page';
import { useAuthStore } from '../lib/auth-store';
import { routerReplaceMock } from './setup';

describe('Auth & Core Pages', () => {
  beforeEach(() => {
    localStorage.clear();
    routerReplaceMock.mockReset();
    useAuthStore.setState({
      accessToken: null,
      tokenType: null,
      user: null,
      isAuthenticated: false,
      hasHydrated: true,
    });
  });

  test('HomePage renders hero section', () => {
    render(<HomePage />);
    expect(screen.getByText(/Innovation\./i)).toBeDefined();
    expect(screen.getByText(/Explore Products/i)).toBeDefined();
  });

  test('LoginPage renders sign in form', () => {
    render(<LoginPage />);
    expect(screen.getByText(/Terminal Login/i)).toBeDefined();
    expect(screen.getByPlaceholderText(/operator@stockflow.com/i)).toBeDefined();
  });

  test('RegisterPage renders creation form', () => {
    render(<RegisterPage />);
    expect(screen.getByRole('heading', { name: /Establish Account/i })).toBeDefined();
    expect(screen.getByPlaceholderText(/IDENT_ALPHA_9/i)).toBeDefined();
  });

  test('LoginPage redirects authenticated users to dashboard', () => {
    useAuthStore.setState({
      accessToken: 'persisted-token',
      tokenType: 'bearer',
      user: {
        id: 1,
        username: 'operator',
        email: 'operator@stockflow.com',
        role: 'customer',
      },
      isAuthenticated: true,
      hasHydrated: true,
    });

    render(<LoginPage />);

    expect(routerReplaceMock).toHaveBeenCalledWith('/dashboard');
  });
});
