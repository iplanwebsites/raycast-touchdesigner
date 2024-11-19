type Operator = {
    name: string;
    description: string;
    sweet?: boolean;
    category?: string;
  };
  
  type OperatorData = {
    operators: {
      [key: string]: {
        description: string;
        operators: Operator[];
      };
    };
  };

  declare module 'tdOperators' {
    export const operatorData: OperatorData;
  }