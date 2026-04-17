import { render, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import HomePage from '../app/page';
import DashboardPage from '../app/dashboard/page';
import LoginPage from '../app/login/page';
import RegisterPage from '../app/register/page';

describe('Auth & Core Pages', () => {
  test('HomePage renders hero section', () => {
    render(<HomePage />);
    expect(screen.getByText(/Innovation\./i)).toBeDefined();
    expect(screen.getByText(/Explore Products/i)).toBeDefined();
  });

  test('DashboardPage renders sidebar and product grid', () => {
    render(<DashboardPage />);
    expect(screen.getByText(/Lead Engineer/i)).toBeDefined();
    expect(screen.getByText(/Hardware Catalog/i)).toBeDefined();
  });

  test('LoginPage renders sign in form', () => {
    render(<LoginPage />);
    expect(screen.getByText(/Operator Authentication/i)).toBeDefined();
    expect(screen.getByPlaceholderText(/ACCESS KEY/i)).toBeDefined();
  });

  test('RegisterPage renders creation form', () => {
    render(<RegisterPage />);
    expect(screen.getByText(/Establish New Identity/i)).toBeDefined();
    expect(screen.getByPlaceholderText(/CHOOSE OPERATOR HANDLE/i)).toBeDefined();
  });
});
