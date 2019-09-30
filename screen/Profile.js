import React, {Component} from 'react';
import {View, Text, Stylesheet} from 'react-native';
import { Container, Card, CardItem, Header, Left, Body, Thumbnail, Right, Button, Icon, Title, Segment, Content, Item} from 'native-base';



export default class Profile extends Component{
  
    static navigationOptions = {
        title: 'Profile',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="people" style={{ color: tintColor }} />
          ),
        headerStyle: {
        backgroundColor: '#f45fff',
      },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
      }

  
    render(){
        
        return(
            <Container>
                <Header/>
                <Content>
                    <Card style={{flex: 1, flexDirection:'column', alignItems:'center'}}>
                      <CardItem>
                      <Item success>
                      <Icon name='checkmark-circle'/>

                        </Item>
                          
                        <Right>
                            <Button transparent>
                                <Text>View</Text>
                            </Button>
                        </Right>
                    </CardItem>
                    </Card>

                </Content>

            </Container>
        );
    }
}