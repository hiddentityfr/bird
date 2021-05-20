import * as React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { api } from '@services';

import { Container } from '@components/Layouts';
import { Text } from '@components/DataDisplay';
import {
  CompanyUserResponse,
  CompanyUserVars,
  CompanyUser,
} from '@typings/Company';
import Loader from 'react-loader-spinner';
import { day } from '@utils';

const User = (): JSX.Element => {
  const { query } = useRouter();

  const [companyUser, setCompanyUser] = React.useState<CompanyUser>();

  useQuery<CompanyUserResponse, CompanyUserVars>(
    api.company.queries.companyUser,
    {
      variables: {
        id: query.id as string,
      },
      onCompleted: (data) => setCompanyUser(data.companyUser),
    }
  );

  return (
    <Container flex={0}>
      <Container row justify="space-between">
        <Container>
          <Text variant="h3">Utilisateur</Text>
        </Container>
      </Container>
      {companyUser ? (
        <Container>
          <Container>
            <Text variant="h4">
              {`${companyUser.firstname} ${companyUser.lastname}`}
              <br />
              <Text variant="small">{`${companyUser.email}`}</Text>
            </Text>
          </Container>
          <Container>
            <Text variant="small">
              {`Compte créé le ${day(companyUser.createdAt).format(
                'DD/MM/YYYY'
              )}`}
            </Text>
            <Text variant="small">
              {`Dernière modification le ${day(companyUser.updatedAt).format(
                'DD/MM/YYYY'
              )}`}
            </Text>
          </Container>
        </Container>
      ) : (
        <Container align="center" flex={0}>
          <div style={{ transform: 'scale(0.5)' }}>
            <Loader color="#000" width={100} height={100} type="ThreeDots" />
          </div>
        </Container>
      )}
    </Container>
  );
};

export default User;
