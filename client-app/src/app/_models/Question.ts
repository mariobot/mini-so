import { Answer } from './Answer';

export class Question {
    id: string;
    title: string;
    body: string;
    score: number;
    answerCount: number;
    answers?: Answer[];
}
