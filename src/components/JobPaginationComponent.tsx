import Pagination from '@/styled/Pagination'
import { Jobs } from '@/types';
import React, { useEffect, useState } from 'react'

export default function JobPaginationComponent({ jobs, onChangeCurrentPageData=()=>{} }: any) {
    const itemShowedPerPage = 5;
    const [currentPageData, setCurrentPageData] = useState([]);
    const [totalDataCount, setTotalDataCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPaginationNumber, setMaxPaginationNumber] = useState(0);
    

    useEffect(() => {
        const totalData = jobs.length;
        const totalPageCount = Math.ceil(totalData / itemShowedPerPage);
        if (totalData > 0) {
          setCurrentPageData(jobs.slice(0, Math.min(totalData,itemShowedPerPage )));
        }
        else {
          setCurrentPageData([]);
        }
        setTotalDataCount(totalData);
        setMaxPaginationNumber(totalPageCount);
        setCurrentPage(1);
        // onChangeCurrentPageData(currentPageData);
    },[])
    
    const range = () => {
        let end = Math.min(currentPage + 4, maxPaginationNumber);
        let start = Math.max(1, end - 4);
        let length = end - start + 1;
        return Array.from({ length }, (_, idx) => idx + start);
    };
    
    const onPageChange = (cur: number) => {
        setCurrentPage(cur);
        setCurrentPageData(
          jobs.slice((cur - 1) * itemShowedPerPage, Math.min(totalDataCount, cur * itemShowedPerPage))
        );

        onChangeCurrentPageData(currentPageData);
    };
    return (
        <Pagination>
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
                <li key={index} className={currentPage == index ? "selected" : ""}>
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
        </Pagination>
    )
}
