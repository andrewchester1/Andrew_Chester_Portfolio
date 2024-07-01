import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the mobile and web development world. 
      From Front-end to Back-end Development.
    </SectionText>
    <List>
    <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React Native <br />
            Expo <br />
            React.js <br />
            Next.js <br />
            Expo <br />
            TanStack <br />
            PostHog <br />
            TypeScript <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Express <br />
            Node js <br />
            SQL <br />
            MySQL <br />
            Kysely <br />
            BullMQ <br />
            Stripe <br />
            Twilio/SendGrid <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Tamagui <br />
            Bootstrap <br />
            NativeBase <br />
            React Native Elements <br />
            HTML <br />
            CSS <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
