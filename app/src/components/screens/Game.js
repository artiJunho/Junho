import React, { Component }             from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export class Game extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.game.team,
        headerStyle: {
            backgroundColor: '#e74c3c',
            height: 85
        },
        headerTitleStyle: {
            color: 'white',
        },
        headerBackTitleStyle: {
            color: 'white'
        },
        headerRight: (
            <TouchableOpacity
                onPress={() => {
                    const game = { ...navigation.state.params.game }
                    if (game.lineup.some(player => player.name === 'Me'))
                        return
                    game['lineup'] = [...game.lineup, { name: 'Me' }]
                    navigation.setParams({
                        game,
                    })
                }}
                
                style={{
                    height: 45,
                    width: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(250, 250, 250, 0.7)',
                    borderRadius: 50,
                    margin: 5,
                    shadowColor: 'black',
                    shadowOpacity: 0.5,
                    shadowOffset: {
                        width: 2,
                        height: 2,
                    }
                }}
            >
                <Text style= {{ fontSize: 30, color: '#2980b9'}}>
                    ✌︎
                </Text>
            </TouchableOpacity>)
    })
    render() {
        const { game } = this.props.navigation.state.params;
        return (
            <View>
                <Text>
                    {`Playing against ${game.team}`}
                </Text>
                <Text>
                    {`Stadium: ${game.venue}`}
                </Text>
                <Text>
                    {`Line up: ${game.lineup.map(p => p.name)}`}
                </Text>
            </View>
        )
    }
};

export default Game;