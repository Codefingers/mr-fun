import * as React from "react"

import { LIST_MUTATION_KEYS } from "../../../constants"

import type { Reward } from "../../../generated/graphql"

type useRewardsFilteringResult = {
  filteredRewards: Array<Reward>
  onFilterKeyChange: (key: string) => void
}

export const useRewardsFiltering = (rewardsToFilter: Array<Reward>): useRewardsFilteringResult => {
  const [filteredRewards, setFilteredRewards] = React.useState([])
  const [currentFilterKey, setCurrentFilterKey] = React.useState(null)

  const onFilterKeyChange = (key: string) => {
    const newFilterKey = LIST_MUTATION_KEYS.includes(key) && key !== currentFilterKey
    const resetFiltering = !LIST_MUTATION_KEYS.includes(key) && LIST_MUTATION_KEYS.includes(currentFilterKey)

    if (newFilterKey) {
      const filteredRewards = rewardsToFilter.filter(reward => reward[key])

      setCurrentFilterKey(key)
      setFilteredRewards(filteredRewards)
      return
    }

    if (resetFiltering) {
      setFilteredRewards([])
      setCurrentFilterKey(null)
      return
    }

    return
  }

  return {
    filteredRewards,
    onFilterKeyChange
  }
}
