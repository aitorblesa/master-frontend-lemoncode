import { ListPage, DetailPage } from "@/scenes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { switchRoutes } from "./routes";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<ListPage />} />
        <Route path={switchRoutes.detail} element={<DetailPage />} />
      </Routes>
    </Router>
  );
};
