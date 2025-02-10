import * as React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { Tips } from '../components/Recipies/Tips';
import { Video } from '../components/Recipies/Video';
import { Feather } from '@expo/vector-icons';
import { Recipies } from '../components/Recipies/Recipies';

const renderScene = SceneMap({
  first: Recipies,
  second: Video,
  thirty: Tips,
});

const routes = [
  { key: 'first', title: 'Recipies' },
  { key: 'second', title: 'Videos' },
  { key: 'thirty', title: 'Kitchen Tips' },
];

export const KitchenScreen = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.title}>
        <Feather name='search' size={20} color='gray' />
        <Text style={{ marginHorizontal: 20, color: 'gray' }}>300+ Recipies</Text>
      </TouchableOpacity>

      <View style={{ flex: 1 }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={props => (
            <TabBar
              {...props}
              style={{ backgroundColor: '#fff' }}
              indicatorStyle={{ backgroundColor: '#ff7979', height: 2 }}
              activeColor={'black'}
              inactiveColor={'#4b4b4b'}
            />
          )}
        />
      </View>

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 5,
  },
  container: {
    flex: 1
  },
})