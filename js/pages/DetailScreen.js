import * as React from 'react';
import {View, Text, Button} from 'react-native';

export default function DetailScreen({navigation}) {
  return (
    <View>
      <Text>DetailScreen</Text>
      <Button title="go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="go to Detail again"
        onPress={() => navigation.push('Detail')}
      />
      <Button title="go back" onPress={() => navigation.goBack('Detail')} />
    </View>
  );
}
