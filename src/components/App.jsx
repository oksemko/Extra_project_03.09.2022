import { Route, Routes, Navigate } from "react-router-dom"
import { Layout } from "./layout/Layout";
import { AddContactPage } from "./AddContactPage/AddContactPage";
import { HomePage } from "./HomePage/HomePage";
export const App = () => {
  return (
      <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path="/add" element={<AddContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
  );
};
