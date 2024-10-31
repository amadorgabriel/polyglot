import { useMutation, useQuery, useQueryClient } from 'react-query';

import { message } from 'antd';
import coursesService from './courses.service';
import { UpdateCourseDto } from './courses.types';

export function useCreateCourse() {
  const [messageApi, contextHolder] = message.useMessage();

  const mutation = useMutation(coursesService.create, {
    onSuccess(res) {
      messageApi.open({
        type: 'success',
        content: 'Curso criado com sucesso!',
      });
    },
  });

  return mutation;
}

export function useUpdateCourse(id: number, course: UpdateCourseDto) {
  const queryClient = useQueryClient();
  const [messageApi, contextHolder] = message.useMessage();

  const mutation = useMutation(coursesService.update, {
    onSuccess(res) {
      messageApi.open({
        type: 'success',
        content: 'Curso atualizado com sucesso!',
      });

      queryClient.refetchQueries('all-courses');
    },
  });

  return mutation;
}

export function useDeleteCourse() {
  const queryClient = useQueryClient();
  const [messageApi, contextHolder] = message.useMessage();

  const mutation = useMutation(coursesService.delete, {
    onSuccess(res) {
      messageApi.open({
        type: 'success',
        content: 'Curso excluído com sucesso!',
      });

      queryClient.refetchQueries('all-courses');
    },
  });

  return mutation;
}

export function useDetailCourse(id: number) {
  return useQuery(['detail-courses', id], () => coursesService.detail(id), {
    enabled: !!id,
  });
}

export function useFindCourses() {
  return useQuery(['all-courses'], () => coursesService.list());
}
