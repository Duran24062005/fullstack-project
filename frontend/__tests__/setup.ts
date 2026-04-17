import '@testing-library/jest-dom';
import { vi } from 'vitest';

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
