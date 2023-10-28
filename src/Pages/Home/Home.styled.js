import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLink = styled(Link)`
  text-decoration: none;
  padding: 2px 8px;

  &:hover {
    border-radius: 5px;
    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);
  }
`;
export const MovieList = styled.ul`
  padding: 14px 0 14px;
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Title = styled.h2`
  margin-top: 24px;
  margin-bottom: 0;
`;