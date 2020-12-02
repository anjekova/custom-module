import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TestPackage from 'test-package';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result: </Text>
      <TestPackage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
