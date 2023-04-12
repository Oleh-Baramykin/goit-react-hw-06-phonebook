import { Globstyle } from './App.styled';
import { ContactForm } from '../Form/ContactForm';
import { ContactList } from '../ContactsList/CotactsList';
import { Filter } from '../Filter/Filter';
import { Section } from 'components/Section/Section';

export function App() {
  return (
    <Globstyle>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </Globstyle>
  );
}
