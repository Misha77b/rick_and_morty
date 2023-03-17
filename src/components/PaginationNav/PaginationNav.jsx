import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import "./PaginationNav.scss"

const PaginationNav = ({ totalPages, pageNumber, setPageNumber }) => {
  const navigate = useNavigate();

  const handlePageChange = (_, num) => {
    setPageNumber(num);
    if(num === 1){
      navigate("/");
    } else navigate(`/${num}`)
  };

  return (
    <Stack sx={{margin: '30px auto 20px'}}>
      <Pagination 
        count={totalPages || 0}
        page={pageNumber}
        onChange={handlePageChange}
        size={"large"}
        // renderItem={(item) => (
        //   <PaginationItem
        //     component={Link}
        //     to={`/page=${pageNumber}`}
        //     {...item}
        //   />
        // )}
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