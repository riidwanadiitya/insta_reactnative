import { Body, Header, Icon, Left, Right, Text } from 'native-base'
import React, { Component } from 'react'
import { View } from 'react-native'

export default class AppHeader extends Component {
    render() {
        return (
            <View>
                <Header style={{ backgroundColor: 'white' }}>
                    <Left>
                        <Icon name='camera' />
                    </Left>
                    <Body style={{ marginLeft: 130 }}>
                        <Text >InstaOne</Text>
                    </Body>
                    <Right>
                        <Icon name='paper-plane' />
                    </Right>
                </Header>
            </View>
        )
    }
}
