import React from "react";
import { useState } from "react";
import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Paper,
  Autocomplete,
  Button,
  ButtonGroup,
  Box,
  Input,
} from "@mui/material";
import uniqid from "uniqid";

export default function PopupPage() {
  const style1 = { color: "white", fontSize: 20 };
  const style2 = { color: "white" };
  const style3 = { color: "white", width: "100px" };
  const defaultValues = [
    { value: 4, date: "20.02.2022", user: "Petro", comment: "any" },
    { value: 5, date: "21.02.2022", user: "Roman", comment: "Lorem ipsum" },
    {
      value: 6,
      date: "22.02.2022",
      user: "Anna",
      comment: "Lorem ipsum dolor ami rent",
    },
  ];

  const todayYear = () => {
    const todayDate = new Date();
    const todayYear = todayDate.getFullYear();
    const todayMonth =
      todayDate.getMonth() < 10
        ? "0" + todayDate.getMonth()
        : todayDate.getMonth();
    const todayDay =
      todayDate.getDay() < 10 ? "0" + todayDate.getDay() : todayDate.getDay();
    return `${todayYear}-${todayDay}-${todayMonth}`;
  };

  const [data, setData] = useState(defaultValues);
  const [value, setValue] = useState("");
  const [date, setDate] = useState(todayYear());
  const [user, setUser] = useState("Default User");
  const [comment, setComment] = useState("");

  const handleAdd = () => {
    setData([...data, {value: value, date: date, user: user, comment: comment}])
    console.log(data);
  };

  const handleValue = (e) => {
    setValue(e.target.value);
    // console.log(e.target.value);
  };

  const handleComment = (e) => {
    setComment(e.target.value);
    // console.log(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
    // console.log(e.target.value);
  };

  const handleUser = (e) => {
    setUser(e.target.textContent);
    // console.log(e.target.textContent);
  };

  return (
    <Box>
      <h2>Popup Page</h2>
      <TableContainer
        sx={{
          display: "flex",
          alignItems: "center",
          maxWidth: "1000px",
          margin: "50px auto",
          padding: "5px",
          background: "rgb(190, 190, 190, .4)",
          borderRadius: 4,
        }}
        component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell key={uniqid()} sx={style1} align='center'>
                Value
              </TableCell>
              <TableCell key={uniqid()} sx={style1} align='center'>
                Date
              </TableCell>
              <TableCell key={uniqid()} sx={style1} align='center'>
                User
              </TableCell>
              <TableCell key={uniqid()} sx={style1} align='center'>
                Comment
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((dataObj) => (
              <TableRow key={uniqid()}>
                <TableCell
                  align='center'
                  key={uniqid()}
                  sx={style3}
                  component='th'
                  scope='row'>
                  {dataObj.value}
                </TableCell>
                <TableCell key={uniqid()} sx={style2} align='center'>
                  {dataObj.date}
                </TableCell>
                <TableCell key={uniqid()} sx={style2} align='center'>
                  {dataObj.user}
                </TableCell>
                <TableCell key={uniqid()} sx={style2} align='center'>
                  {dataObj.comment}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell key={uniqid()}>
                <Input
                required
                  onBlur={handleValue}
                  defaultValue={value}
                  placeholder='Enter value'
                  type='number'
                />
              </TableCell>
              <TableCell key={uniqid()}>
                <TextField
                  onChange={handleDate}
                  label='Enter date'
                  type='date'
                  defaultValue={date}
                  sx={{ width: 220 }}
                />
              </TableCell>
              <TableCell key={uniqid()}>
                <Autocomplete
                  onChange={handleUser}
                  defaultValue={"Petro"}
                  options={["Petro", "Roman", "Anna"]}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} label='Value' />
                  )}
                />
              </TableCell>
              <TableCell key={uniqid()}>
                <Input
                required
                  onBlur={handleComment}
                  defaultValue={comment}
                  placeholder='Enter value'
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <ButtonGroup
          orientation='vertical'
          aria-label='vertical outlined button group'>
          {[
            <Button
              sx={{ m: 5, background: "green", color: "white", width: "100px" }}
              key='one'
              onClick={handleAdd}>
              Add
            </Button>,
            <Button
              sx={{ m: 5, background: "red", color: "white", width: "100px" }}
              key='two'
              onClick={() => window.close()}>
              Close
            </Button>,
          ]}
        </ButtonGroup>
      </TableContainer>
    </Box>
  );
}
