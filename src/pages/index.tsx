import Container from "@/styled/Container";
import JobItem from "@/styled/JobItem";
import SelectFilter from "@/styled/SelectFilter";
import TypoGraphy from "@/styled/TypoGraphy";
import React from "react";

const Home: React.FC = () => {
  return (
    <Container>
      <JobItem>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <TypoGraphy.TextSmallPrimary>
            IT & Projektmanagement
          </TypoGraphy.TextSmallPrimary>
          <TypoGraphy.TextNormalPrimary>
            Stelle anzeigen
          </TypoGraphy.TextNormalPrimary>
        </div>
        <TypoGraphy.TextLarge>
          (Junior) Full Stack Developer (m/w/d)
        </TypoGraphy.TextLarge>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <TypoGraphy.TextNormal>
            Stuttgart
          </TypoGraphy.TextNormal>
          <TypoGraphy.TextNormal>
            Vollzeit
          </TypoGraphy.TextNormal>
        </div>
      </JobItem>
      <JobItem>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <TypoGraphy.TextSmallPrimary>
            IT & Projektmanagement
          </TypoGraphy.TextSmallPrimary>
          <TypoGraphy.TextNormalPrimary>
            Stelle anzeigen
          </TypoGraphy.TextNormalPrimary>
        </div>
        <TypoGraphy.TextLarge>
          (Junior) Full Stack Developer (m/w/d)
        </TypoGraphy.TextLarge>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <TypoGraphy.TextNormal>
            Stuttgart
          </TypoGraphy.TextNormal>
          <TypoGraphy.TextNormal>
            Vollzeit
          </TypoGraphy.TextNormal>
        </div>
      </JobItem>


      <SelectFilter>
        <option value="" hidden>
          Type
        </option>
        <option value="1">Audi</option>
        <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Ford</option>
      </SelectFilter>
    </Container>
  );
};






export default Home;