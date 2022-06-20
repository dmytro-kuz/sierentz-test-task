import React from "react";
import { enterData } from "../fetchDataAPI/enterData";
import { Table, TableCell, TableHead, TableRow } from "@mui/material";
import {Paper} from '@mui/material';
import { TableContainer, TableBody } from "@mui/material";
import uniqid from "uniqid";

export default function TablePage() {
  const yearSet = new Set();

  Object.values(enterData).forEach((regionValue) => {
    Object.keys(regionValue.G).forEach((year) => yearSet.add(year));
  });

  const years = Array.from(yearSet).sort((a, b) => a - b);
  const columns = ["XX", "YY", "ZZ"];

  const rows = Object.keys(enterData).map((region) => {
    return [
      { value: region },
      ...years
        .map((year) => {
          const data = enterData[region].G[year];
          return ["XX", "YY", "ZZ"].map((key) => {
            return { ...data?.[key], region, year, key };
          });
        })
        .flat(),
    ];
  });

  return (
    <div>
      <h1>Table of regions</h1>
      <TableContainer sx={{maxWidth: '900px', margin: '50px auto', padding: '5px', background: 'rgb(190, 190, 190, .4)' , borderRadius: 4}} component={Paper}>
        <Table  aria-label='simple table'>
          <TableHead >
            <TableRow key={uniqid()}>
              <TableCell sx={{color: 'white', fontSize: 20}} rowSpan={2} key={uniqid()} align='center'> 
                regions
              </TableCell>
              {years.map((year) => (
                <TableCell
                  sx={{color: 'white', fontSize: 18}}
                  colSpan={columns.length}
                  key={uniqid()}
                  align='center'>
                  {year}
                </TableCell>
              ))}
            </TableRow>
            <TableRow key={uniqid()}>
              {years.map((x) =>
                columns.map((letter) => (
                  <TableCell sx={{color: 'white'}} key={uniqid()} align='center'>
                    {letter}
                  </TableCell>
                ))
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={uniqid()}>
                {row.map((cell) => (
                  <TableCell sx={{color: 'white', textAlign: 'center'}} key={uniqid()}>
                    {cell.value ? cell.value : 0}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
