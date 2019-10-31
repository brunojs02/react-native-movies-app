import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Image, StyleSheet } from 'react-native';
import { Colors } from '~/theme';
import { Text, Container } from '~/components';
import { logout } from '~/actions/auth-actions';
import { MenuConfigItem } from './components';

const Settings = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <View style={styles.imageProfileContainer}>
        <Image
          style={{ marginBottom: 6 }}
          source={{ uri: 'https://image.flaticon.com/icons/png/512/149/149071.png', width: 80, height: 80 }}
        />
        <Text numberOfLines={2}>Bruno Santos</Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        <View style={styles.separator} />
        <MenuConfigItem
          icon="edit"
          description="Edit Profile"
        />
        <MenuConfigItem
          icon="git-branch"
          description="Version"
          right={<Text>1.0.0</Text>}
        />
        <MenuConfigItem
          last
          icon="log-out"
          description="Logout"
          onPress={() => dispatch(logout(navigation))}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  imageProfileContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
    paddingHorizontal: 16,
  },
  separator: {
    borderBottomColor: Colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Settings;
