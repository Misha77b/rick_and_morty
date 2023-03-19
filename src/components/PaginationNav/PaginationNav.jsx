import React from 'react';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
// import useLocationParams from '../../hooks/useLocationParams';
import { useSearchParams, useParams } from "react-router-dom";
import "./PaginationNav.scss"

const PaginationNav = ({ totalPages, pageNumber, setPageNumber }) => {
  // const navigate = useNavigate();
  
  const [search, setSearch] = useSearchParams();
  // const { params } = useLocationParams({ page: pageNumber });
  // console.log(params);

  const handlePageChange = (_, num) => {
    setPageNumber(num);
    
    search.set("page", num);
    setSearch(search);
    if(num === 1){
      search.delete("page");
      setSearch(search);
    }
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