import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  incidents: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 8,
    marginTop: 8
  },
  incidentsProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },
  incidentsValue: {
    marginTop: 5,
    marginBottom: 8,
    fontSize: 15,
    color: '#737380'
  },
  contactBox: {
    paddingTop: 10,
    paddingBottom: 17,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#13131a',
    lineHeight: 30
  },
  contactSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#13131a',
    lineHeight: 30
  },
  contactDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 16
  },
  actions: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between'
  },
  actionsButton: {
    width: '48%',
    backgroundColor: '#e02041',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionsText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});