import { List, Item, Button, Text, Spinner } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectFilteredContacts,
} from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from '../../redux/operations';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const delContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <Spinner />}

      {!filteredContacts?.length && !error && !isLoading && (
        <Text>Your phone book is empty. Add the first contact!</Text>
      )}
      {error && <Text>{error}</Text>}
      <List>
        {filteredContacts.map(({ id, name, number }) => (
          <Item key={id}>
            {`${name} : ${number}`}
            <Button type="button" name="delete" onClick={() => delContact(id)}>
              Delete
            </Button>
          </Item>
        ))}
      </List>
    </>
  );
};

export default ContactList;
