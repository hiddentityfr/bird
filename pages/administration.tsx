import React from 'react';
import Container from '../components/Layouts/Container';
import Text from '../components/DataDisplay/Text';
import LeftSideBar from '../components/Personal/left-sidebar';

export default function Administration() {
  return (
    <div className="div-full-space">
      <Container row justify="flex-start" align="stretch">
        <LeftSideBar />
        <Container>
          <Container row justify="space-between">
            <Text variant="h4" color="#000000">
              Administration
            </Text>
            <Text variant="h4">Input</Text>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
