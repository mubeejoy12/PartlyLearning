import Child from "./components/Child";
import LoginStatus from "./components/LoginStatus";
import { AuthProvider } from "./contexts/AuthContext";
import ThemeContext, { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LoginStatus/>
      </AuthProvider>
      <Child />
    </ThemeProvider>
  );
}

export default App;
