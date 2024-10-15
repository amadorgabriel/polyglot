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

export function useUpdateCourse(id: string, course: UpdateCourseDto) {
  const queryClient = useQueryClient();
  const [messageApi, contextHolder] = message.useMessage();

  const mutation = useMutation(coursesService.update, {
    onSuccess(res) {
      messageApi.open({
        type: 'success',
        content: 'Curso atualizado com sucesso!',
      });

      queryClient.refetchQueries('courses');
    },
  });

  return mutation;
}

export function useDetailCourse(id: string) {
  return useQuery(['courses', id], () => coursesService.detail(id), {
    enabled: !!id,
  });
}

export function useFindCourse() {
  return useQuery(['courses'], () => coursesService.list());
}
