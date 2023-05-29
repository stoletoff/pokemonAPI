import React from 'react';
import { ButtonSearch } from 'components/ButtonSearch';
import { SearchHeader, BtnSearchText } from './SearchBar.styled';
import {ReactComponent as SearchIcon} from '../../svg/search.svg'
export const SearchBar = () => {
  return (
    <SearchHeader>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
      <ButtonSearch><SearchIcon/><BtnSearchText>Search</BtnSearchText></ButtonSearch>
    </SearchHeader>
  );
};
