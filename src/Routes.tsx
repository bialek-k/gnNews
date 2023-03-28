import { Routes, Route } from "react-router-dom";
import { Main } from "./components/@main/Main";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Main />} />
        <Route path="/country/:country" element={<Main />} />
      </Route>
    </Routes>
  );
};
