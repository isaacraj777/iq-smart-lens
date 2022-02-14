import React, { useEffect } from 'react';
import {TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Pagination,
    Typography,
  } from "@mui/material";
import { DrawerHeader } from '../components/DrawerHeader';
import FiberManualRecordRounded from '@mui/icons-material/FiberManualRecordRounded';

export const SimpleTable = (props) => {
    const { data, setData, setChartData, setLabels, setPointColor, dataRef } = props;

    console.log(data);

    function usePagination(data, itemsPerPage) {
        const [currentPage, setCurrentPage] = React.useState(1);
        const maxPage = Math.ceil(data.length / itemsPerPage);
      
        function currentData() {
          const begin = (currentPage - 1) * itemsPerPage;
          const end = begin + itemsPerPage;
          return data.slice(begin, end);
        }
      
        function next() {
          setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
        }
      
        function prev() {
          setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
        }
      
        function jump(page) {
          const pageNumber = Math.max(1, page);
          setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
        }
      
        return { next, prev, jump, currentData, currentPage, maxPage };
      }

      let [page, setPage] = React.useState(1);
    const PER_PAGE = 5;

    const count = Math.ceil(data.length / PER_PAGE);
    let _DATA = usePagination(data, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    const handleClick = (row) => {
        setData([row]);
        setChartData([row.networkScore, row.globalScore]);
        setLabels(["", ""]);
        setPointColor(["#FFBB33", "#131FB5"]);
    }

    return (
        <>
             <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell><Typography variant='h10'>Provider name</Typography></TableCell>
                            <TableCell align='center'><Typography variant='h10'>RAF</Typography></TableCell>
                            <TableCell align='center'><Typography variant='h10'>Specialty</Typography></TableCell>
                            <TableCell align='center'><Typography variant='h10'>Region</Typography></TableCell>
                            <TableCell align='center'><Typography variant='h10'>In-network Z score</Typography><FiberManualRecordRounded fontSize='medium' sx={{color:'#FFBB33', padding: 0.7}}/></TableCell>
                            <TableCell align='center'><Typography variant='h10'>Global Z score</Typography><FiberManualRecordRounded fontSize='medium' sx={{color:"#131FB5", padding: 0.7}}/></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {_DATA.currentData().map((row) => (
                            <TableRow
                                key={row.provider_id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:hover': {background: '#F8FAFC', cursor: 'pointer'}}}
                            >
                            <TableCell component="th" scope="row" sx={{borderBottom: '1px solid #F1F5F9'}} onClick={() => handleClick(row)}>
                                {row.provider_name}
                            </TableCell>
                            <TableCell align="center" sx={{borderBottom: '1px solid #F1F5F9'}}>{row.raf_score}</TableCell>
                            <TableCell align="center" sx={{borderBottom: '1px solid #F1F5F9'}}>{dataRef.specialties.map((item) => {if(item.specialtyId === row.specialtyId) return item.specialty})}</TableCell>
                            <TableCell align="center" sx={{borderBottom: '1px solid #F1F5F9'}}>{dataRef.regions.map((item) => {if(item.regionId === row.regionId) return item.region})}</TableCell>
                            <TableCell align="center" sx={{borderBottom: '1px solid #F1F5F9'}}>{row.networkScore}</TableCell>
                            <TableCell align="center" sx={{borderBottom: '1px solid #F1F5F9'}}>{row.globalScore}</TableCell>
                            </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <DrawerHeader />
                  <Pagination
                    count={count}
                    size="large"
                    page={page}
                    variant="text"
                    onChange={handleChange}
                />
            </>
    )
}