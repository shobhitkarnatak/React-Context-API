import "./App.css";
import Home from "./hooks/ContextAPI/Home";
import { BioProvider } from "./hooks/ContextAPI";

interface Bio {
  name: string;
  age: number;
}

function App() {
  const bio: Bio = { name: "Shobhit Karnatak", age: 32 };

  return (
    <BioProvider bio={bio}>
    <Home/>
    </BioProvider>
);
}

export default App;
