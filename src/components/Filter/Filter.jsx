import { Input } from './Filter.style';
import PropTypes from 'prop-types';

export const Filter = ({ onFilterChange, value }) => (
  <Input type="text" value={value} onChange={onFilterChange} />
);

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
