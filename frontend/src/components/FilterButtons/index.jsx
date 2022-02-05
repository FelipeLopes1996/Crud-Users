import React, { useState, useEffect } from "react";

import * as Styled from "./styles";

export const FilterButtons = ({
  value = "",
  setCurrentPage,
  setSearch,
  handleFilters,
}) => {
  const [selectSearchNome, setSelectSearchNome] = useState(value);
  const [selectSearchLogin, setSelectSearchLogin] = useState(value);
  const [selectSearchCpf, setSelectSearchCpf] = useState(value);
  const [selectSearchStatus, setSelectSearchStatus] = useState(value);
  const [selectSearchYearBorn, setSelectSearchYearBorn] = useState(value);
  const [selectSearchInsertUser, setSelectSearchInsertUser] = useState(value);
  const [selectSearchUpdateUser, setSelectSearchUpdateUser] = useState(value);

  const handleClick = (value) => {
    handleFilters(value);
  };

  useEffect(() => {
    setSelectSearchNome("Nome");
  }, []);

  return (
    <>
      <Styled.WrapperFilters>
        <h1>Filtros</h1>
        <button
          className={selectSearchNome ? "active" : "inative"}
          onClick={() => {
            handleClick("Nome");
            setSelectSearchNome("Nome");
            setSelectSearchUpdateUser("");
            setSelectSearchLogin("");
            setSelectSearchCpf("");
            setSelectSearchStatus("");
            setSelectSearchYearBorn("");
            setSelectSearchInsertUser("");
            setCurrentPage(0);
            setSearch("");
          }}
        >
          Nome
        </button>
        <button
          className={selectSearchLogin ? "active" : "inative"}
          value={selectSearchLogin}
          onClick={() => {
            handleClick("Login");
            setSelectSearchLogin("Login");
            setSelectSearchUpdateUser("");
            setSelectSearchNome("");
            setSelectSearchCpf("");
            setSelectSearchStatus("");
            setSelectSearchYearBorn("");
            setSelectSearchInsertUser("");
            setCurrentPage(0);
            setSearch("");
          }}
        >
          Login
        </button>
        <button
          className={selectSearchCpf ? "active" : "inative"}
          value={selectSearchCpf}
          onClick={() => {
            handleClick("Cpf");
            setSelectSearchCpf("Cpf");
            setSelectSearchUpdateUser("");
            setSelectSearchNome("");
            setSelectSearchLogin("");
            setSelectSearchStatus("");
            setSelectSearchYearBorn("");
            setSelectSearchInsertUser("");
            setCurrentPage(0);
            setSearch("");
          }}
        >
          Cpf
        </button>
        <button
          className={selectSearchStatus ? "active" : "inative"}
          value={selectSearchStatus}
          onClick={() => {
            handleClick("Status");
            setSelectSearchStatus("Status");
            setSelectSearchUpdateUser("");
            setSelectSearchNome("");
            setSelectSearchCpf("");
            setSelectSearchLogin("");
            setSelectSearchYearBorn("");
            setSelectSearchInsertUser("");
            setCurrentPage(0);
            setSearch("");
          }}
        >
          Status
        </button>
        <button
          className={selectSearchYearBorn ? "active" : "inative"}
          value={selectSearchYearBorn}
          onClick={() => {
            handleClick("YearBorn");
            setSelectSearchYearBorn("YearBorn");
            setSelectSearchUpdateUser("");
            setSelectSearchNome("");
            setSelectSearchStatus("");
            setSelectSearchCpf("");
            setSelectSearchLogin("");
            setSelectSearchInsertUser("");
            setCurrentPage(0);
            setSearch("");
          }}
        >
          Data de nascimento
        </button>
        <button
          className={selectSearchInsertUser ? "active" : "inative"}
          value={selectSearchInsertUser}
          onClick={() => {
            handleClick("InsertUser");
            setSelectSearchInsertUser("InsertUser");
            setSelectSearchUpdateUser("");
            setSelectSearchNome("");
            setSelectSearchYearBorn("");
            setSelectSearchStatus("");
            setSelectSearchCpf("");
            setSelectSearchLogin("");
            setCurrentPage(0);
            setSearch("");
          }}
        >
          Data inserção
        </button>
        <button
          className={selectSearchUpdateUser ? "active" : "inative"}
          value={selectSearchUpdateUser}
          onClick={() => {
            handleClick("UpdateUser");
            setSelectSearchUpdateUser("UpdateUser");
            setSelectSearchInsertUser("");
            setSelectSearchNome("");
            setSelectSearchYearBorn("");
            setSelectSearchStatus("");
            setSelectSearchCpf("");
            setSelectSearchLogin("");
            setCurrentPage(0);
            setSearch("");
          }}
        >
          Data Update
        </button>
      </Styled.WrapperFilters>
    </>
  );
};
