import { useQuery } from 'react-query';

import studentsService from './students.service';

export function useFindStudents() {
  return useQuery(['all-students'], () => studentsService.list());
}
