import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import { Container } from '~/components';

class Home extends PureComponent {
  render() {
    return (
      <Container>
        <Text style={{ fontSize: 16 }}>Home Screen</Text>
      </Container>
    );
  }
}

export default Home;
