import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const App = ({ navigation }) => {
  const appRouteData = [
    { name: 'To Do', route: 'to-do-home' },
    { name: 'Parent Child', route: 'pc-home' },
    { name: 'News Updates', route: 'news-home' },
    { name: 'Gallery ', route: 'insta-home' },
  ];
  const renderItem = ({ item }) => {
    return (
      <AppBtn appName={item.name} route={item.route} navigation={navigation} />
    );
  };
  return (
    <View style={styles.sectionContainer}>
      <FlatList
        data={appRouteData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const AppBtn = ({ appName, route, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.btnStyle}
      onPress={() => navigation.navigate(route)}
    >
      <Text style={styles.btnText}>{appName}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 30,
  },
  btnStyle: {
    elevation: 8,
    backgroundColor: '#CFD5D2',
    borderRadius: 10,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  btnText: {
    fontSize: 18,
    color: '#247A80',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default App;
