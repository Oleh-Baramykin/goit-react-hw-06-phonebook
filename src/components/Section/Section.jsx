import PropTypes from 'prop-types';
import { Title, SectionWrap } from './Section.srtyled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrap>
      <Title>{title}</Title>
      {children}
    </SectionWrap>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
