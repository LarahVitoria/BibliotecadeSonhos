import { Typography } from '@mui/material';
import React from 'react';
import { Container, Image, Text } from './style';


const Home: React.FC = () => {
  return (
    <Container>
      <Text>
        <h1>
          Seja bem-vindx, <br />
          a Biblioteca de Sonhos
        </h1>
        <Typography>
          Esse projeto foi pensado em facilitar o encontro e 
          reserva dos livros de uma forma mais prática e fácil.
        </Typography>
      </Text>
      <Image>
        <img src="src/Assets/livros.png"/>
        <Typography>
        "Se existem tantos livros para ler, é porque ainda 
        existe muita coisa para se aprender."
        </Typography>
      </Image>
    </Container>
  );
}

export default Home;