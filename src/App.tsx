

// import AppRoutes from "./routes/AppRoutes";

// const App = () => {
//   return <AppRoutes />;
// };

// export default App;

import {  Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Employees from "./pages/Employees";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import ProtectedRoute from "./routes/AppRoutes";

function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
          </Route>
        </Route>
      </Routes>
  );
}

export default App;

