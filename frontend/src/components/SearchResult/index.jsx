import React, { useEffect, useState, useCallback } from "react";
import * as Styled from "./styles";

import { fetchUsers } from "../../services/serviceCrud";
import { TableResult } from "../TableResult";
import { FilterButtons } from "../FilterButtons";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineFilePdf, AiOutlinePrinter } from "react-icons/ai";
import { SiMicrosoftexcel } from "react-icons/si";

import usersPDF from "../../reports/users/users";
import { CSVLink } from "react-csv";
import { dataExcel, headers } from "../../reports/users/excel";

import ReactToPrint from "react-to-print";

import {
  filterName,
  filterLogin,
  filterCpf,
  filterStatus,
  maxDate,
  filterYearBorn,
  filterInsertUser,
  filterUpateUser,
  filterAge,
} from "../../utils/filtersFunc";

export const SearchResult = () => {
  const componentRef = React.useRef();
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectSearchUpateUser, setSelectSearchUpateUser] = useState(true);
  const [filterValueButton, setFilterValueButton] = useState("");
  const [usersPerPage] = useState(10);

  const getUsers = useCallback(async () => {
    if (users) {
      const response = await fetchUsers();
      setUsers(response);
    }
  }, []);

  useEffect(() => {
    getUsers();
    document.title = "Pesquisar usuário";
  }, [getUsers]);

  useEffect(() => {
    if (!selectSearchUpateUser) {
      setTimeout(() => {
        getUsers();
        setSelectSearchUpateUser(true);
      }, 3);
    }
  }, [getUsers, selectSearchUpateUser]);

  const filterNameResult = React.useMemo(() => {
    return filterName(users, search);
  }, [search, users]);

  const filterLoginResult = React.useMemo(() => {
    return filterLogin(users, search);
  }, [search, users]);

  const filterCpfResult = React.useMemo(() => {
    return filterCpf(users, search);
  }, [search, users]);

  const filterStatusResult = React.useMemo(() => {
    return filterStatus(users, search);
  }, [search, users]);

  const filterYearBronResult = React.useMemo(() => {
    return filterYearBorn(users, search);
  }, [search, users]);

  const filterInsertUsersResult = React.useMemo(() => {
    return filterInsertUser(users, search);
  }, [search, users]);

  const filterUpdateUsersResult = React.useMemo(() => {
    return filterUpateUser(users, search);
  }, [search, users]);

  const filterYearUserResult = React.useMemo(() => {
    return filterAge(users, search);
  }, [search, users]);

  const resultFilters = React.useMemo(() => {
    if (
      filterValueButton !== "Login" &&
      filterValueButton !== "Cpf" &&
      filterValueButton !== "Status" &&
      filterValueButton !== "YearBorn" &&
      filterValueButton !== "InsertUser" &&
      filterValueButton !== "YearUser" &&
      filterValueButton !== "UpdateUser"
    ) {
      return filterNameResult;
    }
    if (
      filterValueButton === "Login" &&
      filterValueButton !== "Cpf" &&
      filterValueButton !== "Status" &&
      filterValueButton !== "YearBorn" &&
      filterValueButton !== "InsertUser" &&
      filterValueButton !== "YearUser" &&
      filterValueButton !== "UpdateUser"
    ) {
      return filterLoginResult;
    }
    if (
      filterValueButton === "Cpf" &&
      filterValueButton !== "Login" &&
      filterValueButton !== "Status" &&
      filterValueButton !== "YearBorn" &&
      filterValueButton !== "InsertUser" &&
      filterValueButton !== "YearUser" &&
      filterValueButton !== "UpdateUser"
    ) {
      return filterCpfResult;
    }

    if (filterValueButton === "Status") {
      return filterStatusResult;
    }

    if (filterValueButton === "YearBorn") {
      return filterYearBronResult;
    }
    if (
      filterValueButton === "InsertUser" &&
      filterValueButton !== "YearBorn" &&
      filterValueButton !== "Status"
    ) {
      return filterInsertUsersResult;
    }
    if (filterValueButton === "UpdateUser") {
      return filterUpdateUsersResult;
    }
    if (filterValueButton === "YearUser") {
      return filterYearUserResult;
    }
    return null;
  }, [
    filterValueButton,
    filterNameResult,
    filterLoginResult,
    filterCpfResult,
    filterStatusResult,
    filterYearBronResult,
    filterInsertUsersResult,
    filterUpdateUsersResult,
    filterYearUserResult,
  ]);
  useEffect(() => {
    setCurrentPage(0);
  }, [usersPerPage]);

  useEffect(() => {}, [selectSearchUpateUser]);
  const handleFiltersValue = (value) => {
    setFilterValueButton(value);
  };

  return (
    <Styled.Container>
      <FilterButtons
        handleFilters={(value) => handleFiltersValue(value)}
        setCurrentPage={() => setCurrentPage(0)}
        setSearch={() => setSearch("")}
      />
      <Styled.WrapperTable>
        {search && resultFilters.length > 0 && (
          <Styled.WrapperExportButtons>
            <Styled.ButtonGenerate onClick={() => usersPDF(resultFilters)}>
              Gerar Pdf
              <AiOutlineFilePdf />
            </Styled.ButtonGenerate>
            <CSVLink data={dataExcel(resultFilters)} headers={headers}>
              <Styled.ButtonGenerate>
                Gerar Planilha Excel
                <SiMicrosoftexcel />
              </Styled.ButtonGenerate>
            </CSVLink>
            <ReactToPrint
              trigger={() => (
                <Styled.ButtonGenerate>
                  Imprimir
                  <AiOutlinePrinter />
                </Styled.ButtonGenerate>
              )}
              content={() => componentRef.current}
            />
          </Styled.WrapperExportButtons>
        )}
        <h1>Pesquisar.</h1>

        {filterValueButton === "Status" ||
          filterValueButton === "YearBorn" ||
          filterValueButton === "InsertUser" ||
          filterValueButton === "UpdateUser" ||
          filterValueButton === "YearUser" || (
            <Styled.WrapperInputText>
              <input
                type="text"
                placeholder={
                  filterValueButton === ""
                    ? "Digite o Nome"
                    : `Digite o ${filterValueButton}`
                }
                value={search}
                onChange={({ target }) => setSearch(target.value)}
              />
              <BiSearchAlt />
            </Styled.WrapperInputText>
          )}
        {filterValueButton === "Status" && (
          <Styled.WrapperInputText>
            <select
              onChange={({ target }) => {
                setCurrentPage(0);
                setSearch(target.value);
              }}
            >
              <option value="">Escolha o status</option>
              <option value="block">Bloqueado</option>
              <option value="inative">Inativo</option>
              <option value="active">Ativo</option>
            </select>
          </Styled.WrapperInputText>
        )}
        {filterValueButton === "YearUser" && (
          <Styled.WrapperInputText>
            <select
              onChange={({ target }) => {
                setCurrentPage(0);
                setSearch(target.value);
              }}
            >
              <option value="">Escolha a Idade</option>
              <option value="26">idade entre 18 e 26 anos</option>
              <option value="31">idade entre 25 e 31 anos</option>
              <option value="36">idade entre 30 e 36 anos</option>
              <option value="41">idade entre 35 e 41 anos</option>
              <option value="40">idade acima de 40 anos</option>
            </select>
          </Styled.WrapperInputText>
        )}
        {(filterValueButton === "YearBorn") |
        (filterValueButton === "InsertUser") |
        (filterValueButton === "UpdateUser") ? (
          <Styled.WrapperInputText>
            <input
              type="date"
              max={
                filterValueButton === "UpdateUser" ||
                filterValueButton === "InsertUser"
                  ? null
                  : maxDate()
              }
              value={search}
              onChange={({ target }) => {
                setCurrentPage(0);
                setSearch(target.value);
              }}
            />
          </Styled.WrapperInputText>
        ) : null}

        {search && selectSearchUpateUser && (
          <TableResult
            user={users}
            search={search}
            resultFilters={resultFilters}
            componentRef={componentRef}
            selectRefresh={selectSearchUpateUser}
            usersPerPage={usersPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            selectSearchUpateUser={selectSearchUpateUser}
            setSelectSearchUpateUser={setSelectSearchUpateUser}
          />
        )}
      </Styled.WrapperTable>
    </Styled.Container>
  );
};
