import { BrowserRouter} from "react-router-dom";
import { Approutes } from "./pages/app-routes.tsx";

function App() {
  return (
    <BrowserRouter>
      <Approutes />
    </BrowserRouter>
  );
}

export default App
