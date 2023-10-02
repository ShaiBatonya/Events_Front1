import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Main from "./pages/private/Main";
import AddNote from "./pages/private/AddNote";
import EditNote from "./pages/private/EditNote.jsx";
import Login from "./pages/public/Login";
import PrivateRoutes from "./utils/PrivateRoutes";
import Home from "./pages/public/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route index element={<Home />} />

      <Route element={<PrivateRoutes />}>
        <Route path="main" index element={<Main />}  />
        <Route path="add" element={<AddNote />} />
        <Route path="main/edit/:id" element={<EditNote />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
