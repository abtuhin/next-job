import PaginationStyle from "@/styled/PaginationStyle";
import React, { Component, useState, useEffect } from "react";

const Pagination = ({jobs}:any) => {
  const itemShowedPerPage = 10;
  const [currentPageData, setCurrentPageData] = useState([]);

  const [data, setData] = useState([]);

  const [totalDataCount, setTotalDataCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPaginationNumber, setMaxPaginationNumber] = useState(0);

  const range = () => {
    let end = Math.min(currentPage + 4, maxPaginationNumber);
    let start = Math.max(1, end - 4);

    let length = end - start + 1;

    /*
      Create an array of certain length and set the elements within it from
      start value to end value.
    */
    return Array.from({ length }, (_, idx) => idx + start);
  };

  useEffect(() => {
    
      const responseData = jobs;

      setData(responseData);

      const totalData = responseData.length;
      const totalPageCount = Math.ceil(totalData / itemShowedPerPage);

      if (totalData > 0) {
        setCurrentPageData(data.slice(0, Math.min(totalData, itemShowedPerPage)));
      }

      // console.log("data", data);

      setTotalDataCount(totalData);
      setMaxPaginationNumber(totalPageCount);
    
  }, [jobs]);

  const onPageChange = (cur: number) => {
    setCurrentPage(cur);
    console.log(currentPageData);
    

    setCurrentPageData(
      data.slice((cur - 1) * itemShowedPerPage, Math.min(totalDataCount, cur * itemShowedPerPage))
    );
  };

  return (
    <PaginationStyle>
      <div className="title">Pagination Page {currentPage}</div>
      {/* {currentPageData.length &&
        currentPageData.map((item) => <h3>{item.sys.id}</h3>)} */}
      <ul className="pagination">
        <li className="icon">
          <a
            className={currentPage == 1 ? "disabled" : ""}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <span className="fas fa-angle-left"></span>Previous
          </a>
        </li>

        {range().map((index) => (
          <li className={currentPage == index ? "selected" : ""}>
            <a onClick={() => onPageChange(index)}>{index}</a>
          </li>
        ))}

        <li className="icon">
          <a
            className={currentPage == maxPaginationNumber ? "disabled" : ""}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next<span className="fas fa-angle-right"></span>
          </a>
        </li>
      </ul>
    </PaginationStyle>
  );
};

export default Pagination;
