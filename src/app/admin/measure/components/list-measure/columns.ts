export const COLUMNS_DEFS = [
  {
    headerName: "Opciones",
    field: "_id",
    width: 100,
    headerComponentParams: { width: 100 },
    cellRenderer: "optionsRenderer"
  },

  {
    headerName: "Ancho",
    field: "width",
    sortable: true,
    filter: true,
    resizable: true,
    width: 100,
    headerComponentParams: { width: 100 }
  },
  {
    headerName: "Perfil",
    field: "ratio",
    sortable: true,
    filter: true,
    resizable: true,
    width: 100,
    headerComponentParams: { width: 100 }
  },
  {
    headerName: "Aro",
    field: "diameter",
    sortable: true,
    filter: true,
    resizable: true,
    width: 100,
    headerComponentParams: { width: 100 }
  }
];
