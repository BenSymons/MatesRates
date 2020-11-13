import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontFamily: 'Changa One',
    fontWeight: 'bold',
    color: '#0F0508',
    alignContent: 'center',
  },
  contentText: {
    fontSize: 15,
    fontFamily: 'Changa',
    color: '#0F0508',
    textAlign: 'center',
  },
  cardContainer: {
    backgroundColor: '#4E2D3E',
    alignItems: 'center',
    flex: 1,
  },
  //#4E2D3E #F8A677
  imageContainer: {
    resizeMode: 'contain',
  },
  appButtonContainer: {
    backgroundColor: '#4E2D3E',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});

// Family font: Changa
// Colour scheme: FAA275 salmon, FF8C61 darker SALMON , 5C374C Dark Byzantium
// Header: Changa One
// ScrollView components
// Title Text Components
// Button Components
export default styles;
