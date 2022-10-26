import * as React from "react"

import { LIST_MUTATION_KEYS } from "../../../constants"

import type { Reward } from "../../../generated/graphql"

type useRewardsOrderingResult = {
  orderedRewards: Array<Reward>
  onOrderKeyChange: (key: string) => void
}

export const useRewardsOrdering = (rewards: Array<Reward>): useRewardsOrderingResult => {
  const [orderedRewards, setOrderedRewards] = React.useState([])
  const [currentOrderKey, setCurrentOrderKey] = React.useState(null)

  const onOrderKeyChange = (key: string) => {
    const newOrderKey = LIST_MUTATION_KEYS.includes(key) && key !== currentOrderKey
    const resetOrdering = !LIST_MUTATION_KEYS.includes(key) && LIST_MUTATION_KEYS.includes(currentOrderKey)

    if (newOrderKey) {
      const rewardsToSort = [...rewards]

      const sortedRewards = [
        ...rewardsToSort.sort((a, z) => z[key] - a[key])
      ]

      setCurrentOrderKey(key)
      setOrderedRewards(sortedRewards)
      return
    }

    if (resetOrdering) {
      setOrderedRewards([])
      setCurrentOrderKey(null)
      return
    }

    return
  }

  return {
    onOrderKeyChange,
    orderedRewards
  }
}