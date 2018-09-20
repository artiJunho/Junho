import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <Header />
                <Content />
                <Footer>
                    <FooterTab>
                        <Button>
                            <Icon name="home" />
                        </Button>
                        <Button active>
                            <Icon active name="camera" />
                        </Button>
                        <Button>
                            <Icon name="person" />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
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
});
