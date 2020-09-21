import React from 'react';
import Container from '../Components/Layouts/Container';
import Text from '../components/DataDisplay/Text';
import LeftSideBar from '../components/Personal/left-sidebar';

export default function Administration() {
  return (
    <div className="div-full-space">
      <Container row justify="stretch" align="stretch">
        <LeftSideBar />
        <Container>
          <Text variant="h4" color="#000000">
            Administration
          </Text>
        </Container>
      </Container>
    </div>
  );
}
