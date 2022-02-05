import React from "react";
import * as Styled from "./styles";

export const Modal = ({ message, confirmDelete, children }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const id = "";

  const handleConfirm = async () => {
    if (!id) {
      setOpenModal(false);
    }
    await confirmDelete();
  };
  return (
    <>
      <Styled.Wrapper>
        <Styled.A onClick={() => setOpenModal(true)}>{children}</Styled.A>
        <div className={openModal ? "open" : "close"}>
          <div className="show">
            <div>
              <span>{message}</span>
            </div>
            <Styled.WrapperButton>
              <button onClick={handleConfirm}>Sim</button>
              <button onClick={() => setOpenModal(false)}>Não</button>
            </Styled.WrapperButton>
          </div>
        </div>
      </Styled.Wrapper>
    </>
  );
};
