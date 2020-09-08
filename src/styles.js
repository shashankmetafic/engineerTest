import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  bg: {
    position: 'absolute',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  input: {
    textAlign: 'center',
    marginTop: 24,
    marginHorizontal: 12,
  },
  card: {
    marginTop: 48,
    alignSelf: 'center',
    width: Dimensions.get('screen').width - 24,
  },
  btn: {
    alignSelf: 'center',
    marginTop: 4,
    marginBottom: 8,
    width: Dimensions.get('screen').width / 2,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 24,
  },
  errorText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 18,
    color: '#ff5555',
    paddingVertical: 36,
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    flex: 1,
  },
  nameText: {
      fontSize: 22,
  },
  urlText: {
      fontSize: 14,
  },
  hazardous: {},
  safe: {},
});

export default styles;
