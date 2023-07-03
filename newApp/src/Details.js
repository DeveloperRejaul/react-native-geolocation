import * as React from 'react';
import {View, Text} from 'react-native';

export default function DetailsScreen({route, navigation}) {
  console.log(route);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() =>
          navigation.setParams({
            name: 'Rahul',
          })
        }>
        Home Screen
      </Text>
      <Text>{route.params.name}</Text>
      <Text>{route.params.itemId}</Text>
      <Text
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: {post: 'Im Post Text'},
          });
        }}>
        Goto Home
      </Text>

      <Text style={{fontSize: 20}} onPress={() => navigation.popToTop()}>
        Pop To Top
      </Text>
    </View>
  );
}
