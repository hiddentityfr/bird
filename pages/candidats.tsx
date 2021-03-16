import React from 'react';

import Container from '../components/Layouts/Container';
import Text from '../components/DataDisplay/Text';
import TextField from '../components/Inputs/TextField';
import LeftSideBar from '../components/Personal/left-sidebar';
import ContractCard from '../components/Personal/contract-card';
import { Button } from '@components/Inputs';
import { MoreHorizontal } from 'react-feather';

const Candidats = () => {
  return (
    <Container row align="stretch" flex={1} gap={0}>
      <LeftSideBar />
      <Container flex={3} gap={8}>
        <Container row justify="space-between" align="center" flex={1}>
          <Text variant="h3" color="#000000">
            Candidats
          </Text>
          <TextField
            size="large"
            onChange={() => {}}
            placeholder="Rechercher de candidat"
          />
        </Container>
        <Container row justify="space-between" align="flex-start" flex={5}>
          
          
          <Container justify="space-between" align="space-around" flex={1} gap={6}>
            <Container row justify="space-between" align="space-around" flex={1}>
              <Text variant="h4">En attente</Text>
              <MoreHorizontal color="#828282" size={18} />
            </Container>
            

            <Container gap={0} flex="0 30%">
              <Container bg='#f2f2f5' gap={2} rounded={true}>
                <Container>
                  <Container gap={1} flex={2}><Text variant="h6">Loutre</Text></Container>
                  <Container row gap={1} flex={2}>
                    <Text variant="small" color="#4f4f4f">Developpeur Backend Go</Text>
                  </Container>
                  <Container row justify="space-between" gap={1} flex={3}>
                    <Text variant="small" color="#bdbdbd">19/08/2020</Text>
                    <Container row justify="space-around" gap={0} flex="0 30%">
                      <Container bg="#ffc9ad" gap={0} rounded={true} flex="75% 50%"><Container bg="ffc9ad" gap={1}><Text variant="small">CDD</Text></Container></Container>
                      <Container bg="#e4c1f9" gap={0} rounded={true} flex="75% 50%"><Container bg="#e4c1f9" gap={1}><Text variant="small">CDI</Text></Container></Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>

            <Container gap={0} flex="0 30%">
              <Container bg='#f2f2f5' gap={2} rounded={true}>
                <Container>
                  <Container gap={1} flex={2}><Text variant="h6">Ragondin</Text></Container>
                  <Container row gap={1} flex={2}>
                    <Text variant="small" color="#4f4f4f">Developpeur Backend Go</Text>
                  </Container>
                  <Container row justify="space-between" gap={1} flex={3}>
                    <Text variant="small" color="#bdbdbd">19/08/2020</Text>
                    <Container row justify="space-around" gap={0} flex="0 30%">
                      <Container bg="#ffc9ad" gap={0} rounded={true} flex="75% 50%"><Container bg="ffc9ad" gap={1}><Text variant="small">CDD</Text></Container></Container>
                      <Container bg="#e4c1f9" gap={0} rounded={true} flex="75% 50%"><Container bg="#e4c1f9" gap={1}><Text variant="small">CDI</Text></Container></Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>

            <Container gap={0} flex="0 30%">
              <Container bg='#f2f2f5' gap={2} rounded={true}>
                <Container>
                  <Container gap={1} flex={2}><Text variant="h6">Marmotte</Text></Container>
                  <Container row gap={1} flex={2}>
                    <Text variant="small" color="#4f4f4f">Developpeur Backend Go</Text>
                  </Container>
                  <Container row justify="space-between" gap={1} flex={3}>
                    <Text variant="small" color="#bdbdbd">19/08/2020</Text>
                    <Container row justify="space-around" gap={0} flex="0 30%">
                      <Container bg="#ffc9ad" gap={0} rounded={true} flex="75% 50%"><Container bg="ffc9ad" gap={1}><Text variant="small">CDD</Text></Container></Container>
                      <Container bg="#e4c1f9" gap={0} rounded={true} flex="75% 50%"><Container bg="#e4c1f9" gap={1}><Text variant="small">CDI</Text></Container></Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>


          </Container>


          <Container justify="space-between" align="space-around" flex={1} gap={6}>
            <Container row justify="space-between" align="space-around" flex={1}>
              <Text variant="h4">Entretien</Text>
              <MoreHorizontal color="#828282" size={18} />
            </Container>
            

            <Container gap={0} flex="0 30%">
              <Container bg='#f2f2f5' gap={2} rounded={true}>
                <Container>
                  <Container gap={1} flex={2}><Text variant="h6">Gépard de par deux</Text></Container>
                  <Container row gap={1} flex={2}>
                    <Text variant="small" color="#4f4f4f">Developpeur Backend Go</Text>
                  </Container>
                  <Container row justify="space-between" gap={1} flex={3}>
                    <Text variant="small" color="#bdbdbd">19/08/2020</Text>
                    <Container row justify="space-around" gap={0} flex="0 30%">
                      <Container bg="#ffc9ad" gap={0} rounded={true} flex="75% 50%"><Container bg="ffc9ad" gap={1}><Text variant="small">CDD</Text></Container></Container>
                      <Container bg="#e4c1f9" gap={0} rounded={true} flex="75% 50%"><Container bg="#e4c1f9" gap={1}><Text variant="small">CDI</Text></Container></Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>


          </Container>

          <Container justify="space-between" align="space-around" flex={1} gap={6}>
            <Container row justify="space-between" align="space-around" flex={1}>
              <Text variant="h4">Accepté</Text>
              <MoreHorizontal color="#828282" size={18} />
            </Container>
            

            <Container gap={0} flex="0 30%">
              <Container bg='#f2f2f5' gap={2} rounded={true}>
                <Container>
                  <Container gap={1} flex={2}><Text variant="h6">Aigle</Text></Container>
                  <Container row gap={1} flex={2}>
                    <Text variant="small" color="#4f4f4f">Developpeur Backend Go</Text>
                  </Container>
                  <Container row justify="space-between" gap={1} flex={3}>
                    <Text variant="small" color="#bdbdbd">19/08/2020</Text>
                    <Container row justify="space-around" gap={0} flex="0 30%">
                      <Container bg="#ffc9ad" gap={0} rounded={true} flex="75% 50%"><Container bg="ffc9ad" gap={1}><Text variant="small">CDD</Text></Container></Container>
                      <Container bg="#e4c1f9" gap={0} rounded={true} flex="75% 50%"><Container bg="#e4c1f9" gap={1}><Text variant="small">CDI</Text></Container></Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>


            <Container gap={0} flex="0 30%">
              <Container bg='#f2f2f5' gap={2} rounded={true}>
                <Container>
                  <Container gap={1} flex={2}><Text variant="h6">Condor</Text></Container>
                  <Container row gap={1} flex={2}>
                    <Text variant="small" color="#4f4f4f">Developpeur Backend Go</Text>
                  </Container>
                  <Container row justify="space-between" gap={1} flex={3}>
                    <Text variant="small" color="#bdbdbd">19/08/2020</Text>
                    <Container row justify="space-around" gap={0} flex="0 30%">
                      <Container bg="#ffc9ad" gap={0} rounded={true} flex="75% 50%"><Container bg="ffc9ad" gap={1}><Text variant="small">CDD</Text></Container></Container>
                      <Container bg="#e4c1f9" gap={0} rounded={true} flex="75% 50%"><Container bg="#e4c1f9" gap={1}><Text variant="small">CDI</Text></Container></Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>

          </Container>

          <Container justify="space-between" align="space-around" flex={1} gap={6}>
            <Container row justify="space-between" align="space-around" flex={1}>
              <Text variant="h4">Refusé</Text>
              <MoreHorizontal color="#828282" size={18} />
            </Container>
            

            <Container gap={0} flex="0 30%">
              <Container bg='#f2f2f5' gap={2} rounded={true}>
                <Container>
                  <Container gap={1} flex={2}><Text variant="h6">Dauphin</Text></Container>
                  <Container row gap={1} flex={2}>
                    <Text variant="small" color="#4f4f4f">Developpeur Backend Go</Text>
                  </Container>
                  <Container row justify="space-between" gap={1} flex={3}>
                    <Text variant="small" color="#bdbdbd">19/08/2020</Text>
                    <Container row justify="space-around" gap={0} flex="0 30%">
                      <Container bg="#ffc9ad" gap={0} rounded={true} flex="75% 50%"><Container bg="ffc9ad" gap={1}><Text variant="small">CDD</Text></Container></Container>
                      <Container bg="#e4c1f9" gap={0} rounded={true} flex="75% 50%"><Container bg="#e4c1f9" gap={1}><Text variant="small">CDI</Text></Container></Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>


            <Container gap={0} flex="0 30%">
              <Container bg='#f2f2f5' gap={2} rounded={true}>
                <Container>
                  <Container gap={1} flex={2}><Text variant="h6">Requin</Text></Container>
                  <Container row gap={1} flex={2}>
                    <Text variant="small" color="#4f4f4f">Developpeur Backend Go</Text>
                  </Container>
                  <Container row justify="space-between" gap={1} flex={3}>
                    <Text variant="small" color="#bdbdbd">19/08/2020</Text>
                    <Container row justify="space-around" gap={0} flex="0 30%">
                      <Container bg="#ffc9ad" gap={0} rounded={true} flex="75% 50%"><Container bg="ffc9ad" gap={1}><Text variant="small">CDD</Text></Container></Container>
                      <Container bg="#e4c1f9" gap={0} rounded={true} flex="75% 50%"><Container bg="#e4c1f9" gap={1}><Text variant="small">CDI</Text></Container></Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>


            <Container gap={0} flex="0 30%">
              <Container bg='#f2f2f5' gap={2} rounded={true}>
                <Container>
                  <Container gap={1} flex={2}><Text variant="h6">Béluga</Text></Container>
                  <Container row gap={1} flex={2}>
                    <Text variant="small" color="#4f4f4f">Developpeur Backend Go</Text>
                  </Container>
                  <Container row justify="space-between" gap={1} flex={3}>
                    <Text variant="small" color="#bdbdbd">19/08/2020</Text>
                    <Container row justify="space-around" gap={0} flex="0 30%">
                      <Container bg="#ffc9ad" gap={0} rounded={true} flex="75% 50%"><Container bg="ffc9ad" gap={1}><Text variant="small">CDD</Text></Container></Container>
                      <Container bg="#e4c1f9" gap={0} rounded={true} flex="75% 50%"><Container bg="#e4c1f9" gap={1}><Text variant="small">CDI</Text></Container></Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>


            <Container gap={0} flex="0 30%">
              <Container bg='#f2f2f5' gap={2} rounded={true}>
                <Container>
                  <Container gap={1} flex={2}><Text variant="h6">Orque</Text></Container>
                  <Container row gap={1} flex={2}>
                    <Text variant="small" color="#4f4f4f">Developpeur Backend Go</Text>
                  </Container>
                  <Container row justify="space-between" gap={1} flex={3}>
                    <Text variant="small" color="#bdbdbd">19/08/2020</Text>
                    <Container row justify="space-around" gap={0} flex="0 30%">
                      <Container bg="#ffc9ad" gap={0} rounded={true} flex="75% 50%"><Container bg="ffc9ad" gap={1}><Text variant="small">CDD</Text></Container></Container>
                      <Container bg="#e4c1f9" gap={0} rounded={true} flex="75% 50%"><Container bg="#e4c1f9" gap={1}><Text variant="small">CDI</Text></Container></Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>


          </Container>


        </Container>
      </Container>
    </Container>
  )
}

export default Candidats;