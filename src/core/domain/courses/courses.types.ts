type CourseLevelEnum = 'Básico' | 'Intermediário' | 'Avançado';

export interface CourseEntity {
  id: number;
  nome: string;
  descricao: string;
  nivel: CourseLevelEnum;
  duracao: number;
  professorId: number;
  dataInicio: string;
  valor: number;

  // teacher_id: string;
  // price: string;
  // start_date: string;
  // end_date: string;
}

export interface UpdateCourseDto extends Omit<CourseEntity, 'id'> {
  // name: string;
  // description: string;
  // price: string;
  // start_date: string;
  // end_date: string;
}
