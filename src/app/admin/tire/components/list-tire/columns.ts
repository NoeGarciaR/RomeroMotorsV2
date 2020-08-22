export const COLUMNS_DEFS = [
  {
    headerName: "Opciones",
    field: "_id",
    width: 100,
    headerComponentParams: { width: 100 },
    cellRenderer: "optionsRenderer"
  },

  {
    headerName: "ID",
    field: "sid",
    sortable: true,
    filter: true,
    width: 90,
    headerComponentParams: { width: 90 }
  },
  {
    headerName: "Descripcion",
    field: "description",
    filter: true,
    resizable: true
  },
  { headerName: "Marca", field: "manufacturer", filter: true, resizable: true },
  {
    headerName: "Tipo de Vehiculo",
    field: "vehicleType",
    sortable: true,
    resizable: true,
    filter: true
  },
  {
    headerName: "Stock",
    field: "stock",
    sortable: true,
    filter: true,
    width: 90,
    headerComponentParams: { width: 90 }
  },

  {
    headerName: "Ancho",
    field: "width",
    sortable: true,
    filter: true,
    width: 90,
    headerComponentParams: { width: 90 }
  },
  {
    headerName: "Perfil",
    field: "ratio",
    sortable: true,
    filter: true,
    width: 90,
    headerComponentParams: { width: 90 }
  },
  {
    headerName: "Aro",
    field: "diameter",
    sortable: true,
    filter: true,
    width: 90,
    headerComponentParams: { width: 90 }
  },
  {
    headerName: "Precio Regular",
    field: "regCost",
    sortable: true,
    filter: true,
    resizable: true,
    width: 90,
    headerComponentParams: { width: 90 }
  },
  {
    headerName: "Descuento",
    field: "discount",
    sortable: true,
    filter: true,
    resizable: true,
    width: 90,
    headerComponentParams: { width: 90 }
  },
  {
    headerName: "Precio Final",
    field: "finalCost",
    sortable: true,
    filter: true,
    resizable: true,
    width: 90,
    headerComponentParams: { width: 90 }
  }
];
