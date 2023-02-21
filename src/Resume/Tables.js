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

function createData(name, role, type, dur, loc) {
  return { name, role, type, dur, loc };
}

const rows = [
  createData(
    "Learny technologies",
    "Web developer",
    "Internship",
    "2 months",
    "Pondicherry"
  ),
  createData(
    "General connectors",
    "Assembling & Testing",
    "Internship",
    "2 months",
    "Sedarapet"
  ),
  createData(
    "Lenovo private ltd.",
    "Manufacturing operation",
    "Internship",
    "1 month",
    "Pondicherry"
  ),
];

export default function Tables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">COMPANY NAME</TableCell>
            <TableCell align="center">ROLE</TableCell>
            <TableCell align="center">JOB TYPE&nbsp;</TableCell>
            <TableCell align="center">DURATION&nbsp;</TableCell>
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
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.dur}</TableCell>
              <TableCell align="center">{row.loc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
