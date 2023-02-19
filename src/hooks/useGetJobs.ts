import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';



const toJSON = (_: Response) => _.json()

const fetchJobs = async() => await fetch("https://cdn.contentful.com/spaces/h4fy7qjn6mui/environments/interview/entries?content_type=job&include=1&access_token=VwC5h8JyBKBW38w1SsKt-et08py9WNMtn3DCQm6WgYM").then(toJSON);

export default function useGetJobs() {
  const { data, isLoading, error } = useQuery(['getJobs'], fetchJobs);
  const [allJobs, setAllJobs] = useState([])
  useEffect(() => {
    if(data) {
      const jobs = data.items;
      const locations = data.includes.Entry.filter((item: any) => item.sys.contentType.sys.id === "location");
      const jobTypes = data.includes.Entry.filter((item: any) => item.sys.contentType.sys.id === "jobType");
      const jobDepartments = data.includes.Entry.filter((item: any) => item.sys.contentType.sys.id === "jobDepartment");

      const formattedJobs = jobs.map((job: any) => {
        const locationId = job.fields.locations[0].sys.id;
        const jobId = job.fields.type.sys.id;
        const departmentId = job.fields.department.sys.id;

        const jobLocation = locations.find((item: any) => item.sys.id === locationId)
        const jobType = jobTypes.find((item: any) => item.sys.id === jobId)
        const jobDepartment = jobDepartments.find((item: any) => item.sys.id === departmentId)

        return {
          ...job,
          jobLocation: jobLocation.fields,
          jobType: jobType.fields,
          jobDepartment: jobDepartment.fields
        }
      });
      setAllJobs(formattedJobs)
    }
  }, [data])
  
  return allJobs;
}
