import { screen, render } from '@testing-library/react'

import { Reward } from '../../generated/graphql'
import { Providers } from '../../util/testing';
import RewardCard from './RewardCard'

const props = {
  reward: {
    name: '__TEST_REWARD_NAME__',
    image: '__TEST_IMAGE_URL__',
    description: '__TEST_DESCRIPTION__'
  } as unknown as Reward
}

 
describe('<RewardCard />', () => {
  it('Should render without having an existential crisis', () => {
    const { container } = render(<RewardCard {...props} />, { wrapper: Providers } )

    expect(screen.getByRole('heading', { name: props.reward.name })).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', props.reward.image)
    expect(screen.getByRole('img')).toHaveAttribute('alt', "")
    expect(screen.getByText(props.reward.description)).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
