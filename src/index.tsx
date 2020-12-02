import React, { Component } from 'react';
import { View, Text } from 'react-native';

// export default {
//   multiply(a: number, b: number) {
//     return Promise.resolve(a * b);
//   },
// };

export default class CustomComponent extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>meow</Text>
      </View>
    );
  }
}
