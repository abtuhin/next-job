import useGetJobs from "@/hooks/useGetJobs";
import Container from "@/styled/Container";
import HeaderSection from "@/styled/HeaderSection";
import JobContainer from "@/styled/JobContainer";
import JobItem from "@/styled/JobItem";
import SelectFilter from "@/styled/SelectFilter";
import TypoGraphy from "@/styled/TypoGraphy";
import React from "react";
import Image from 'next/image'

const Home: React.FC = () => {
  const [jobs, locations, levels] = useGetJobs();
  console.log(locations, levels);
  return (
    <Container>
      <HeaderSection>
        <TypoGraphy.TextNormalPrimary>
          56 offene Stellen bei Creditplus
        </TypoGraphy.TextNormalPrimary>
        <TypoGraphy.Heading>
          Hier beginnt deine Zukunft
        </TypoGraphy.Heading>

        <SelectFilter>
          <option value="" hidden>
            Bereich
          </option>
          {locations.map((l: any) => <option value={l.fields.name}>{l.fields.name}</option>)}
          
        </SelectFilter>

        <SelectFilter>
          <option value="" hidden>
            Stadt
          </option>
          {locations.map((l: any) => <option value={l.fields.city}>{l.fields.city}</option>)}
          
        </SelectFilter>

        <SelectFilter>
          <option value="" hidden>
            Erfahrungslevel
          </option>
          {levels.map((l: any) => <option value={l.fields.title}>{l.fields.title}</option>)}
          
        </SelectFilter>
      </HeaderSection>
      <JobContainer>
      {
        jobs.length && jobs.map((job: any) => (
          <JobItem key={job.sys.id}>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <TypoGraphy.TextSmallPrimary>
                {job.jobDepartment.title}
              </TypoGraphy.TextSmallPrimary>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <TypoGraphy.TextNormalPrimary>
                  Stelle anzeigen
                </TypoGraphy.TextNormalPrimary>
                <Image
                    src="/arrow-link.png"
                    width={30}
                    height={30}
                    alt="link"
                    style={{ marginTop: -3}}
                  />
              </div>
            </div>
            <TypoGraphy.TextLarge>
              {job.fields.name}
            </TypoGraphy.TextLarge>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ display: 'flex', flexDirection: 'row', marginRight: 16 }}>
                <Image
                  src="/stift.png"
                  width={15}
                  height={15}
                  alt="location"
                  style={{ marginRight: 5, marginTop: 3}}
                />
                <TypoGraphy.TextNormal>
                  {job.jobLocation.name}
                </TypoGraphy.TextNormal>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Image
                  src="/uhr.png"
                  width={15}
                  height={15}
                  alt="location"
                  style={{ marginRight: 5, marginTop: 3}}
                />
                <TypoGraphy.TextNormal>
                  {job.jobType.title}
                </TypoGraphy.TextNormal>
              </div>
              
            </div>
          </JobItem>
        ))
      }
      </JobContainer>
    </Container>
  );
};






export default Home;