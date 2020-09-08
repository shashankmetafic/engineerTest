import React from 'react';
import {
  Container,
  Content,
  Input,
  Item,
  Button,
  Text,
  Thumbnail,
  Card,
  CardItem,
  Body,
} from 'native-base';
import styles from './styles';

const Form = ({navigation}) => {
  const bg = 'https://source.unsplash.com/collection/235/600x800';
  const [id, setId] = React.useState('');

  return (
    <Container style={styles.container}>
      <Thumbnail large source={{uri: bg}} style={styles.bg} />
      <Content style={styles.content}>
        <Card style={styles.card}>
        <CardItem header bordered>
            <Text style={styles.heading}>Welcome to Asteroid Details</Text>
          </CardItem>
          <CardItem style={styles.cardItem} bordered>
            <Body>
              <Item style={styles.inputContainer}>
                <Input
                  value={id}
                  onChangeText={setId}
                  placeholder="Enter Asteroid ID"
                  style={styles.input}
                />
              </Item>
              <Button
                rounded
                style={styles.btn}
                onPress={() => navigation.navigate('Asteroid', {id: id})}
                disabled={!id}>
                <Text>Submit</Text>
              </Button>
              <Button
                bordered
                info
                rounded
                style={styles.btn}
                onPress={() => navigation.navigate('Asteroid')}>
                <Text>Random Asteroid</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default Form;
