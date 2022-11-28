import styled from 'styled-components';

export const StyledBtn = styled.button`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;
  margin: 0 auto;
  border-radius: 2px;
  background-color: ${p => p.theme.colors.accentColor};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.radii.none};
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.33;
  font-style: normal;
  font-weight: 500;
  max-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hoverColor};
  }
`;
