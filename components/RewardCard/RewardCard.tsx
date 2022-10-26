import styled from 'styled-components'

import type { Reward } from "../../generated/graphql"

interface RewardCardProps {
  reward: Reward
}

const Card = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.lightGrey};
  padding: ${({ theme }) => theme.padding[2]};
  height: 100%;

  h2 {
    margin-top: 0;
  }

  img {
    width: 100%;
    height: auto;
  }

  p {
    margin-top: ${({ theme }) => theme.margin[2]};
  }
`

const RewardCard = ({ reward }: RewardCardProps) => (
  <Card>
    <h2>{reward.name}</h2>
    <img src={reward.image} alt="" />
    <p>{reward.description}</p>
  </Card>
)

export default RewardCard