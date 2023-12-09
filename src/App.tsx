import {useEffect} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import SearchId from "./pages/search-id";
import Header from "./components/layouts/header";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/search?q=digikala&type=repositories');
  }, []);

  return (
    <>
      <Header/>
      <Routes>
        <Route path={'search:id'} element={<SearchId/>}/>
        <Route path={'search'} element={<SearchId/>}/>
      </Routes>
    </>
  );
}

export default App;