import {
  Paragraph,
  Document,
  Packer,
  Table,
  TableRow,
  TableCell,
  HeadingLevel,
  TextRun,
  WidthType,
} from "docx";
import { saveAs } from "file-saver";

export const headers = [
  "Nome",
  "Login",
  "Email",
  "Cpf",
  "Telefone",
  "Status",
  "Data de nascimento",
];

export const generate = (data = []) => {
  const table = new Table({
    columnWidths: [2000, 2000, 2000, 2000],
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: {
              size: 3505,
              type: WidthType.DXA,
            },
            children: [new Paragraph("Nome")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph("Login")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph("Cpf")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph("Status")],
          }),
        ],
      }),

      new TableRow({
        children: [
          // headers.map((v) => {
          new TableCell({
            children: [new Paragraph("oi")],
          }),
          // }),
        ],
      }),
    ],
  });

  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            text: "Usuários",
            width: {
              size: 3505,
              type: WidthType.DXA,
            },
          }),
          table,
          new Paragraph({
            text: "foi",
          }),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "example.docx");
  });
};
