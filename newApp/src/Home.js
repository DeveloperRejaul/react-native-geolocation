import * as React from 'react';
import {View, Text, Button} from 'react-native';

export default function HomeScreen({navigation, route, options, back}) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  console.log(back);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() =>
          navigation.navigate('Details', {
            name: 'rejaul',
          })
        }>
        Home Screen
      </Text>
      <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
      <Button
        title="Update the title"
        onPress={() =>
          navigation.setOptions({
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })
        }
      />
      <Text>Count: {count}</Text>
    </View>
  );
}
