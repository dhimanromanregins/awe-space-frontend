import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from '@/contexts/UserContext';
import App from '@/App';

// Test component to verify progressive disclosure
const TestProgressiveDisclosure = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });

  const renderWithProviders = (ui: React.ReactElement, initialEntries = ['/']) => {
    return render(
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <MemoryRouter initialEntries={initialEntries}>
            {ui}
          </MemoryRouter>
        </UserProvider>
      </QueryClientProvider>
    );
  };

  // Test 1: Can access public pages without completion
  const testPublicAccess = () => {
    renderWithProviders(<App />, ['/']);
    expect(screen.getByText(/Real estate,/i)).toBeInTheDocument();
  };

  // Test 2: Cannot access dashboard without consultation completion
  const testDashboardProtection = () => {
    renderWithProviders(<App />, ['/dashboard']);
    // Should redirect to intake since consultation not completed
    expect(screen.getByText(/Step 1 of 5/i)).toBeInTheDocument();
  };

  // Test 3: Cannot access decisions without consultation completion
  const testDecisionsProtection = () => {
    renderWithProviders(<App />, ['/decisions']);
    // Should redirect to intake since consultation not completed
    expect(screen.getByText(/Step 1 of 5/i)).toBeInTheDocument();
  };

  return {
    testPublicAccess,
    testDashboardProtection,
    testDecisionsProtection,
  };
};

export default TestProgressiveDisclosure;
