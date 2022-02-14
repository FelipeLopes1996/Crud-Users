import React, { useState, useEffect } from "react";

import * as Styled from "./styles";
import { BsArrowRightShort } from "react-icons/bs";

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
  const [selectSearchYearUser, setSelectSearchYearUser] = useState(value);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (value) => {
    handleFilters(value);
  };

  useEffect(() => {
    setSelectSearchNome("Nome");
  }, []);

  return (
    <>
      <Styled.OpenAsside Open={isOpen} onClick={() => setIsOpen(true)}>
        Filtros
        <BsArrowRightShort size={20} />
      </Styled.OpenAsside>
      <Styled.WrapperFilters Open={isOpen}>
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
            setSelectSearchYearUser("");
            setCurrentPage(0);
            setSearch("");
            setIsOpen(false);
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
            setSelectSearchYearUser("");
            setCurrentPage(0);
            setSearch("");
            setIsOpen(false);
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
            setSelectSearchYearUser("");
            setCurrentPage(0);
            setSearch("");
            setIsOpen(false);
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
            setSelectSearchYearUser("");
            setCurrentPage(0);
            setSearch("");
            setIsOpen(false);
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
            setSelectSearchYearUser("");
            setCurrentPage(0);
            setSearch("");
            setIsOpen(false);
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
            setSelectSearchYearUser("");
            setCurrentPage(0);
            setSearch("");
            setIsOpen(false);
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
            setSelectSearchYearUser("");
            setCurrentPage(0);
            setSearch("");
            setIsOpen(false);
          }}
        >
          data de atualização
        </button>
        <button
          className={selectSearchYearUser ? "active" : "inative"}
          value={selectSearchYearUser}
          onClick={() => {
            handleClick("YearUser");
            setSelectSearchYearUser("YearUser");
            setSelectSearchUpdateUser("");
            setSelectSearchInsertUser("");
            setSelectSearchNome("");
            setSelectSearchYearBorn("");
            setSelectSearchStatus("");
            setSelectSearchCpf("");
            setSelectSearchLogin("");
            setCurrentPage(0);
            setSearch("");
            setIsOpen(false);
          }}
        >
          Filtrar por Idade
        </button>
        <button className={!isOpen && "hide"} onClick={() => setIsOpen(false)}>
          Voltar
        </button>
      </Styled.WrapperFilters>
    </>
  );
};
