import { ListMembers } from "./components/ListMembers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DetailPage } from "./detail";
import "./App.css";

function App() {
  return (
    <div>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<ListMembers />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
