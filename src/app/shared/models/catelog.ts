import { Chapter } from './chapter';
import { Type } from 'class-transformer';

export class Catelog {
    bookId: string;

    @Type(() => Chapter)
    chapters: Array<Chapter>;
}