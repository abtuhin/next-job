import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/pages'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/config/styles';
import useGetJobs from '@/hooks/useGetJobs';

const queryClient = new QueryClient();
const component = <QueryClientProvider client={queryClient}>
<ThemeProvider theme={theme}>
  <Home />
</ThemeProvider>
</QueryClientProvider>

describe('Home', () => {
  it('renders without error', () => {
    render(component);
  });
  
})