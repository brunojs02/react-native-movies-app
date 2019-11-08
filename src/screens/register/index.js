import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Keyboard, StyleSheet } from 'react-native';
import { Colors } from '~/theme';
import {
  Text,
  Button,
  TextInput,
  LoginView,
} from '~/components';
import {
  register,
  changeName,
  changeEmail,
  resetFields,
  changePassword,
} from '~/actions/register-actions';

const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const {
    name,
    email,
    loading,
    password,
    errorMessage,
  } = useSelector(({ registerReducer }) => registerReducer);

  useEffect(() => () => dispatch(resetFields()), []);

  return (
    <LoginView title="Create account.">
      <View style={styles.formContainer}>
        {!!errorMessage && (
          <View style={{ marginHorizontal: 8 }}>
            <Text color={Colors.red}>{errorMessage}</Text>
          </View>
        )}
        <TextInput
          label="Name"
          value={name}
          onChangeText={text => dispatch(changeName(text))}
          autoCapitalize="none"
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => dispatch(changeEmail(text))}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={text => dispatch(changePassword(text))}
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry
        />
      </View>
      <View style={{ marginBottom: 2 }}>
        <Button
          text="Sign Up"
          disabled={!(name && email && password)}
          loading={loading}
          onPress={() => {
            Keyboard.dismiss();
            dispatch(register(navigation));
          }}
        />
        <View style={{ alignSelf: 'center' }}>
          <Button
            transparent
            tintColor={Colors.white}
            text="I already have an account"
            onPress={() => navigation.navigate('auth')}
          />
        </View>
      </View>
    </LoginView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Register;
