import PropTypes from 'prop-types';
import { Button, Li } from './ContactList.styled';

export const ContactList = ({ listAbonents, deleteContact }) => (
  <ul style={{ margin: '0' }}>
    {listAbonents.map(({ id, name, number }) => (
      <Li key={id} style={{ listStyle: 'none' }}>
        {name}: {number}
        <Button onClick={() => deleteContact(id)}>Delete</Button>
      </Li>
    ))}
  </ul>
);

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  listAbonents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
