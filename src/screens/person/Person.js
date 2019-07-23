import React, { PureComponent } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { api } from '~/services';
import { Colors } from '~/theme';
import { themoviedb } from '~/../env.json';
import { Container, Loading } from '~/components';

class Person extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      person: null,
    };
  }

  componentDidMount() {
    const { navigation: { getParam } } = this.props;
    const personId = getParam('id', null);

    api.get(`/person/${personId}`).then(({ data }) => {
      this.setState({ person: data, loading: false });
    }).catch(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { loading, person } = this.state;
    const { backgroundContainer, loadingContainer } = styles;

    if (loading) {
      return (
        <View style={loadingContainer}>
          <Loading />
        </View>
      );
    }

    const { profile_path: pic } = person;

    return (
      <ImageBackground
        source={{ uri: `${themoviedb.resourceUrl}original${pic}` }}
        style={backgroundContainer}
      >
        <Container transparency>
          <View />
        </Container>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: Colors.black,
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
});

export default Person;
