const converter = require("excel4node");
const wb = new converter.Workbook();
const ws = wb.addWorksheet('Nome da planilha');

const data = [
    {
        "ID": "Teste",
        "Beneficiario": "01234567891",
        "Valor_a_receber": "500",
        "CodOrigem": "10",
        "InfAdicionais": "12345",
        "ModalidadePagamento": "92"
    },
    {
        "ID": "Teste",
        "Beneficiario": "00004567891",
        "Valor_a_receber": "700",
        "CodOrigem": "10",
        "InfAdicionais": "12367",
        "ModalidadePagamento": "92"
    }
];

const columnNames = [
    "ID",
    "Beneficiario",
    "Valor_a_receber",
    "CodOrigem",
    "InfAdicionais",
    "ModalidadePagamento"
]

let columnIndex = 1;
columnNames.forEach(heading => {
    ws.cell(1, columnIndex++).string(heading);
});

let rowIndex = 2;
data.forEach(record => {
    let columnIndex = 1;
    Object.keys(record).forEach(columnName => {
        ws.cell(rowIndex, columnIndex++).string(record[columnName])
    });
    rowIndex++
})

wb.write('teste.csv');