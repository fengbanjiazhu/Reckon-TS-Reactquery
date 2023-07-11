import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Summary from "./component/Summary";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 2000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Summary></Summary>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
