import { ReactTabulator } from "react-tabulator";
import "tabulator-tables/dist/css/tabulator.min.css";
import React, { useRef } from "react";
import * as XLSX from "xlsx";

const BasicTable = () => {
  const data = [
    { id: 1, name: "Neha", age: 22 },
    { id: 2, name: "Gupta", age: 25 },
    { id: 3, name: "sann", age: 24 },
  ];

 

  const columns = [
    { title: "ID", field: "id", width: 80, headerFilter: "input" },
    { title: "Name", field: "name", headerFilter: "input" },
    { title: "Age", field: "age", headerFilter: "input" },
  ];

  const downloadXLSX = (data, filename) => {
    if (!data || data.length === 0) {
      console.warn("No data available for download");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${filename}.xlsx`);
  };

  return (
    <div className="min-h-screen pt-20">
     
      <button
        onClick={() => downloadXLSX(data, "custom_data")}
        style={{ marginBottom: 10, marginLeft: 10, padding: "6px 10px", border: "1px solid #333" }}
      >
        Download Custom Excel
      </button>

      <ReactTabulator
        data={data}
        columns={columns}
        layout="fitColumns"
        pagination="local"
        paginationSize={2}
options={{
  movableRows: true,
  movableColumns: true,
}}
      />
    </div>
  );
};

export default BasicTable;
