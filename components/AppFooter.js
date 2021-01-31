import { Button, Footer, FooterTab, Icon, Badge, Text } from 'native-base'
import React, { Component } from 'react'
import { View } from 'react-native'

export class AppFooter extends Component {
    render() {
        return (
            <View>
                <Footer>
                    <FooterTab style={{ backgroundColor: 'white' }}>
                        <Button >
                            <Icon active style={{ color: 'black' }} name='home' />
                        </Button>
                        <Button>
                            <Icon name='search' />
                        </Button>
                        <Button>
                            <Icon name='add' />
                        </Button>
                        <Button badge vertical>
                            <Badge>
                                <Text>2</Text>
                            </Badge>
                            <Icon name='heart' />
                        </Button>
                        <Button>
                            <Icon name='person' />
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        )
    }
}

export default AppFooter
