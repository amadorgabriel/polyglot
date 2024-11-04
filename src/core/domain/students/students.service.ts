/* eslint-disable import/no-anonymous-default-export */

import { jwtAxios } from '../../constants/jwt';
import { StudentEntity } from './students.types';

const SERVICE_ENDPOINT = '/Aluno';

export default {
  async list(): Promise<StudentEntity[]> {
    const result = await jwtAxios.get<StudentEntity[]>(`${SERVICE_ENDPOINT}`);
    return result.data;
  },
};
