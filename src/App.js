import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Outlet />
    </QueryClientProvider>
  );
}

export default App;
