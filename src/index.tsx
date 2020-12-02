import React, { Component } from 'react';
import { View, Text } from 'react-native';

export interface Props {
  title: string;
  color: string;
}

export interface State {
  title: string;
  color: string;
}

export default class CustomComponent extends Component<Props, State> {
  static defaultProps = {
    title: 'meow',
    color: '#FFF',
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      title: this.props.title,
      color: this.props.color,
    };
  }

  render() {
    return (
      <View>
        <Text>{this.state.title}</Text>
        <Text>{this.state.color}</Text>
      </View>
    );
  }
}
