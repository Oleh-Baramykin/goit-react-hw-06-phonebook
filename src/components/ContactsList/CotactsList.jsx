import PropTypes from 'prop-types';
import { Button, Li, Ul } from './ContactList.styled';

export const ContactList = ({ listAbonents, deleteContact }) => (
  <Ul>
    {listAbonents.map(({ id, name, number }) => (
      <Li key={id}>
        {name}: {number}
        <Button onClick={() => deleteContact(id)}>Delete</Button>
      </Li>
    ))}
  </Ul>
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
