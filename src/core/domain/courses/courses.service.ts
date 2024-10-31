/* eslint-disable import/no-anonymous-default-export */

import { jwtAxios } from '../../constants/jwt';
import { CourseEntity, UpdateCourseDto } from './courses.types';

const SERVICE_ENDPOINT = '/Curso';

export default {
  async list(): Promise<CourseEntity[]> {
    const result = await jwtAxios.get<CourseEntity[]>(`${SERVICE_ENDPOINT}`);
    return result.data;
  },
  async create(courseDto: Omit<CourseEntity, 'id'>) {
    return await jwtAxios.post<CourseEntity>(SERVICE_ENDPOINT, { courseDto });
  },
  async detail(id: number ): Promise<CourseEntity> {
    const result = await jwtAxios.get<CourseEntity>(
      `${SERVICE_ENDPOINT}/${id}`
    );
    return result.data;
  },
  async update({ id, courseDto }: { id: number ; courseDto: UpdateCourseDto }) {
    return await jwtAxios.put<CourseEntity>(`${SERVICE_ENDPOINT}/${id}`, {
      ...courseDto,
    });
  },
  async delete({ id }: { id: number }) {
    return await jwtAxios.delete<CourseEntity>(`${SERVICE_ENDPOINT}/${id}`);
  },
};
