import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import CanvasAnimation from '../CanvasAnimation/CanvasAnimation';
import { Container, Title, SubTitle } from './App.styled';

const App = () => {
  return (
    <Container>
      <CanvasAnimation />
      <Title>Phone Book</Title>

      <ContactForm />

      <SubTitle>Contacts</SubTitle>

      <Filter />

      <ContactList />
    </Container>
  );
};

export default App;
