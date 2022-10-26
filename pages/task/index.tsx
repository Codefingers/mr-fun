import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import styled from 'styled-components'

import type { Query } from '../../generated/graphql';

import RewardsList from '../../components/RewardsList';

const REWARDS_QUERY = gql`
  query allRewards($page: Int!) {
    allRewards(page: $page) {
      id
      name
      image
      description
      capPerReviewifyMember
      points
      quantity
    }
  }
`;

const StyledHeading = styled.h1`
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
`

const Task = () => {
  const { data, loading, error } = useQuery<Query>(REWARDS_QUERY, {
    variables: {
      page: 0,
    },
  });

  return (
    <>
      <StyledHeading>Tiësto's Barcelona Weekender - Rewards</StyledHeading>
      { loading && 'Loading...'}
      { !loading && error && 'Error with the query'}
      { !loading && data?.allRewards?.length && (
        <RewardsList rewards={data.allRewards} />
      )}
    </>
  )

};

export default Task;
