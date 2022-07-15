import { createMuiTheme, Pagination } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React from "react";
import "./CustomPagination.css";

const CustomPagination = ({ setPage, numberOfPages = 9 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div className="pagination">
      <Pagination
        hideNextButton
        color="primary"
        hidePrevButton
        count={numberOfPages}
        onChange={(e) => handlePageChange(e.target.textContent)}
      />
    </div>
  );
};

export default CustomPagination;
