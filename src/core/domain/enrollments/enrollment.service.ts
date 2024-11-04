/* eslint-disable import/no-anonymous-default-export */

import { jwtAxios } from '../../constants/jwt';
import { EnrollmentEntity } from './enrollment.types';

const SERVICE_ENDPOINT = '/Matricula';

export default {
  async list(): Promise<EnrollmentEntity[]> {
    const result = await jwtAxios.get<EnrollmentEntity[]>(
      `${SERVICE_ENDPOINT}`
    );
    return result.data;
  },
};
