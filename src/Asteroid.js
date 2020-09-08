import React from 'react';
import {
  Container,
  Content,
  Spinner,
  Text,
  Thumbnail,
  Card,
  CardItem,
  Body,
} from 'native-base';
import {API_KEY} from '@env';
import styles from './styles';

const Asteroid = ({route}) => {
  const id = route.params?.id;
  const random = !id;
  const [asteroid, setAsteroid] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const URL = 'https://api.nasa.gov/neo/rest/v1/neo/';
  const bg = 'https://source.unsplash.com/collection/235/600x800';

  const fetchRandom = () => {
    fetch(`${URL}browse?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(JSON.stringify(json));
        const list = json.near_earth_objects;
        const randomAsteroid = list[Math.floor(Math.random() * list.length)];
        fetchAsteroid(randomAsteroid.id);
      })
      .catch((err) => {
        console.error('ERROR: ', err);
        setLoading(false);
      });
  };

  const fetchAsteroid = (id) => {
    fetch(`${URL}${id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(JSON.stringify(json));
        setAsteroid(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error('ERROR: ', err);
        setLoading(false);
      });
  };

  React.useEffect(() => {
    if (!random && id) {
      fetchAsteroid(id);
    } else {
      fetchRandom();
    }
  }, []);

  if (loading) {
    return (
      <Container style={styles.container}>
        <Content>
          <Spinner />
        </Content>
      </Container>
    );
  }

  if (!asteroid) {
    return (
      <Container style={styles.container}>
        <Thumbnail large source={{uri: bg}} style={styles.bg} />
        <Content style={styles.content}>
          <Card style={styles.card}>
            <CardItem style={styles.cardItem}>
              <Body>
                <Text style={styles.errorText}>
                  Asteroid with ID: {id ?? 'Random'} not found
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }

  return (
    <Container style={styles.container}>
      <Thumbnail large source={{uri: bg}} style={styles.bg} />
      <Content style={styles.content}>
        <Card style={styles.card}>
          <CardItem header bordered>
            <Text style={styles.heading}>Asteroid Details</Text>
          </CardItem>
          <CardItem style={styles.cardItem}>
            <Body>
              <Text style={styles.nameText}>{asteroid.name}</Text>
              <Text style={styles.urlText}>{asteroid.nasa_jpl_url}</Text>
              <Text
                style={
                  asteroid.is_potentially_hazardous_asteroid
                    ? styles.hazardous
                    : styles.safe
                }>
                Is potentially hazardous:{' '}
                {asteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default Asteroid;
