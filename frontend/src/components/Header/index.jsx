import React from "react";
import * as Styled from "./styles";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { AiFillHome } from "react-icons/ai";

const Header = () => {
  const [auth, setAuth] = React.useContext(AuthContext);
  const navigate = useNavigate();

  const { profile } = auth;

  const handleLogout = () => {
    setAuth({ ...auth, isAuth: false, profile: {} });
    navigate("/");
  };
  return (
    <Styled.Header>
      <span>
        <AiFillHome onClick={() => navigate("/dash")} />
        Olá, seja bem vindo {profile.name.toUpperCase()} !
      </span>
      <div>
        <button onClick={() => navigate("/dash/search-user")}>
          Pesquisar usuário
        </button>
        <button onClick={() => handleLogout()}>Sair</button>
      </div>
    </Styled.Header>
  );
};

export default Header;
