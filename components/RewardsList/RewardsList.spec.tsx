import { Providers, render } from '../../util/testing'
import RewardsList from './RewardsList'
import { mockedRewards } from './__fixtures__'

const props = {
  rewards: mockedRewards
}

describe('<RewardsList />', () => {
  it('Should render without having an existential crisis', () => {
    const { container } = render(<RewardsList {...props} />, { wrapper: Providers })

    expect(container).toMatchSnapshot()
  })
})