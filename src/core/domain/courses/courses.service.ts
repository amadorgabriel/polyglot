/* eslint-disable import/no-anonymous-default-export */

import { jwtAxios } from '../../constants/jwt';
import { CourseEntity, UpdateCourseDto } from './courses.types';

const SERVICE_ENDPOINT = '/curso';

export default {
  async create(courseDto: Omit<CourseEntity, 'id'>) {
    return await jwtAxios.post<CourseEntity>(SERVICE_ENDPOINT, { courseDto });
  },
  async update({ id, courseDto }: { id: string; courseDto: UpdateCourseDto }) {
    return await jwtAxios.put<CourseEntity>(`${SERVICE_ENDPOINT}/${id}`, {
      ...courseDto,
    });
  },
  async detail(id: string): Promise<CourseEntity> {
    const result = await jwtAxios.get<CourseEntity>(
      `${SERVICE_ENDPOINT}/${id}`
    );
    return result.data;
  },
  async list(): Promise<CourseEntity[]> {
    const result = await jwtAxios.get<CourseEntity[]>(`${SERVICE_ENDPOINT}`);
    return result.data;
  },
  async delete() {
    return await jwtAxios.delete<CourseEntity>(`${SERVICE_ENDPOINT}`);
  },
};
