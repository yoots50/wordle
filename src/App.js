import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { SocketProvider } from "./context/SocketProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SocketProvider>
        <Navbar />
        <Outlet />
      </SocketProvider>
    </QueryClientProvider>
  );
}

export default App;
