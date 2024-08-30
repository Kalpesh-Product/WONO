import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';

const PaginationS = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange =(pageNumber)=>{
    setCurrentPage(pageNumber);

  }
 
  return (
    <Pagination>
    <Pagination.First onClick={()=> handlePageChange(1)} disabled={currentPage === 1} />
    <Pagination.Prev  onClick={()=>handlePageChange(currentPage-1)} disabled={currentPage === 1}/>
    {[...Array(totalPages).map((_,index=0) =>(
      <Pagination.Item key={index} active={index+1 === currentPage} onClick={()=>handlePageChange(index + 1)}>{index + 1}</Pagination.Item>
    ))]}
    <Pagination.Next onClick={()=>handlePageChange(currentPage+1)} disabled={currentPage === totalPages} />
    <Pagination.Last onClick={()=>handlePageChange(totalPages)} disabled={currentPage === totalPages}/>
  </Pagination>
  )
}

export default PaginationS