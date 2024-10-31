export interface CourseEntity {
  id: number;
  nome: string;
  descricao: string;
  nivel: string;
  duracao: number;
  professorId: number;
  dataInicio: string;
  valor: number;
}

export interface UpdateCourseDto extends Omit<CourseEntity, 'id'> {}
