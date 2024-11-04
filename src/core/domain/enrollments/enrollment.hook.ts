import { useQuery } from 'react-query';

import enrollmentService from './enrollment.service';

export function useFindEnrollments() {
  return useQuery(['all-enrollments'], () => enrollmentService.list());
}
