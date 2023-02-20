import useGetJobs from "@/hooks/useGetJobs";
import Container from "@/styled/Container";
import HeaderSection from "@/styled/HeaderSection";
import SelectFilter from "@/styled/SelectFilter";
import TypoGraphy from "@/styled/TypoGraphy";
import React, { useCallback, useEffect, useState } from "react";
import JobListComponent from "@/components/JobListComponent";
import JobFiltersComponent from "@/components/JobFiltersComponent";
import { sleep } from "react-query/types/core/utils";
import { Bereich, Erfahrungslevel, Stadt } from "@/constants/filter";
import Pagination from "@/components/Pagination";
import PaginationStyle from "@/styled/PaginationStyle";
interface Filter {
  key: string;
  value: string;
}

const Home: React.FC = () => {
  const [jobs, locations, levels] = useGetJobs();
  const [filters, setFilters] = useState({});
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    setFilteredJobs([...jobs]);
  },[jobs])

  useEffect(() => {
    filterJob();
  },[filters]);

  useEffect(() => {
    resetPagination();
  },[filteredJobs])
  
  const filterJob = () => {
    let jobsAfterFilter = jobs;
    if(Stadt in filters) {
      jobsAfterFilter = jobsAfterFilter.filter((i:any)=> i.jobLocation.city === filters[Stadt])
    }
    if(Bereich in filters) {
      jobsAfterFilter = jobsAfterFilter.filter((i:any)=> i.jobLocation.name === filters[Bereich])
    }
    if(Erfahrungslevel in filters) {
      jobsAfterFilter = jobsAfterFilter.filter((i:any)=> i.jobLevel.title === filters[Erfahrungslevel])
    }
    setFilteredJobs([...jobsAfterFilter]);
  }

  const onChangeFilters = (data: Filter) => {
    setFilters({...filters, [data.key]: data.value});
  }

  //...............................
  const itemShowedPerPage = 5;
  const [currentPageData, setCurrentPageData] = useState([]);

  const [totalDataCount, setTotalDataCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPaginationNumber, setMaxPaginationNumber] = useState(0);

  const resetPagination= () => {
    const totalData = filteredJobs.length;
    const totalPageCount = Math.ceil(totalData / itemShowedPerPage);
    if (totalData > 0) {
      setCurrentPageData(filteredJobs.slice(0, Math.min(totalData,itemShowedPerPage )));
    }
    else {
      setCurrentPageData([]);
    }
    setTotalDataCount(totalData);
    setMaxPaginationNumber(totalPageCount);
    setCurrentPage(1);
    
  }

  const range = () => {
    let end = Math.min(currentPage + 4, maxPaginationNumber);
    let start = Math.max(1, end - 4);
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const onPageChange = (cur: number) => {
    setCurrentPage(cur);
    setCurrentPageData(
      filteredJobs.slice((cur - 1) * itemShowedPerPage, Math.min(totalDataCount, cur * itemShowedPerPage))
    );
  };

  return (
    <Container>
      <HeaderSection>
        <TypoGraphy.TextNormalPrimary>
          {jobs.length} offene Stellen bei Creditplus
        </TypoGraphy.TextNormalPrimary>
        <TypoGraphy.Heading>
          Hier beginnt deine Zukunft
        </TypoGraphy.Heading>

        <JobFiltersComponent locations={locations} levels={levels} onChangeFilters={onChangeFilters} />
      </HeaderSection>
      <JobListComponent jobs={currentPageData} />
      
      <PaginationStyle>
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
      </PaginationStyle>
    </Container>
  );
};






export default Home;