import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Chat extends Component {
    render() {
        const params = this.props.navigation.state.params;
        return (
        <View>
            <Text>
                {`Chatting with ${params.name}`}
                </Text>
                </View>
        )
    }
};

export default Chat;