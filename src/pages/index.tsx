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
import Pagination from "@/styled/Pagination";
import { Job } from "@/types";
import Image from 'next/image'

interface Filter {
  key: string;
  value: string;
}

const Home: React.FC = () => {
  const [jobs] = useGetJobs();
  const [filters, setFilters] = useState({});
  const [filteredJobs, setFilteredJobs] = useState([]);
  const itemShowedPerPage = 5;
  const [currentPageData, setCurrentPageData] = useState([]);
  const [totalDataCount, setTotalDataCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPaginationNumber, setMaxPaginationNumber] = useState(0);

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
      jobsAfterFilter = jobsAfterFilter.filter((i:Job)=> i.jobLocation.city === filters[Stadt])
    }
    if(Bereich in filters) {
      jobsAfterFilter = jobsAfterFilter.filter((i:Job)=> i.jobLocation.name === filters[Bereich])
    }
    if(Erfahrungslevel in filters) {
      jobsAfterFilter = jobsAfterFilter.filter((i:Job)=> i.jobLevel.title === filters[Erfahrungslevel])
    }
    setFilteredJobs([...jobsAfterFilter]);
  }

  const onChangeFilters = (data: Filter) => {
    setFilters({...filters, [data.key]: data.value});
  }

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

        <JobFiltersComponent onChangeFilters={onChangeFilters} />
      </HeaderSection>
      <JobListComponent jobs={currentPageData} />
      
      <Pagination>
        <ul className="pagination">
          <li className="icon">
            <a
              className={currentPage == 1 ? "disabled" : ""}
              onClick={() => onPageChange(currentPage - 1)}
            >
              <Image
                src="/back.png"
                width={16}
                height={16}
                alt="back-arrow"
                style={{ marginRight: 8, marginTop: -8}}
              />  
              <span>Previous</span>
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
              <span>Next</span>
              <Image
                src="/right-arrow.png"
                width={12}
                height={12}
                alt="front-arrow"
                style={{ marginLeft: 8, marginTop: -8}}
              />
            </a>
          </li>
        </ul>
      </Pagination>
    </Container>
  );
};

export default Home;