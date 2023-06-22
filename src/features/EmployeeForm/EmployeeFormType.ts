import { DeepRequired } from 'ts-essentials';

export type EmployeeFormType = {
  fullName: string;
};

export type EmployeeFormSubmitType = DeepRequired<EmployeeFormType>;
