import RewardCard from '../../components/RewardCard';
import ToggleGroup from '../../components/ToggleGroup';

import { LIST_MUTATION_KEYS } from '../../constants';

import type { Reward } from '../../generated/graphql';

// import { useRewardsFiltering } from './hooks/useRewardsFiltering';
import { useRewardsOrdering } from './hooks/useRewardsOrdering';

import * as Styled from './styled';

interface RewardsListProps {
  rewards: Array<Reward>
}

const RewardsList = ({ rewards }: RewardsListProps) => {
  const { orderedRewards, onOrderKeyChange } = useRewardsOrdering(rewards)

  const rewardsToDisplay = orderedRewards.length ? orderedRewards : rewards

  /**
   * Opted to leave out the filtering due to already spending over the recommended time 
   * and not feeling totally happy with the route of my implementation.
   * I've left this code here and will leave the filter hook in place so you can 
   * at least get an idea of where I was planning to go with it.
   */
  // const { filteredRewards, onFilterKeyChange } = useRewardsFiltering(rewards)
  // const { orderedRewards, onOrderKeyChange } = useRewardsOrdering(filteredRewards.length ? filteredRewards : rewards)

  // const rewardsToDisplay = orderedRewards.length ? orderedRewards : filteredRewards.length ? filteredRewards : rewards

  // let rewardsToDisplay

  // if (orderedRewards.length) {
  //   rewardsToDisplay = orderedRewards
  // } else if (filteredRewards.length) {
  //   rewardsToDisplay = filteredRewards
  // } else {
  //   rewardsToDisplay = rewards
  // }

  /** END */

  return (
    <>
      <Styled.Toolbar>
        <ToggleGroup 
          id="order-by" 
          values={LIST_MUTATION_KEYS} 
          label="Sort Rewards" 
          onChange={onOrderKeyChange} 
        />
        {/* <ToggleGroup id="filter-by" values={LIST_MUTATION_KEYS} label="Filter Rewards" onChange={onFilterKeyChange} /> */}
      </Styled.Toolbar>
      <Styled.Separator decorative />
      <Styled.List>
        {rewardsToDisplay.map(reward => (
          <li key={reward.id}>
            <RewardCard reward={reward} />
          </li>
        ))}
      </Styled.List>
    </>
  )
}

export default RewardsList