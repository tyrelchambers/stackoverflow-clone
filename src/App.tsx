import {
  Link,
  MakeGenerics,
  Outlet,
  ReactLocation,
  Router,
  useMatch,
} from "@tanstack/react-location";
import { QueryClient, QueryClientProvider } from "react-query";
import { routes } from "./routes.routes";

function App() {
  const location = new ReactLocation();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router location={location} routes={routes} />
    </QueryClientProvider>
  );
}

export default App;
