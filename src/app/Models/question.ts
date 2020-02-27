// import {Option} from './option';

export interface Question {
  id: number;
  type: string;
  question: string;
  options: {
    // data: Option[];
  };
}
