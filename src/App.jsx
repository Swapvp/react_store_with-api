import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  const { search, pathname } = useLocation();

  return (
    <>
  

      <Home />
    </>
  );
}

export default App;
