import { Injectable } from '@nestjs/common';

export interface Post {
  userId: number;
  title: string;
  description: string;
}

@Injectable()
export class PostsService {
  posts: Post[] = [
    {
      userId: 1,
      title: 'title 1',
      description: 'description 1',
    },
    {
      userId: 2,
      title: 'title 2',
      description: 'description 2',
    },
  ];

  findAll(): Post[] {
    return this.posts;
  }

  findOne(id: number): Post {
    return this.posts.find((item) => item.userId === id);
  }
}
