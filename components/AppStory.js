import { Card, CardItem, Content, Text, Thumbnail } from 'native-base'
import React, { Component } from 'react';

const story = [
    {
        nama: 'Your Story',
        gambar: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        nama: 'George',
        gambar: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        nama: 'Dita',
        gambar: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        nama: 'Nur',
        gambar: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        nama: 'John',
        gambar: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        nama: 'Chloe',
        gambar: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        nama: 'Adit',
        gambar: 'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
]

export class AppStory extends Component {
    render() {
        return (
            <Content horizontal>
                {story.map((data, index) => {
                    return (
                        <Card style={{ height: 110 }} key={index} transparent>
                            <CardItem style={{ flexDirection: 'column' }}>
                                <Thumbnail source={{ uri: data.gambar }} />
                                <Text>{data.nama}</Text>
                            </CardItem>
                        </Card>

                    )
                })}

            </Content>
        )
    }
}

export default AppStory
