import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, HeaderThree, Hr, TitleContent, UtilityList, Img, GridContainer } from './ResumeStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { ResumeImg1, ResumeImg2 } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="resume">
    <SectionDivider />
    <SectionTitle main>Resume</SectionTitle>
    <GridContainer>
        <BlogCard>
            <Img src={ResumeImg1} />
            <TitleContent>
                <HeaderThree title>Andrew Chester's Resume</HeaderThree>
                <Hr />
            </TitleContent>
            <UtilityList>
                <ExternalLinks href={ResumeImg1}>View</ExternalLinks>
            </UtilityList>
        </BlogCard>
    </GridContainer>
  </Section>
);

export default Projects;