import React from "react";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

type Props = {
  rows: { name: string; value: string[] }[];
};

const NutritionTable = ({ rows }: Props) => {
  return (
    <TableContainer component={Paper} elevation={12}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead sx={{ bgcolor: "pink" }}>
          <TableRow>
            <TableCell align="center">
              <Typography>{rows[0].name}</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography>{rows[0].value}</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) =>
            index !== 0 ? (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  <Typography>{row.name}</Typography>
                </TableCell>
                <TableCell align="center">
                  {row.value.length > 1
                    ? row.value.map((info, index) => (
                        <Typography key={index}>{info}</Typography>
                      ))
                    : row.value}
                </TableCell>
              </TableRow>
            ) : null
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NutritionTable;
