import React, {Component} from 'react';
import {View, Text, Stylesheet} from 'react-native';
import { Container, Card, CardItem,  List, ListItem, Header, Left, Body, Thumbnail, Right, Button, Icon, Title, Segment, Content, Item} from 'native-base';



export default class Main extends Component{

    static navigationOptions = {
        title: 'Manage',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="briefcase" style={{ color: tintColor }} />
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
                          <Left>
                              
                              <Body>
                                  <Text style={{fontSize: 30, fontStyle:'bold'}}>$ 50.00</Text>
                                  
                              </Body>
                          </Left>
                   
                      </CardItem>
                      </Card>
                      <List>
            <ListItem selected>
              <Left>
                <Icon name="cash"/>
              </Left>
              <Left>
                <Text>GrabPay</Text>
              </Left>
              <Right>
                <Text>$50</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Icon name="cash"/>
              </Left>
              <Left>
                <Text>Touch n Go</Text>
              </Left>
              <Right>
                <Text>$50</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Icon name="cash"/>
              </Left>
              <Left>
                <Text>JomPay</Text>
              </Left>
              <Right>
                <Text>$50</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Icon name="cash"/>
              </Left>
              <Left>
                <Text>Touch n Go</Text>
              </Left>
              <Right>
                <Text>$50</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Icon name="cash"/>
              </Left>
              <Left>
                <Text>JomPay</Text>
              </Left>
              <Right>
                <Text>$50</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Icon name="cash"/>
              </Left>
              <Left>
                <Text>Touch n Go</Text>
              </Left>
              <Right>
                <Text>$50</Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Icon name="cash"/>
              </Left>
              <Left>
                <Text>JomPay</Text>
              </Left>
              <Right>
                <Text>$50</Text>
              </Right>
            </ListItem>
          </List>

          <Button 
          rounded style={{marginTop: 30}}
             title="Pay Now"
             onPress={() => Alert.alert('Working. Haha')}
             />
                </Content>

            </Container>
        );
    }
}