import { ClientSelectValue } from 'src/features/ClientSelect';
import { DeepRequired } from 'ts-essentials';

export type ObjectFormType = {
  name: string;
  client?: ClientSelectValue;
};

export type ObjectFormSubmitType = DeepRequired<ObjectFormType>;
