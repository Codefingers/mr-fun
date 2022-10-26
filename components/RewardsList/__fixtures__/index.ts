import type { Reward } from "../../../generated/graphql";

export const mockedRewards = [
  {
    id: '__TEST_REWARD_ID_1__',
    name: '__TEST_REWARD_NAME_1__',
    image: '__TEST_IMAGE_URL_1__',
    description: '__TEST_DESCRIPTION_1__',
    points: 5
  },
  {
    id: '__TEST_REWARD_ID_2__',
    name: '__TEST_REWARD_NAME_2__',
    image: '__TEST_IMAGE_URL_2__',
    description: '__TEST_DESCRIPTION_2__',
    points: 500
  },
  {
    id: '__TEST_REWARD_ID_3__',
    name: '__TEST_REWARD_NAME_3__',
    image: '__TEST_IMAGE_URL_3__',
    description: '__TEST_DESCRIPTION_3__',
    points: 7
  }
] as unknown as Array<Reward>

export const mockedSortedRewards = [
  {
    id: '__TEST_REWARD_ID_2__',
    name: '__TEST_REWARD_NAME_2__',
    image: '__TEST_IMAGE_URL_2__',
    description: '__TEST_DESCRIPTION_2__',
    points: 500
  },
  {
    id: '__TEST_REWARD_ID_3__',
    name: '__TEST_REWARD_NAME_3__',
    image: '__TEST_IMAGE_URL_3__',
    description: '__TEST_DESCRIPTION_3__',
    points: 7
  },
  {
    id: '__TEST_REWARD_ID_1__',
    name: '__TEST_REWARD_NAME_1__',
    image: '__TEST_IMAGE_URL_1__',
    description: '__TEST_DESCRIPTION_1__',
    points: 5
  }
]