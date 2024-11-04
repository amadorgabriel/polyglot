import { getFormattedDateTime } from "../../helpers/date-helper";
import { NotificationDataType } from "../../types/my-courses";

export const notificationsData: NotificationDataType[] = [
  {
    id: 1,
    bgcolor: '#FEF1E4',
    color: '#F88333',
    letter: 'B',
    content: 'Você teve 1 aula em agosto',
    date: getFormattedDateTime(-5, 'minutos', 'MMMM DD, YYYY, h:mm:ss a'),
  },
  {
    id: 2,
    bgcolor: '#DDEFFA',
    color: '#0A8FDC',
    letter: 'A',
    content: 'Toninho enviou uma mensagem para você',
    date: getFormattedDateTime(-10, 'minutos', 'MMMM DD, YYYY, h:mm:ss a'),
  },
  {
    id: 3,
    bgcolor: '#FFE3EE',
    color: '#FE8EB9',
    letter: 'G',
    content: 'Você fez aula de Gramática Avançada - Parte 1',
    date: getFormattedDateTime(-15, 'minutos', 'MMMM DD, YYYY, h:mm:ss a'),
  },
  {
    id: 4,
    bgcolor: '#E2F3E8',
    color: '#47B46B',
    letter: 'W',
    content: 'Você se registrou para Inglês básico',
    date: getFormattedDateTime(-25, 'minutos', 'MMMM DD, YYYY, h:mm:ss a'),
  },
  {
    id: 5,
    bgcolor: '#FEE7E6',
    color: '#FCA7A4',
    letter: 'J',
    content: '@UNINOVE te enviouUmaMensagem',
    date: getFormattedDateTime(-50, 'minutos', 'MMMM DD, YYYY, h:mm:ss a'),
  },
];
