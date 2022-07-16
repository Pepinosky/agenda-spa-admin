import axios from "axios";

import React, { useEffect, useMemo, useState } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import Button from "../../../common/Button";
import { GlobalFilter } from "./globalFilter";

export function Reservations(props) {
  const [reservations, setReservations] = useState([]);

  const fetchReservations = async () => {
    const response = await axios
      .get("https://app-apirest2.herokuapp.com/reserva")
      .catch((err) => console.log(err));

    if (response) {
      const reservations = response.data.items.docs;

      console.log("Reservations: ", reservations);
      setReservations(reservations);
    }
  };
  const handleClick = async (_id) => {
    axios
      .delete(`https://app-apirest2.herokuapp.com/ReservaCreada/${_id}`)

      .then((response) => {
        console.log("Delete successful", { response });
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const reservationsData = useMemo(() => [...reservations], [reservations]);

  const reservationsColumns = useMemo(
    () =>
      reservations[0]
        ? Object.keys(reservations[0])
            .filter(
              (key) =>
                key !== "createdAt" && key !== "updatedAt" && key !== "id"
            )
            .map((key) => {
              if (key === "_id") {
                return { Header: "id", accessor: key };
              }
              return { Header: key, accessor: key };
            })
        : [],
    [reservations]
  );

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "",
        Header: "",
        Cell: ({ row }) => (
          <Button
            onClick={() => handleClick(row.values._id)}
            text={"eliminar"}
            type={"button"}
          />
          // <button onClick={handleClick(row.values.id)} type="button">
          //   {" "}
          //   Eliminar
          // </button>
        ),
      },
    ]);
  };

  const tableInstance = useTable(
    {
      columns: reservationsColumns,
      data: reservationsData,
    },
    useGlobalFilter,
    tableHooks,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableInstance;

  useEffect(() => {
    fetchReservations();
  }, []);

  const isEven = (idx) => idx % 2 === 0;

  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        globalFilter={state.globalFilter}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, idx) => {
            prepareRow(row);

            return (
              <tr
                {...row.getRowProps()}
                className={isEven(idx) ? "bg-green-400 bg-opacity-30" : ""}
              >
                {row.cells.map((cell, idx) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
