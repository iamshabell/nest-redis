import { Controller, Get, Param } from '@nestjs/common';
import { Post, PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Get('/')
  findAll(): Post[] {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Post {
    return this.postsService.findOne(id);
  }
}
