import { useEffect, useState } from "react";
import { ListMembers } from "./components/ListMembers";
import { useMembers } from "./hooks/useMembers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DetailPage } from "./detail";
import "./App.css";

function App() {
  const [search, setSearch] = useState("lemoncode");
  const { members, getMembers, error } = useMembers({ search });

  useEffect(() => {
    getMembers({ search });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getMembers({ search });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Lemoncode"
            value={search}
          />
          <button type="submit">Buscar Miembros</button>
        </form>
      </header>
      <main>
        {error && <div>{error.message}</div>}
        <Router>
          <Routes>
            <Route path="/" element={<ListMembers members={members} />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
