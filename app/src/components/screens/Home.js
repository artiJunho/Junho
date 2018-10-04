import React, { Component }             from 'react';
import { View, Text, Button }           from 'react-native';

export class Home extends Component {
    static navigationOptions = {
        title: 'Welcome to Junho',
        headerStyle: {
            backgroundColor: '#2dc997',
        },
        headerTitleStyle: {
            color: 'white'
        }
    };
    render() {
        const navigate = this.props.navigation.navigate,
            players = {
                keylor: { name: 'Keylor' },
                pipo: { name: 'Pipo' },
                celso: { name: 'Celso' },
                bryan: { name: 'Bryan' },
                joel: { name: 'Joel' }
            },
            games = [
                {
                    team: 'Chile',
                    venue: 'Estadio Santiago',
                    lineup: [ players.keylor, players.pipo ]
                },
                {
                    team: 'Brazil',
                    venue: 'Maracaná',
                    lineup: [ players.celso, players.bryan ]
                },
                {
                    team: 'Sweden',
                    venue: 'Stockholm Stadium',
                    lineup: [ players.joel ]
                },
                {
                    team: 'USA',
                    venue: 'Soldier Field',
                    lineup: [ players.keylor, players.joel, players.bryan, players.pipo ]
                }
            ];
        return (
        <View>
            { games.map((game, i) => {
            return (
                <Button 
                    key={i} onPress={() => navigate('Game', { game: game })} title={`See game agaist ${game.team}`}/>
                )
            }) };
        </View>
        )
    }
}

export default Home