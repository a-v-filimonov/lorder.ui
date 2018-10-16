import map from 'lodash-es/map';

export interface IUserTask {
  id?: number;
  description?: string;
  value?: number;
}

export class UserTask implements IUserTask {
  public id?: number;
  public description?: string;
  public value?: number;

  constructor(initial?: object) {
    map(initial, (val: any, key: string) => {
      this[key] = val;
    });
  }
}