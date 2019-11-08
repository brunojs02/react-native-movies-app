import React, { useRef } from 'react';
import {
  View,
  Linking,
  Animated,
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
import { Colors } from '~/theme';
import { useFetch, useRemoteConfig } from '~/hooks';
import { YOUTUBE_URL, THEMOVIEDB_RESOURCE_URL } from '~/constants/firebase-constants';

const Movie = ({ navigation: { getParam, setParams } }) => {
  const movieId = getParam('id', null);
  const { current: animatedHeader } = useRef(new Animated.Value(0));
  const youtubeUrl = useRemoteConfig({ key: YOUTUBE_URL });
  const resourceUrl = useRemoteConfig({ key: THEMOVIEDB_RESOURCE_URL });
  const { response, loading } = useFetch({ path: `/movie/${movieId}?append_to_response=videos,credits` });
  const {
    infoContainer,
    headerContainer,
    ratingContainer,
    loadingContainer,
    backgroundContainer,
  } = styles;
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
  } = response || {};
  const { cast, crew } = credits || {};
  const duration = `${Math.floor(runtime / 60)}h ${(runtime % 60)}min`;

  return (loading
    ? (
      <View style={loadingContainer}>
        <Loading />
      </View>
    )
    : (
      <ImageBackground
        source={{ uri: `${resourceUrl}original${pic}` }}
        style={backgroundContainer}
      >
        <Container
          transparency
          onScroll={(y) => {
            animatedHeader.setValue(y);
            setParams({
              navOptions: {
                title,
                headerStyle: {
                  backgroundColor: animatedHeader.interpolate({
                    inputRange: [0, 36, 44],
                    outputRange: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 1)'],
                    extrapolate: 'clamp',
                  }),
                },
                headerTitleStyle: {
                  color: animatedHeader.interpolate({
                    inputRange: [42, 44],
                    outputRange: ['rgba(255, 255, 2555, 0)', 'rgba(255, 255, 255, 1)'],
                    extrapolate: 'clamp',
                  }),
                },
              },
            });
          }
        }
        >
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
                onPress={() => Linking.openURL(`${youtubeUrl}${videos[0].key}`)}
              >
                <Icon
                  large
                  name="play-circle"
                  color={Colors.green}
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
                  color={Colors.green}
                />
              </View>
              <Text color={Colors.white}>{rating.toString()}</Text>
            </View>
          </View>
          <View style={{ marginHorizontal: 16 }}>
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
    )
  );
};

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
    marginHorizontal: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
