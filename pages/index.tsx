import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const IndexPage = () => (
  <PageContainer>
    <h2>Welcome to the Reviewify code test</h2>
    <a href="/review">Part 1: Review</a>
    <a href="/task">Part 2: Task</a>
  </PageContainer>
);

export default IndexPage;
