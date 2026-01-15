import React from "react";
import { ReactTabulator } from "react-tabulator";
import "tabulator-tables/dist/css/tabulator.min.css";

const BasicTable = () => {
  const data = [
    { id: 1, name: "Neha", age: 22 },
    { id: 2, name: "Amit", age: 25 },
  ];

  const columns = [
    { title: "ID", field: "id", width: 80 },
    { title: "Name", field: "name" },
    { title: "Age", field: "age", hozAlign: "center" },
  ];

  return (
    <ReactTabulator
      data={data} 
      columns={columns} 
      layout="fitColumns" 
    />
  );
};

export default BasicTable;
