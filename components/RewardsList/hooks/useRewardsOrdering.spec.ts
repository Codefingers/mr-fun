import { renderHook, act } from '@testing-library/react-hooks'

import { useRewardsOrdering } from "./useRewardsOrdering";

import { mockedRewards, mockedSortedRewards } from '../__fixtures__';

describe('useRewardsOrdering', () => {
  it('Should sort in descending order', () => {
    const { result } = renderHook(() => useRewardsOrdering(mockedRewards))

    act(() => result.current.onOrderKeyChange('points'))

    expect(result.current.orderedRewards).toEqual(mockedSortedRewards)
  })

  it('Should return an empty array when no active ordering key', () => {
    const { result } = renderHook(() => useRewardsOrdering(mockedRewards))

    act(() => result.current.onOrderKeyChange('points'))

    expect(result.current.orderedRewards).toEqual(mockedSortedRewards)

    act(() => result.current.onOrderKeyChange(null))

    expect(result.current.orderedRewards).toEqual([])
  })
})