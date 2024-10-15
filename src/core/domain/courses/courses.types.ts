export interface CourseEntity {
  id: string;
  name: string;
  description: string;
  teacher_id: string;
  price: string;
  start_date: string;
  end_date: string;
}

export interface UpdateCourseDto {
  name: string;
  description: string;
  price: string;
  start_date: string;
  end_date: string;
}
