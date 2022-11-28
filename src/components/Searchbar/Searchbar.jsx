import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
  StyledSearchbar,
  SearchFormBtn,
  SearchFormBtnLabel,
  StyledForm,
  SearchFormInput,
} from './Searchbar.styled';

const initialValues = {
  query: '',
};

const shema = Yup.object().shape({
  query: Yup.string(),
});

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = ({ query }, { resetForm }) => {
    onSubmit(query);
    resetForm();
  };
  return (
    <StyledSearchbar>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={shema}
      >
        <StyledForm>
          <SearchFormBtn type="submit">
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchFormInput
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage name="query" component="p" />
        </StyledForm>
      </Formik>
    </StyledSearchbar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
