import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';

import { convertSecondsToDuration } from '@store/@common/helpers';

export interface ITimerListItemTextProps {
  time: number;
  isOpen: boolean;
  onClick: any;
}

export const TimerListItemTextJsx: React.FunctionComponent<ITimerListItemTextProps> = ({
  time = 0,
  isOpen = false,
  onClick,
}) => (
  <Tooltip placement={'right'} title={isOpen ? 'Закрыть подробности' : 'Нажмите, чтоб раскрыть подробности'}>
    <Button onClick={onClick}>{convertSecondsToDuration(time)}</Button>
  </Tooltip>
);
