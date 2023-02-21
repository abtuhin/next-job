import { ApiResponse } from '@/types';
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';

const toJSON = (_: Response) => _.json()

const fetchJobs = async() => await fetch("https://cdn.contentful.com/spaces/h4fy7qjn6mui/environments/interview/entries?content_type=job&include=1&access_token=VwC5h8JyBKBW38w1SsKt-et08py9WNMtn3DCQm6WgYM").then(toJSON);

export default function useGetJobs() {
  const { data, isLoading, error } = useQuery(['getJobs'], fetchJobs);
  const [allJobs, setAllJobs] = useState([])
  const [jobLocations, setJobLocations] = useState([])
  const [levels, setLevels] = useState([])

  useEffect(() => {
    if(data) {
      const jobs = data.items;
      const locations = data.includes.Entry.filter((item: ApiResponse) => item.sys.contentType.sys.id === "location");
      const jobTypes = data.includes.Entry.filter((item: ApiResponse) => item.sys.contentType.sys.id === "jobType");
      const jobDepartments = data.includes.Entry.filter((item: ApiResponse) => item.sys.contentType.sys.id === "jobDepartment");
      const jobLevels = data.includes.Entry.filter((item: ApiResponse) => item.sys.contentType.sys.id === "jobLevel");
      
      setJobLocations(locations);
      setLevels(jobLevels);

      const formattedJobs = jobs.map((job: ApiResponse) => {
        const locationId = job.fields.locations[0].sys.id;
        const jobId = job.fields.type.sys.id;
        const departmentId = job.fields.department.sys.id;
        const levelId = job.fields.levels[0].sys.id;

        const jobLocation = locations.find((item: ApiResponse) => item.sys.id === locationId)
        const jobType = jobTypes.find((item: ApiResponse) => item.sys.id === jobId)
        const jobDepartment = jobDepartments.find((item: ApiResponse) => item.sys.id === departmentId)
        const jobLevel = jobLevels.find((item: ApiResponse) => item.sys.id === levelId)

        return {
          ...job,
          jobLocation: jobLocation.fields,
          jobType: jobType.fields,
          jobDepartment: jobDepartment.fields,
          jobLevel: jobLevel.fields
        }
      });
      setAllJobs(formattedJobs)
    }
  }, [data])
  
  return [allJobs, jobLocations, levels];
}
