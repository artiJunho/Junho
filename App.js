import React                            from 'react';
import { AppRegistry, StyleSheet  }     from 'react-native';
import { createStackNavigator }         from 'react-navigation';

import HomeScreen                       from './app/src/components/screens/Home';
import GameScreen                       from './app/src/components/screens/Game';
import ProfileScreen                    from './app/src/components/screens/Profile';

const JunhoApp = createStackNavigator({
    Home: { screen: HomeScreen },
    Game: { screen: GameScreen },
    Profile: { screen: ProfileScreen }
}, {
    InitialRoute: 'Home'
});

AppRegistry.registerComponent('JunhoApp', () => JunhoApp);

export default class App extends React.Component {
    render() {
        return (
            <JunhoApp />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 200
    }
});
