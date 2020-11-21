import React from 'react';
import { User, Settings } from 'react-feather';
import Container from '../Layouts/Container';
import Text from '../DataDisplay/Text';
import Link from '../DataDisplay/Link';

const LeftSideBar = () => {
  return (
    <Container align="center" justify="space-around" gap={0} flex={1} bg="#F2F2F5">
      <Container row align="center" gap={0}>
        <img src="/images/logo-color.png" alt="hiddentity logo" className="hiddentity-logo" />
        <Text variant="h3" color="#000000">
          Hiddentity
        </Text>
      </Container>
      <Container justify="space-around" align="flex-start" gap={0}>
        <Link href="/">
          <Text variant="h4" color="#bdbdbd">
            Accueil
          </Text>
        </Link>
        <Link href="/">
          <Text variant="h4" color="#bdbdbd">
            Candidats
          </Text>
        </Link>
        <Link href="/" >
          <Text variant="h4" color="#bdbdbd"  >
            Offres
          </Text>
        </Link>
        <Link href="/" >
          <Text variant="h4" color="#000000">
            Administration
          </Text>
        </Link>
      </Container>
      <Container align="flex-start" justify="center" gap={0}>
        <Link href="/" >
          <Container row justify="space-around" align="center">
            <User size={24} color="#bdbdbd" />
            <Text variant="h4" color="#bdbdbd">
              Mon compte
            </Text>
          </Container>
        </Link>
        <Link href="/" >
          <Container row justify="space-around" align="center">
            <Settings size={24} className="sidebar-icon" />
            <Text variant="h4" color="#bdbdbd" margin={true}>
              Paramètres
            </Text>
          </Container>
        </Link>
      </Container>
    </Container>
  );
}

export default LeftSideBar;