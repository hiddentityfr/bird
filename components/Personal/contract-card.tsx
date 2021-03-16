import React from 'react';
import { CheckCircle, Circle } from 'react-feather';

import { Container } from '@components/Layouts';
import { Text } from '@components/DataDisplay';

type ContractCardProps = {
  title: string;
  checked: boolean;
};

const ContractCard = ({ checked, title }: ContractCardProps) => {
  return (
    <Container gap={0} flex="0 14%">
      <Container row bg={checked ? '#339999' : '#f2f2f5'} gap={2} rounded={true}>
        <Container flex={0} gap={4}>{checked ? <CheckCircle size={22} color="#fff" /> : <Circle size={22} />}</Container>
        <Container flex={0} gap={0}>
          <Text variant="h6" color={checked ? '#fff' : '#4f4f4f'}>
            {title}
          </Text>
        </Container>
      </Container>
    </Container>
  );
};

export default ContractCard;