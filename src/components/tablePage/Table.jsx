// import React, {useEffect} from 'react';
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchTable, tableData} from "../slice/dataSlice";
// import {Table, TableCell, TableHead, TableRow} from "@mui/material";
// import {Paper} from '@mui/material';
// import {TableContainer, TableBody} from '@mui/material';

export default function Table() {
    const dispatch = useDispatch();

  useEffect(() => {
    fetchTable()
    dispatch(fetchTable())
  })
    const c = useSelector((state) => state)
    console.log(c);
  return (
    <div>Table</div>
  )
}
