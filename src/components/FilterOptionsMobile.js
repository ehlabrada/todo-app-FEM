import React from "react";
import {
  FilterOptionsMobileWrapper,
  InputGroupRadio,
} from "./styles/FilterOptionsMobile.styled";

const FilterOptionsMobile = (props) => {
  return (
    <FilterOptionsMobileWrapper>
      <InputGroupRadio active={props.filterActive.filter === "all"}>
        <label htmlFor="filter-all">All</label>
        <input
          type="radio"
          id="filter-all"
          value="all"
          checked={props.filterActive.filter === "daily"}
          name="filter"
          onChange={props.handleChangeFilterOption}
        />
      </InputGroupRadio>
      <InputGroupRadio active={props.filterActive.filter === "active"}>
        <label htmlFor="filter-active">Active</label>
        <input
          type="radio"
          id="filter-active"
          value="active"
          checked={props.filterActive.filter === "active"}
          name="filter"
          onChange={props.handleChangeFilterOption}
        />
      </InputGroupRadio>
      <InputGroupRadio active={props.filterActive.filter === "completed"}>
        <label htmlFor="filter-completed">Completed</label>
        <input
          type="radio"
          id="filter-completed"
          value="completed"
          checked={props.filterActive.filter === "completed"}
          name="filter"
          onChange={props.handleChangeFilterOption}
        />
      </InputGroupRadio>
    </FilterOptionsMobileWrapper>
  );
};

export default FilterOptionsMobile;
