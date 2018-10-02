import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './reducer';
import RepoList from './RepoList';

const client = axios.create({
    baseURL: 'https://api.github.com',
    responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends React.Component {
    render() {
        return (
            // <Container>
            //     <Header />
            //     <Content />
            //     <Footer>
            //         <FooterTab>
            //             <Button>
            //                 <Icon name="home" />
            //             </Button>
            //             <Button active>
            //                 <Icon active name="camera" />
            //             </Button>
            //             <Button>
            //                 <Icon name="person" />
            //             </Button>
            //         </FooterTab>
            //     </Footer>
            // </Container>
            <Provider store={store}>
                <View style={styles.container}>
                    <RepoList />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 200
    },
    welcome_image: {
        justifyContent: 'flex-start'
    },
    welcome_text: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 32,
        fontWeight: '500'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50
    }
});
