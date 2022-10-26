import userEvent from '@testing-library/user-event'

import { Providers, render, screen } from '../../util/testing'

import ToggleGroup from './ToggleGroup'


const mockOnChange = jest.fn()

const props = {
  id: '__TEST_ID__',
  values: ['_TEST_VALUE_1_', '_TEST_VALUE_2_', '_TEST_VALUE_3_'],
  onChange: mockOnChange
}

const mockLabel = "__TEST_LABEL__"

describe('<ToggleGroup />', () => {
  it('Should render without having an existential crisis', () => {
    const { container } = render(<ToggleGroup {...props} />, { wrapper: Providers })

    expect(screen.getByRole('radio', { name: props.values[0]})).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: props.values[1]})).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: props.values[2]})).toBeInTheDocument()
    expect(screen.queryByRole('label', { name: mockLabel })).not.toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('Should render with a label', () => {
    render(<ToggleGroup {...props} label={mockLabel} />, { wrapper: Providers })

    expect(screen.getByRole('label', { name: mockLabel })).toBeInTheDocument()
  })

  it('Should fire onChange when clicked', async () => {
    render(<ToggleGroup {...props}  />, { wrapper: Providers })

    const toggleButton = screen.getByRole('radio', { name: props.values[0]})

    // Not sure why I need to await the userEvent here. The test is failing otherwise...
    // That said, with the fact tests are taking so long to run (20s) and
    // how much trouble I had getting them to run in the first place
    // I will leave this as is. Just wanted to flag that I would normally
    // spend more time debugging why this is happening.
    await userEvent.click(toggleButton)

    expect(mockOnChange).toHaveBeenNthCalledWith(1, props.values[0])
  })
})