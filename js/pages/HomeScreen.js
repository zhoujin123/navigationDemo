import * as React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('Detail')}
        title="go to Details"
      />
    </View>
  );
}

export default HomeScreen;
