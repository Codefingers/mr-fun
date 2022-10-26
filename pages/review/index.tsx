import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import Basket from '../../components/Basket/Basket';
import TicketList from '../../components/TicketList/TicketList';

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const campaign_id = '001';

const CAMPAIGN_QUERY = gql`
  query Campaign($id: ID!) {
    Campaign(id: $id) {
      title
      Products {
        id
        title
        price
      }
    }
  }
`;

const Review = () => {
  const { loading, data } = useQuery(CAMPAIGN_QUERY, {
    variables: { id: campaign_id },
  });

  if (loading) {
    return <>Loading</>;
  }

  const { Products, title } = data?.Campaign;

  return (
      <ReviewContainer>
        <TicketList key="listings" title={title} products={Products || []} />
        {/* <div className="basket"> */}
          <Basket />
        {/* </div> */}
      </ReviewContainer>
  );
};

export default Review;
