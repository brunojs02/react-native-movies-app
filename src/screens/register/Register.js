import React, { PureComponent } from 'react';
import { View, Keyboard, StyleSheet } from 'react-native';
import {
  Button,
  TextInput,
  LoginView,
} from '~/components';

class Register extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      loading: false,
      password: null,
    };
  }

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    const {
      name,
      email,
      loading,
      password,
    } = this.state;

    return (
      <LoginView title="Create account.">
        <View style={styles.formContainer}>
          <TextInput
            label="Name"
            value={name}
            onChangeText={text => this.setState({ name: text })}
            autoCapitalize="none"
          />
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
            text="Sign Up"
            disabled={!(name, email && password)}
            loading={loading}
            onPress={() => {
              Keyboard.dismiss();
              this.setState({ loading: true });
              setTimeout(() => {
                navigate('home');
              }, 2000);
            }}
          />
          <View style={{ alignSelf: 'center' }}>
            <Button
              text="I already have an account"
              transparent
              onPress={() => navigate('auth')}
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

export default Register;
