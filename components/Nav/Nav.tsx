import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.ul`
  background: #1D2433;
  list-style: none;
  padding: 0 32px;
  margin: 0;

  li {
    display: inline-block;
  }

  a {
    display: block;
    padding: 16px;
    color: #838FA6;
    text-decoration: none;

    &:hover {
      color: #C5CCD9;
    }
  }
`;

export const Nav = () => (
  <NavContainer>
    <li>
      <a href="/review">Part 1: Review</a>
    </li>
    <li>
      <a href="/task">Part 2: Task</a>
    </li>
  </NavContainer>
);
