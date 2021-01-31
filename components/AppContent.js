import { Body, Card, CardItem, Content, Icon, Left, Right, Text, Thumbnail } from 'native-base'
import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';

const isiContent = [
    {
        nama: 'Anggika',
        profil: 'https://awsimages.detik.net.id/community/media/visual/2019/01/09/b48e0da6-9d88-44ce-8b2b-5164a234f912_43.jpeg?w=700&q=90',
        gambar: 'https://www.tempatwisata.pro/media/uploads/3065/eea5f15133f3b60e7b4519f788c83818.jpg',
        caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        lokasi: 'Bogor'
    },
    {
        nama: 'Jane',
        profil: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Jennifer_Lawrence_at_the_83rd_Academy_Awards_crop.jpg',
        gambar: 'https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc3NjU2MjA4ODc2ODcz/this-day-in-history-03311889---eiffel-tower-opens.jpg',
        caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        lokasi: 'Prancis'
    },
    {
        nama: 'Yui',
        profil: 'https://3.bp.blogspot.com/-v83OLx1c3mI/UECBELzLwiI/AAAAAAAAAhA/Xuek-zMsn6I/s1600/YUI+HELLO.jpg',
        gambar: 'https://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/038/800/original/pixta_36552332_M_t.jpg?2019&d=750x400',
        caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        lokasi: 'Tokyo'
    },
]

export class AppContent extends Component {
    render() {
        return (
            <ScrollView>
                <Content>

                    {isiContent.map((data, idx) => {
                        return (
                            <Card key={idx}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={{ uri: data.profil }} />
                                        <Body>
                                            <Text>{data.nama}</Text>
                                            <Text note>{data.lokasi}</Text>
                                        </Body>
                                    </Left>
                                    <Right>
                                        <Icon name='apps' />
                                    </Right>
                                </CardItem>

                                <CardItem cardBody>
                                    <Image source={{ uri: data.gambar }}
                                        style={{ height: 300, flex: 1 }}
                                    />
                                </CardItem>

                                <CardItem>
                                    <Icon style={{ marginRight: 20, color: 'grey' }} name='heart' />
                                    <Icon style={{ marginRight: 20, color: 'grey' }} name='apps' />
                                    <Icon style={{ marginRight: 20, color: 'grey' }} name='paper-plane' />
                                </CardItem>

                                <CardItem>
                                    <Left>
                                        <Icon name='heart' style={{ fontSize: 20, color: 'red' }} />
                                        <Text>10 Likes</Text>
                                    </Left>
                                </CardItem>

                                <CardItem>
                                    <Text>
                                        {data.caption}
                                    </Text>
                                </CardItem>

                            </Card>
                        )
                    })}

                </Content>
            </ScrollView>
        )
    }
}

export default AppContent
