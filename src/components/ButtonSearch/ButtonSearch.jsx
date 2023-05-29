import React from 'react';
import { BtnSearch } from './ButtonSearch.styled';
export const ButtonSearch = ({children}) => {
  return (
    <BtnSearch type="submit">
      {children}
    </BtnSearch>
  );
};
