import { BrowserRouter, Routes, Route } from "react-router-dom";
import Indez from "./pages/Indez.js";
import Create from "./pages/Create";
import View from "./pages/View.js";
import Store from "./store/Store.js";

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Indez />} />
          <Route path="/create" element={<Create />} />
          <Route path="view/:bookId" element={<View />} />
        </Routes>
      </BrowserRouter>
    </Store>
  );
}

export default App;

//03:03:00
