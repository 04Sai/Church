import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Account";
import Profile from "./pages/student/Profile";
import Grades from "./pages/student/Grades";
import Subjects from "./pages/student/Subjects";
import Balance from "./pages/student/Balance";
import AccountSettings from "./pages/student/AccountSettings";
import Registration from "./pages/student/Registration";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="profile" element={<Profile />} />
      <Route path="grades" element={<Grades />} />
      <Route path="subjects" element={<Subjects />} />
      <Route path="balance" element={<Balance />} />
      <Route path="account" element={<AccountSettings />} />
      <Route path="registration" element={<Registration />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
