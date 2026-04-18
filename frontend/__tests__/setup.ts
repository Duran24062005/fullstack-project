import '@testing-library/jest-dom';
import { vi } from 'vitest';

export const routerReplaceMock = vi.fn();
export const routerPrefetchMock = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    replace: routerReplaceMock,
    push: vi.fn(),
    prefetch: routerPrefetchMock,
  }),
}));

// Mock Next.js Link component if necessary, although jsdom usually handles it
// Mocking intersection observer which is often missing in jsdom
global.IntersectionObserver = vi.fn().mockImplementation(function() {
  return {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
    root: null,
    rootMargin: '',
    thresholds: [],
    takeRecords: vi.fn(),
  };
});
