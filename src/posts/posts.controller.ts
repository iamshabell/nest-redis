import {
  CacheInterceptor,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { Post, PostsService } from './posts.service';

@UseInterceptors(CacheInterceptor)
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Get('/')
  async findAll(): Promise<Post[]> {
    return this.postsService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number): Promise<Post> {
    return this.postsService.findOne(id);
  }
}
