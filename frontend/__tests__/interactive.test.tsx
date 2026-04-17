import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, describe, vi } from 'vitest';
import CartPage from '../app/cart/page';
import WishlistPage from '../app/wishlist/page';
import ProfilePage from '../app/profile/page';
import ProductDetailPage from '../app/product/[id]/page';

describe('Interactive Modules', () => {
  test('CartPage handles item removal and price updates', () => {
    render(<CartPage />);
    const initialPrice = screen.getByText(/97,650.00/i); // 12450 + 85200 = 97650
    expect(initialPrice).toBeDefined();

    // Find and click 'Purge' on the first item
    const purgeButtons = screen.getAllByText(/Purge/i);
    fireEvent.click(purgeButtons[0]);

    // Check if price updated (now should only be Flux Core 85200 + surcharge 1420 = 86620)
    expect(screen.getByText(/86,620.00/i)).toBeDefined();
  });

  test('WishlistPage handles item removal', () => {
    render(<WishlistPage />);
    const initialItemsCount = screen.getAllByText(/Remove/i).length;
    
    // Click remove on first item
    const removeButtons = screen.getAllByText(/Remove/i);
    fireEvent.click(removeButtons[0]);
    
    expect(screen.getAllByText(/Remove/i).length).toBe(initialItemsCount - 1);
  });

  test('ProfilePage displays timer and handles refresh', () => {
    render(<ProfilePage />);
    expect(screen.getByText(/Auth Token Exp/i)).toBeDefined();
    
    const refreshButton = screen.getByText(/Refresh Terminal/i);
    fireEvent.click(refreshButton);
    // Refreshing resets time to 14:58:43 which is roughly 53923 seconds
    expect(screen.getByText(/53923/i)).toBeDefined();
  });

  test('ProductDetailPage handles image gallery switching', () => {
    // Mock params for dynamic route
    const params = { id: 'test-drone' };
    render(<ProductDetailPage params={params} />);
    
    const mainImg = screen.getByAltText("Sentinel Drone") as HTMLImageElement;
    const initialSrc = mainImg.src;

    // Get thumbnails (skip the first one as it is the main one)
    // Actually our code uses .slice(1) for the small thumbs
    const thumbnails = screen.getAllByRole('img').filter(img => img !== mainImg);
    
    // Click on a thumbnail
    fireEvent.click(thumbnails[0].parentElement!); // The parent div has the onClick
    
    expect(mainImg.src).not.toBe(initialSrc);
  });
});
