import React, { useEffect, useState, useCallback } from "react";
import * as Styled from "./styles";

import {
  fetchUsers,
  fetchDestroyer,
  fetchStatusUpdate,
} from "../../services/serviceCrud";
import { PaginationComponent } from "../PaginationComponent";
import { Modal } from "../Modal";
import { FilterButtons } from "../FilterButtons";

import { BsTrash } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineFilePdf, AiOutlinePrinter } from "react-icons/ai";
import { SiMicrosoftexcel } from "react-icons/si";

import usersPDF from "../../reports/users/users";
import { CSVLink } from "react-csv";

import { regex } from "../../utils/regex";
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
} from "../../utils/filtersFunc";

export const TableSearchResult = () => {
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

  const resultFilters = React.useMemo(() => {
    if (
      filterValueButton !== "Login" &&
      filterValueButton !== "Cpf" &&
      filterValueButton !== "Status" &&
      filterValueButton !== "YearBorn" &&
      filterValueButton !== "InsertUser" &&
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
  ]);

  const pages = Math.ceil(resultFilters?.length / usersPerPage);
  const startIndex = currentPage * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = resultFilters?.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(0);
  }, [usersPerPage]);

  useEffect(() => {}, [selectSearchUpateUser]);

  const removeLineById = (id) => {
    const _user = users.filter((user) => user.id !== id);
    setUsers(_user);
    return fetchDestroyer(id);
  };

  const handleFiltersValue = (value) => {
    setFilterValueButton(value);
  };

  const removeAllList = () => {
    setSelectSearchUpateUser(false);

    for (let user of resultFilters) {
      fetchDestroyer(user.id);
    }
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
          filterValueButton === "UpdateUser" || (
            <Styled.WrapperInputText>
              <input
                type="text"
                placeholder="Pesquise aqui"
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
        {search && (
          <PaginationComponent
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        )}

        {search && resultFilters?.length > 0 && (
          <div className="users-found">
            <span>
              {resultFilters?.length}
              {resultFilters.length === 1 ? " Usuário" : " Usuários"}{" "}
            </span>
          </div>
        )}
        {search && currentUsers.length === 0 && (
          <span>nenhum usuário encontrado </span>
        )}
        {search && selectSearchUpateUser && (
          <Styled.TableContainer ref={componentRef}>
            {resultFilters?.length ? (
              <Styled.TableHeader>
                <Styled.Tr>
                  <Styled.Th>Nome</Styled.Th>
                  <Styled.Th>Cpf</Styled.Th>
                  <Styled.Th>Login</Styled.Th>
                  <Styled.Th>status</Styled.Th>
                  <Styled.Th>Ano</Styled.Th>
                  <Styled.Th>Action</Styled.Th>
                </Styled.Tr>
              </Styled.TableHeader>
            ) : null}
            <Styled.TableBody>
              {currentUsers &&
                currentUsers.map((user, index) => (
                  <Styled.Tr key={index}>
                    <Styled.Td>{user.name}</Styled.Td>
                    <Styled.Td>{regex.maskCpf(user.cpf)}</Styled.Td>
                    <Styled.Td>{user.login}</Styled.Td>
                    <Styled.Td>
                      {" "}
                      <select
                        value={user.status}
                        onChange={({ target }) => {
                          fetchStatusUpdate(user.id, {
                            status: target.value,
                          });
                          setSelectSearchUpateUser(false);
                          setTimeout(() => {
                            setSelectSearchUpateUser(true);
                          }, 1);
                        }}
                      >
                        <option value="block">Bloqueado</option>
                        <option value="inative">Inativo</option>
                        <option value="active">Ativo</option>
                      </select>
                    </Styled.Td>
                    <Styled.Td>{user.birthday}</Styled.Td>
                    <Styled.Td>
                      <Styled.Actions>
                        <Styled.Link to={`/dash/users/edit/${user.id}`}>
                          <MdOutlineEdit />
                        </Styled.Link>
                        <Modal
                          message={"Deseja Realmente excluir?"}
                          confirmDelete={() => removeLineById(user.id)}
                        >
                          <Styled.BtnDestroy>
                            <BsTrash />
                          </Styled.BtnDestroy>
                        </Modal>
                      </Styled.Actions>
                    </Styled.Td>
                  </Styled.Tr>
                ))}
            </Styled.TableBody>
          </Styled.TableContainer>
        )}
        {search && resultFilters.length > 0 && (
          <Modal
            message={"Deseja deletar usuários listados?"}
            confirmDelete={() => removeAllList()}
          >
            <button className="btn-delete-all">Excluir todos</button>
          </Modal>
        )}
      </Styled.WrapperTable>
    </Styled.Container>
  );
};
