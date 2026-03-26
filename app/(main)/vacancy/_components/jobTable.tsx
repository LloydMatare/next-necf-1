import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { JobModal } from "./jobModal";
import getVacancies from "@/lib/vacancy/getVacancies";
import { connectToDB } from "@/lib/connectToDB";
import Vacancy from "@/models/vacancy";


export default async function JobTable() {

  const vacancies = await getVacancies()


  // const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  // const handleOpenDialog = () => {
  //   setIsDialogOpen(true);
  // };

  // const handleCloseDialog = () => {
  //   setIsDialogOpen(false);
  // };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Job Type</TableCell>
            <TableCell align="right">Due Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vacancies.map((vacancy: any) => (
            <TableRow
              key={vacancy.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {vacancy.name}
              </TableCell>
              <TableCell align="right">{vacancy.jobType}</TableCell>
              <TableCell align="right">{vacancy.dueDate}</TableCell>
              <TableCell>
                <JobModal />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
