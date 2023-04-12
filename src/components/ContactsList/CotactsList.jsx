import { Button, Li, Ul } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilterValue } from 'redux/filterSlice';
import {
  noMatchesNotify,
  noContactsNotify,
} from 'components/Notification/Notification';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);

  const filteredContacts = () => {
    // const normalizedFilter = filter.toLowerCase();
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    if (filtered.length === 0 && filter) {
      noMatchesNotify();
    }
    if (contacts.length === 0) {
      noContactsNotify();
    }

    return filtered;
  };

  return (
    <Ul>
      {filteredContacts().map(({ id, name, number }) => (
        <Li key={id}>
          {name}: {number}
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </Li>
      ))}
    </Ul>
  );
};
