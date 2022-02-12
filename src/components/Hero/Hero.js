import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle  main center>
        Hi, I am Andrew Chester. <br />
        Welcome to my Portfolio
      </SectionTitle>
      <SectionText>
        Web Developer with Computer Science degree from Concordia University Wisconsin. Creating a career in Web and Mobile Development
      </SectionText>
      <Button onClick={() => window.location = '#projects'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;