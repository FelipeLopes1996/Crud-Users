import React from "react";
import * as Styles from "./styles";

export const PaginationComponent = ({ pages, setCurrentPage, currentPage }) => {
  return (
    <>
      {/* <span>pagina {Number(currentPage) + 1}</span> */}
      <div>
        {Array.from(Array(pages), (item, index) => {
          return (
            <Styles.Button
              key={index}
              style={
                index === currentPage ? { backgroundColor: "#202c37" } : null
              }
              value={index}
              onClick={({ target }) => setCurrentPage(Number(target.value))}
            >
              {index + 1}
            </Styles.Button>
          );
        })}
      </div>
    </>
  );
};
