import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

import CustomerDashboard
  from "./pages/customer/CustomerDashboard";

import EmployeeDashboard
  from "./pages/employee/EmployeeDashboard";

import ManagerDashboard
  from "./pages/manager/ManagerDashboard";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public */}
        <Route
          path="/"
          element={<Login />}
        />


        {/* Customer */}
        <Route
          path="/customer"
          element={
            <ProtectedRoute allowedRole="customer">
              <CustomerDashboard />
            </ProtectedRoute>
          }
        />


        {/* Employee */}
        <Route
          path="/employee"
          element={
            <ProtectedRoute allowedRole="employee">
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />


        {/* Manager */}
        <Route
          path="/manager"
          element={
            <ProtectedRoute allowedRole="manager">
              <ManagerDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;