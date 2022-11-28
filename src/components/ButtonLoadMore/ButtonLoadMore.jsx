import PropTypes from 'prop-types';
import { StyledBtn } from './ButtonLoadMore.styled';

export const ButtonLoadMore = ({ onLoadMore }) => {
  return (
    <StyledBtn type="button" onClick={onLoadMore}>
      Load More
    </StyledBtn>
  );
};

ButtonLoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
