import React from 'react';
import { User, Settings } from 'react-feather';
import Container from '../Layouts/Container';
import Text from '../DataDisplay/Text';
import Link from '../DataDisplay/Link';

export default function LeftSideBar() {
  return (
    <div className="grey-div-full-space">
      <Container justify="stretch" align="center" flex={1}>
        <Container row justify="center" align="center" gap={7}>
          <img
            src="/images/logo-color.png"
            alt="hiddentity logo"
            className="hiddentity-logo"
          />
          <Text variant="h4" color="#000000">
            Hiddentity
          </Text>
        </Container>
        <Container justify="space-around" align="flex-start" gap={8}>
          <Link href="/">
            <Text variant="h5" color="#bdbdbd">
              Accueil
            </Text>
          </Link>
          <Link href="/">
            <Text variant="h5" color="#bdbdbd">
              Candidats
            </Text>
          </Link>
          <Link href="/">
            <Text variant="h5" color="#bdbdbd">
              Offres
            </Text>
          </Link>
          <Link href="/">
            <Text variant="h5" color="#000000">
              Administration
            </Text>
          </Link>
        </Container>
        <Container justify="space-around" align="flex-start" gap={8}>
          <Link href="/">
            <Container row justify="space-around" align="center">
              <User size={24} className="sidebar-icon" />
              <Text variant="h5" color="#bdbdbd">
                Mon compte
              </Text>
            </Container>
          </Link>
          <Link href="/">
            <Container row justify="space-around" align="center">
              <Settings size={24} className="sidebar-icon" />
              <Text variant="h5" color="#bdbdbd">
                Paramètres
              </Text>
            </Container>
          </Link>
        </Container>
      </Container>
    </div>
  );
}
