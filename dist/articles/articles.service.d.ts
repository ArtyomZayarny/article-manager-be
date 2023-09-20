import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';
export declare class ArticlesService {
    private readonly articleRepository;
    constructor(articleRepository: Repository<Article>);
    create(createArticleDto: CreateArticleDto): Promise<Article>;
    findAll(): Promise<Article[]>;
    findOne(id: number): Promise<Article>;
    update(id: number, updateArticleDto: UpdateArticleDto): Promise<Article>;
    remove(id: number): Promise<Article>;
}
