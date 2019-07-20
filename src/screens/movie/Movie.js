import React, { PureComponent } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {
  Icon,
  Text,
  Loading,
  Container,
} from '~/components';
import { api } from '~/services';
import { Colors } from '~/theme';
import { resourceBaseUrl } from '~/../env.json';

class Movie extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    const { navigation: { getParam } } = this.props;
    const id = getParam('id', null);

    api.get(`/movie/${id}?append_to_response=videos`).then(({ data }) => {
      const movie = data;
      let { videos } = movie;

      videos = videos.results;
      movie.videos = videos;
      this.setState({ movie, loading: false });
    }).catch(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { loading, movie } = this.state;
    const {
      infoContainer,
      headerContainer,
      loadingContainer,
      ratingContainer,
    } = styles;

    if (loading) {
      return (
        <View style={loadingContainer}>
          <Loading />
        </View>
      );
    }

    const {
      title,
      videos,
      runtime,
      overview,
      genres = [],
      poster_path: pic,
      release_date: date,
      vote_average: rating,
    } = movie;
    const duration = `${Math.floor(runtime / 60)}h ${(runtime % 60)}min`;

    return (
      <>
        <ImageBackground
          source={{ uri: `${resourceBaseUrl}original${pic}` }}
          style={{ width: '100%', height: '100%' }}
        >
          <Container transparency>
            <View style={headerContainer}>
              <View style={{ flex: 1 }}>
                <Text
                  large
                  color={Colors.white}
                >
                  {title}
                </Text>
                <Text>{date}</Text>
              </View>
              {!!videos.length && (
                <Icon
                  large
                  name="play-circle"
                  color={Colors.gold}
                />
              )}
            </View>
            <View style={infoContainer}>
              <View style={{ flex: 1 }}>
                <Text color={Colors.white}>
                  {genres.map(({ name }) => name).join(', ')}
                </Text>
                <Text color={Colors.white}>{duration.toString()}</Text>
              </View>
              <View style={ratingContainer}>
                <View style={{ marginRight: 5 }}>
                  <Icon
                    name="star"
                    color={Colors.gold}
                  />
                </View>
                <Text color={Colors.white}>{rating.toString()}</Text>
              </View>
            </View>
            <View>
              <Text color={Colors.white}>Sinopsi</Text>
              <Text>
                {overview}
              </Text>
            </View>
          </Container>
        </ImageBackground>
      </>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 100,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 60,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
});

export default Movie;
