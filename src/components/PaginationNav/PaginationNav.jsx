import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import "./PaginationNav.scss"

const PaginationNav = ({ totalPages, pageNumber, setPageNumber }) => {
  const navigate = useNavigate();

  const handlePageChange = (_, num) => {
    setPageNumber(num);
    if(num === 1){
      navigate("/");
    } else navigate(`/page=${num}`)
  };

  return (
    <Stack sx={{margin: '30px auto 20px'}}>
      <Pagination 
        count={totalPages || 0}
        page={pageNumber}
        onChange={handlePageChange}
        size={"large"}
      />
    </Stack>
  )
}

export default PaginationNav

PaginationNav.propTypes = {
  totalPages: PropTypes.number,
  pageNumber: PropTypes.number,
  setPageNumber: PropTypes.func,
}