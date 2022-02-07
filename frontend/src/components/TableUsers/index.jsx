import React, { useEffect, useState, useCallback } from "react";
import * as Styled from "./styles";
import { CSVLink } from "react-csv";

import { regex } from "../../utils/regex";
import ReactToPrint from "react-to-print";

import { fetchUsers, fetchDestroyer } from "../../services/serviceCrud";
import { BsTrash } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineFilePdf } from "react-icons/ai";
import { SiMicrosoftexcel } from "react-icons/si";
import { AiOutlinePrinter } from "react-icons/ai";

import { PaginationComponent } from "../PaginationComponent";
import { Modal } from "../Modal";
import usersPDF from "../../reports/users/users";
import { dataExcel, headers } from "../../reports/users/excel";

export const TableUsers = () => {
  const componentRef = React.useRef();
  const [users, setUsers] = useState([]);
  const [usersPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(users.length / usersPerPage);
  const startIndex = currentPage * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = users.slice(startIndex, endIndex);

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
    setCurrentPage(0);
  }, [usersPerPage]);

  const removeLineById = (id) => {
    const _user = users.filter((user) => user.id !== id);
    setUsers(_user);
    return fetchDestroyer(id);
  };

  return (
    <Styled.WrapperTable>
      <Styled.WrapperExportButtons>
        <Styled.ButtonGenerate onClick={() => usersPDF(users)}>
          Gerar Pdf
          <AiOutlineFilePdf />
        </Styled.ButtonGenerate>
        <CSVLink data={dataExcel(users)} headers={headers}>
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
      <div>
        <Styled.TableContainer ref={componentRef}>
          <Styled.TableHeader>
            <Styled.Tr>
              <Styled.Th>Nome</Styled.Th>
              <Styled.Th>Cpf</Styled.Th>
              <Styled.Th>Login</Styled.Th>
              <Styled.Th>Status</Styled.Th>
              <Styled.Th>Action</Styled.Th>
            </Styled.Tr>
          </Styled.TableHeader>
          <Styled.TableBody>
            {currentUsers.map((user, index) => (
              <Styled.Tr key={index}>
                <Styled.Td>{user.name}</Styled.Td>
                <Styled.Td>{regex.maskCpf(user.cpf)}</Styled.Td>
                <Styled.Td>{user.login}</Styled.Td>
                <Styled.Td>{regex.validStatus(user.status)}</Styled.Td>
                <Styled.Td>
                  <Styled.Actions>
                    <Styled.Link to={`users/edit/${user.id}`}>
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

        <PaginationComponent
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </Styled.WrapperTable>
  );
};
