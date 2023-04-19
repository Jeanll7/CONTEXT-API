import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
