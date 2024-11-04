import { useMutation, useQuery, useQueryClient } from 'react-query';

import coursesService from './courses.service';

export function useCreateCourse() {
  const queryClient = useQueryClient();

  const mutation = useMutation(coursesService.create, {
    onSuccess(res) {
      queryClient.refetchQueries('all-courses');
    },
  });

  return mutation;
}

export function useUpdateCourse() {
  const queryClient = useQueryClient();

  const mutation = useMutation(coursesService.update, {
    onSuccess(res) {
      queryClient.refetchQueries('all-courses');
    },
  });

  return mutation;
}

export function useDeleteCourse() {
  const queryClient = useQueryClient();

  const mutation = useMutation(coursesService.delete, {
    onSuccess(res) {
      queryClient.refetchQueries('all-courses');
    },
    onError(res) {
      console.log('aaaaaaaaa');
      console.log(res);
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
