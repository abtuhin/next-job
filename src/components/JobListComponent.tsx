import JobContainer from '@/styled/JobContainer'
import JobItem from '@/styled/JobItem'
import TypoGraphy from '@/styled/TypoGraphy'
import React from 'react'
import Image from 'next/image'

interface Jobs {

}

export default function JobListComponent({ jobs }: any) {
  return (
    <JobContainer>
      {
        jobs.length > 0 && jobs.map((job: any) => (
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
  )
}
