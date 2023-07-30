import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import CanvasAnimation from '../CanvasAnimation/CanvasAnimation';
import { useState } from 'react';
import { addContact, deleteContact } from 'Redux/Slices';
import { Container, Wrapper, Title, SubTitle } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from '../../Redux/selectors';
const App = () => {
  const contact = useSelector(getContact) || [];
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const addNewContact = newContact => {
    const isContactInList = contact.some(
      ({ name }) =>
        name.trim().toLowerCase() === newContact.name.trim().toLowerCase()
    );

    if (isContactInList) {
      alert(`${newContact.name} already exists in contacts`);
      return;
    }

    dispatch(addContact(newContact.name, newContact.number));
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contact.filter(con => {
      const contactName = con.name.toLowerCase();

      return contactName.includes(normalizedFilter);
    });
  };


  const removeContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Container>
      <CanvasAnimation />
      <Title>Phone Book</Title>

      <ContactForm onSubmit={addNewContact} />

      <SubTitle>Contacts</SubTitle>
      {contact.length > 0 ? (
        <Filter value={filter} onChangeFilter={changeFilter} />
      ) : (
        <Wrapper>Your phone book is empty. Add the first contact!</Wrapper>
      )}
      {contact.length > 0 && (
        <ContactList
          contacts={getVisibleContacts()}
          onRemoveContact={removeContact}
        />
      )}
    </Container>
  );
};

export default App;