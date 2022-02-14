import React, { useEffect, useState } from "react";
import * as Styled from "./styles";

import { fetchDestroyer, fetchStatusUpdate } from "../../services/serviceCrud";
import { PaginationComponent } from "../PaginationComponent";
import { Modal } from "../Modal";

import { BsTrash } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import { regex } from "../../utils/regex";

export const TableResult = ({
  search,
  resultFilters = [],
  componentRef,
  user = [],
  selectRefresh = true,
  currentPage,
  usersPerPage,
  setCurrentPage,
  selectSearchUpateUser,
  setSelectSearchUpateUser,
}) => {
  const pages = Math.ceil(resultFilters?.length / usersPerPage);
  const startIndex = currentPage * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = resultFilters?.slice(startIndex, endIndex);

  useEffect(() => {}, [selectRefresh]);
  const removeLineById = (id) => {
    setSelectSearchUpateUser(false);
    return fetchDestroyer(id);
  };

  const removeAllList = () => {
    setSelectSearchUpateUser(false);

    for (let user of resultFilters) {
      fetchDestroyer(user.id);
    }
  };

  return (
    <Styled.WrapperTable>
      {" "}
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
      {search && resultFilters.length === 0 && (
        <span>nenhum usuário encontrado </span>
      )}
      <div className="scroll">
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
                        setSelectSearchUpateUser(false);
                        fetchStatusUpdate(user.id, {
                          status: target.value,
                        });
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
                        <MdOutlineEdit size={20} />
                      </Styled.Link>
                      <Modal
                        message={"Deseja Realmente excluir?"}
                        confirmDelete={() => {
                          removeLineById(user.id);
                          setSelectSearchUpateUser(false);
                        }}
                      >
                        <Styled.BtnDestroy>
                          <BsTrash size={20} />
                        </Styled.BtnDestroy>
                      </Modal>
                    </Styled.Actions>
                  </Styled.Td>
                </Styled.Tr>
              ))}
          </Styled.TableBody>
        </Styled.TableContainer>
      </div>
      {search && resultFilters.length > 0 && (
        <Modal
          message={"Deseja deletar usuários listados?"}
          confirmDelete={() => removeAllList()}
        >
          <button className="btn-delete-all">Excluir todos</button>
        </Modal>
      )}
    </Styled.WrapperTable>
  );
};
