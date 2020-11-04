import { StyleSheet, Dimensions } from 'react-native';

console.log(Dimensions.get('window').width);

export default StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    height: 110,
    width: 106,
  },
  card: {
    margin: 20,
    marginTop: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 7,
    flexDirection: 'column',
    paddingBottom: 50,
  },
  bgImage: {
    width: Dimensions.get('window').width, //for full screen
    height: Dimensions.get('window').height, //for full screen
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    opacity: 0.2,
  },
  termsAndConditionTextContainer: {
    marginVertical: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  termsAndConditionText: {
    color: 'grey',
    fontSize: 18,
  },
  termsAndConditionTextPrimary: {
    color: 'red',
    textDecorationLine: 'underline',
    textDecorationColor: 'red',
  },
});
