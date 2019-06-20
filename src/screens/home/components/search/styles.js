import { StyleSheet } from 'react-native';
import { Colors } from '~/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.darkGrey,
    borderRadius: 8,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    color: Colors.lightGrey,
    paddingVertical: 5,
  },
});

export { styles };
