import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

function usersPDF(users) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const reportTitle = [
    {
      text: " Usuários",
      fontSize: 15,
      bold: true,
      margin: [15, 20, 0, 45],
    },
  ];

  const data = users.map((user, i) => {
    return [
      { text: user.name, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: user.cpf, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: user.login, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: user.status, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: user.birthday, fontSize: 9, margin: [0, 2, 0, 2] },
    ];
  });

  const details = [
    {
      table: {
        headerRows: 1,
        widths: ["*", "*", "*", "*", "*"],
        body: [
          [
            { text: "Nome", style: "tableHeader", fontSize: 10 },
            { text: "Cpf", style: "tableHeader", fontSize: 10 },
            { text: "Login", style: "tableHeader", fontSize: 10 },
            { text: "Status", style: "tableHeader", fontSize: 10 },
            { text: "Data de nacimento", style: "tableHeader", fontSize: 10 },
          ],
          ...data,
        ],
      },
      layout: "lightHorizontalLines", //headerLineOnly
    },
  ];

  function rodape(currentPage, pageCount) {
    return [
      {
        text: currentPage + " / " + pageCount,
        alignment: "right",
        fontSize: 9,
        margin: [0, 10, 20, 0],
      },
    ];
  }

  const docDefinitions = {
    pageSize: "A4",
    pageMargins: [15, 50, 15, 40],
    header: [reportTitle],
    content: [details],
    footer: rodape,
  };

  pdfMake.createPdf(docDefinitions).download();
}

export default usersPDF;
