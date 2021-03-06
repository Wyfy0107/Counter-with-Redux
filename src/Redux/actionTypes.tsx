export type Calculation = {
  type: string;
};

export type AddAndSubtract = {
  type: string;
  value: number;
};

export type GetUserInput = {
  type: string;
  value: React.ChangeEvent<HTMLInputElement>;
};

export type DispatchActions = {
  type: string;
  value: number | React.ChangeEvent<HTMLInputElement>;
};
