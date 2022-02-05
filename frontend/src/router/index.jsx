import { Route, Routes } from "react-router-dom";
import { Home } from "../templates/Home";
import { Login } from "../templates/Login";
import { Create } from "../templates/Create";
import { Recovery } from "../templates/Recovery";
import { NotFound } from "../templates/NotFound";

import { Dash } from "../templates/Dash";
import { UpdateUser } from "../templates/UpdateUser";
import { SearchUser } from "../templates/SearchUser";
import PrivateRoute from "./Private";

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<Create />} />
      <Route path="recovery-password" element={<Recovery />} />
      <Route path="*" element={<NotFound />} />

      <Route path="/dash" element={<PrivateRoute Component={Dash} />} />
      <Route
        exact
        path="/dash/users/edit/:id"
        element={<PrivateRoute Component={UpdateUser} />}
      />
      <Route
        exact
        path="/dash/search-user"
        element={<PrivateRoute Component={SearchUser} />}
      />
    </Routes>
  );
};
