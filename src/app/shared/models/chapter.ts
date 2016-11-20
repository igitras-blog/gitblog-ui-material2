import { Article } from './article';
import { Type } from 'class-transformer';

export class Chapter {
    name: string;

    @Type(() => Article)
    articles: Array<Article>;
}