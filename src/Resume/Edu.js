import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function createData(name, role, year, per, loc) {
  return { name, role, year, per, loc };
}

const rows = [
  createData("ACET", "B.Tech", "8.42", "2017-21", "Pondicherry"),
  createData("SSV", "HSE", "70.6", " 2016-17", "Villianur"),
  createData("SSV", "SSLC", "87.6", "2014-15", "Villianur"),
];

export default function Edu() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">COLLEGE / SCHOOL NAME</TableCell>
            <TableCell align="center">COURSE NAME</TableCell>
            <TableCell align="center">% / CGPA&nbsp;</TableCell>
            <TableCell align="center">YEAR&nbsp;</TableCell>
            <TableCell align="center">LOCATION&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center" component="th" scope="row">
                {row.name}
              </TableCell>

              <TableCell align="center">{row.role}</TableCell>
              <TableCell align="center">{row.year}</TableCell>
              <TableCell align="center">{row.per}</TableCell>
              <TableCell align="center">{row.loc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
