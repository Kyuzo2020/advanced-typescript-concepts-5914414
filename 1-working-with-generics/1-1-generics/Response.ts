export interface Response<T> {
  status: number;
  message: string;
  data: T;
}

// my code
function createResponse<T>(status: number, message: string, data: T): Response<T> {
  return {status, message, data};
}

const stringResponse = createResponse<string>(3, 'test', 'test response');
const numberResponse = createResponse<number[]>(3, 'test 2', [2,3,3]);


