import React, { PureComponent } from 'react';
import { View, Keyboard, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  Button,
  TextInput,
  LoginView,
} from '~/components';

class Auth extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      loading: false,
      password: null,
    };
  }

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    const { email, password, loading } = this.state;

    return (
      <LoginView title="Welcome back.">
        <View style={styles.formContainer}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => this.setState({ email: text })}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={text => this.setState({ password: text })}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
          />
        </View>
        <View style={{ marginBottom: 2 }}>
          <Button
            text="Sign In"
            disabled={!(email && password)}
            loading={loading}
            onPress={() => {
              Keyboard.dismiss();
              this.setState({ loading: true });
              auth().signInWithEmailAndPassword(email, password).then((res) => {
                this.setState({ loading: false });
                navigate('home');
              }).catch((e) => {
                this.setState({ loading: false });
              });
            }}
          />
          <View style={{ alignSelf: 'center' }}>
            <Button
              text="Create an account"
              transparent
              onPress={() => navigate('register')}
            />
          </View>
        </View>
      </LoginView>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Auth;
