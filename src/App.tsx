import {Route, Routes} from "react-router-dom";
import SearchId from "./pages/search-id";
import Header from "./components/layouts/header";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path={'search:id'} element={<SearchId/>}/>
        <Route path={'/'} element={<SearchId/>}/>
      </Routes>
    </>
  );
}

export default App;