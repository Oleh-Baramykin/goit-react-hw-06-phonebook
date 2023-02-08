import * as yup from 'yup';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Formik, Form, Field } from 'formik';
import { Label, Button, Fieldset } from './FormList.styled';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(6).required(),
});

const Input = styled(Field)`
  font-size: 25px;
  margin-top: 10px;
  padding-left: 10px;
  height: 40px;
  border-radius: 10px;
  border-width: 1px;
`;
export const FormList = ({ onSubmit }) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={schema}
    >
      <Form>
        <Fieldset>
          <Label htmlFor="name">
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Enter name"
            />
          </Label>
          <Label htmlFor="tel">
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Enter number"
            />
          </Label>
          <Button type="submit">Add constact</Button>
        </Fieldset>
      </Form>
    </Formik>
  );
};

FormList.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
