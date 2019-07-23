import React, { PureComponent } from 'react';
import {
  View,
  Linking,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  Icon,
  Text,
  Loading,
  Container,
  List,
  Person,
} from '~/components';
import { api } from '~/services';
import { Colors } from '~/theme';
import { themoviedb, youtube } from '~/../env.json';

class Movie extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: null,
    };
  }

  componentDidMount() {
    const { navigation: { getParam } } = this.props;
    const id = getParam('id', null);

    api.get(`/movie/${id}?append_to_response=videos,credits`).then(({ data }) => {
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
      ratingContainer,
      loadingContainer,
      backgroundContainer,
    } = styles;

    if (loading) {
      return (
        <View style={loadingContainer}>
          <Loading />
        </View>
      );
    }

    const {
      credits,
      title,
      videos,
      runtime,
      overview,
      genres = [],
      poster_path: pic,
      release_date: date,
      vote_average: rating,
    } = movie;
    const { cast, crew } = credits;
    const duration = `${Math.floor(runtime / 60)}h ${(runtime % 60)}min`;

    return (
      <ImageBackground
        source={{ uri: `${themoviedb.resourceUrl}original${pic}` }}
        style={backgroundContainer}
      >
        <Container transparency>
          <View style={headerContainer}>
            <View style={{ flex: 1 }}>
              <Text
                bold
                large
                color={Colors.white}
              >
                {title}
              </Text>
              <Text>{date.split('-')[0]}</Text>
            </View>
            {!!videos.length && (
              <TouchableOpacity
                onPress={() => Linking.openURL(`${youtube.url}${videos[0].key}`)}
              >
                <Icon
                  large
                  name="play-circle"
                  color={Colors.gold}
                />
              </TouchableOpacity>
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
          <View style={{ marginTop: 20 }}>
            <List
              data={crew.filter(({ job }) => job === 'Director')}
              title="Directors"
              renderItem={({ item: { id, name, profile_path: profilePath } }) => (
                <Person
                  id={id}
                  name={name}
                  profilePath={profilePath}
                />
              )}
            />
          </View>
          <View>
            <List
              data={cast}
              title="Actors"
              renderItem={({ item }) => {
                const {
                  id,
                  name,
                  character,
                  profile_path: profilePath,
                } = item;

                return (
                  <Person
                    id={id}
                    name={name}
                    character={character}
                    profilePath={profilePath}
                  />
                );
              }}
            />
          </View>
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 70,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
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
