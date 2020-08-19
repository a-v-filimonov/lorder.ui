import { createDeepEqualSelector } from '#/@store/@common/createSelector';

import { RANGE_FROM_RANGE_FILTER } from './consts';
import { IUiState } from './Ui';

import { IState } from '@types';

const baseState = (state: IState): IUiState => state.ui;

export const isMagicLoginForm = createDeepEqualSelector(
  baseState,
  (state: IUiState): boolean => state.isMagicLoginForm
);

export const isLeftBarOpen: any = createDeepEqualSelector(baseState, state => state.isLeftBarOpen);

export const isBoardFilterOpened = createDeepEqualSelector(baseState, state => state.isBoardFilterOpened);

export const curRangeFilter = createDeepEqualSelector(baseState, state => state.rangeFilter);

export const currentRange = createDeepEqualSelector([curRangeFilter], filter => RANGE_FROM_RANGE_FILTER[filter]);
