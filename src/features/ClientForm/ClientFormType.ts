import { DirectoryClientIndustrySelectValue } from 'src/features/DirectoryClientIndustrySelect';
import { DirectoryClientStatusSelectValue } from 'src/features/DirectoryClientStatusSelect';
import { EmployeeSelectValue } from 'src/features/EmployeeSelect';
import { DeepRequired } from 'ts-essentials';

export type ClientFormType = {
  name: string;
  responsible_employee?: EmployeeSelectValue;
  industries: DirectoryClientIndustrySelectValue[];
  status?: DirectoryClientStatusSelectValue;
};

export type ClientFormSubmitType = DeepRequired<ClientFormType>;
