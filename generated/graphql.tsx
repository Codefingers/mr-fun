import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Campaign = {
  __typename?: 'Campaign';
  Products?: Maybe<Array<Maybe<Product>>>;
  Rewards?: Maybe<Array<Maybe<Reward>>>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type CampaignFilter = {
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  q?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_neq?: InputMaybe<Scalars['String']>;
};

export type CampaignInput = {
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCampaign?: Maybe<Campaign>;
  createManyCampaign?: Maybe<Array<Maybe<Campaign>>>;
  createManyProduct?: Maybe<Array<Maybe<Product>>>;
  createManyReward?: Maybe<Array<Maybe<Reward>>>;
  createProduct?: Maybe<Product>;
  createReward?: Maybe<Reward>;
  removeCampaign?: Maybe<Campaign>;
  removeProduct?: Maybe<Product>;
  removeReward?: Maybe<Reward>;
  updateCampaign?: Maybe<Campaign>;
  updateProduct?: Maybe<Product>;
  updateReward?: Maybe<Reward>;
};


export type MutationCreateCampaignArgs = {
  title: Scalars['String'];
};


export type MutationCreateManyCampaignArgs = {
  data?: InputMaybe<Array<InputMaybe<CampaignInput>>>;
};


export type MutationCreateManyProductArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductInput>>>;
};


export type MutationCreateManyRewardArgs = {
  data?: InputMaybe<Array<InputMaybe<RewardInput>>>;
};


export type MutationCreateProductArgs = {
  campaign_id: Scalars['ID'];
  price: Scalars['Int'];
  title: Scalars['String'];
};


export type MutationCreateRewardArgs = {
  campaign_id: Scalars['ID'];
  capPerReviewifyMember: Scalars['Int'];
  description: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  points: Scalars['Int'];
  position: Scalars['Int'];
  publishedAt: Scalars['String'];
  quantity: Scalars['Int'];
  status: Scalars['String'];
};


export type MutationRemoveCampaignArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveRewardArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateCampaignArgs = {
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateProductArgs = {
  campaign_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  price?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateRewardArgs = {
  campaign_id?: InputMaybe<Scalars['ID']>;
  capPerReviewifyMember?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  points?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  Campaign?: Maybe<Campaign>;
  campaign_id: Scalars['ID'];
  id: Scalars['ID'];
  price: Scalars['Int'];
  title: Scalars['String'];
};

export type ProductFilter = {
  campaign_id?: InputMaybe<Scalars['ID']>;
  campaign_id_neq?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  price?: InputMaybe<Scalars['Int']>;
  price_gt?: InputMaybe<Scalars['Int']>;
  price_gte?: InputMaybe<Scalars['Int']>;
  price_lt?: InputMaybe<Scalars['Int']>;
  price_lte?: InputMaybe<Scalars['Int']>;
  price_neq?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_neq?: InputMaybe<Scalars['String']>;
};

export type ProductInput = {
  campaign_id: Scalars['ID'];
  id: Scalars['ID'];
  price: Scalars['Int'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  Campaign?: Maybe<Campaign>;
  Product?: Maybe<Product>;
  Reward?: Maybe<Reward>;
  _allCampaignsMeta?: Maybe<ListMetadata>;
  _allProductsMeta?: Maybe<ListMetadata>;
  _allRewardsMeta?: Maybe<ListMetadata>;
  allCampaigns?: Maybe<Array<Maybe<Campaign>>>;
  allProducts?: Maybe<Array<Maybe<Product>>>;
  allRewards?: Maybe<Array<Maybe<Reward>>>;
};


export type QueryCampaignArgs = {
  id: Scalars['ID'];
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryRewardArgs = {
  id: Scalars['ID'];
};


export type Query_AllCampaignsMetaArgs = {
  filter?: InputMaybe<CampaignFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type Query_AllProductsMetaArgs = {
  filter?: InputMaybe<ProductFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type Query_AllRewardsMetaArgs = {
  filter?: InputMaybe<RewardFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type QueryAllCampaignsArgs = {
  filter?: InputMaybe<CampaignFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};


export type QueryAllProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};


export type QueryAllRewardsArgs = {
  filter?: InputMaybe<RewardFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};

export type Reward = {
  __typename?: 'Reward';
  Campaign?: Maybe<Campaign>;
  campaign_id: Scalars['ID'];
  capPerReviewifyMember: Scalars['Int'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  points: Scalars['Int'];
  position: Scalars['Int'];
  publishedAt: Scalars['String'];
  quantity: Scalars['Int'];
  status: Scalars['String'];
};

export type RewardFilter = {
  campaign_id?: InputMaybe<Scalars['ID']>;
  campaign_id_neq?: InputMaybe<Scalars['ID']>;
  capPerReviewifyMember?: InputMaybe<Scalars['Int']>;
  capPerReviewifyMember_gt?: InputMaybe<Scalars['Int']>;
  capPerReviewifyMember_gte?: InputMaybe<Scalars['Int']>;
  capPerReviewifyMember_lt?: InputMaybe<Scalars['Int']>;
  capPerReviewifyMember_lte?: InputMaybe<Scalars['Int']>;
  capPerReviewifyMember_neq?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  description_neq?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  image?: InputMaybe<Scalars['String']>;
  image_neq?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_neq?: InputMaybe<Scalars['String']>;
  points?: InputMaybe<Scalars['Int']>;
  points_gt?: InputMaybe<Scalars['Int']>;
  points_gte?: InputMaybe<Scalars['Int']>;
  points_lt?: InputMaybe<Scalars['Int']>;
  points_lte?: InputMaybe<Scalars['Int']>;
  points_neq?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  position_gt?: InputMaybe<Scalars['Int']>;
  position_gte?: InputMaybe<Scalars['Int']>;
  position_lt?: InputMaybe<Scalars['Int']>;
  position_lte?: InputMaybe<Scalars['Int']>;
  position_neq?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['String']>;
  publishedAt_neq?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  quantity_gt?: InputMaybe<Scalars['Int']>;
  quantity_gte?: InputMaybe<Scalars['Int']>;
  quantity_lt?: InputMaybe<Scalars['Int']>;
  quantity_lte?: InputMaybe<Scalars['Int']>;
  quantity_neq?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  status_neq?: InputMaybe<Scalars['String']>;
};

export type RewardInput = {
  campaign_id: Scalars['ID'];
  capPerReviewifyMember: Scalars['Int'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  points: Scalars['Int'];
  position: Scalars['Int'];
  publishedAt: Scalars['String'];
  quantity: Scalars['Int'];
  status: Scalars['String'];
};
