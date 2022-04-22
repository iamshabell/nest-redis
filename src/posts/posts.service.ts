import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

export interface Post {
  userId: number;
  title: string;
  description: string;
}

@Injectable()
export class PostsService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}
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

  async findAll(): Promise<Post[]> {
    await this.cacheManager.set('GET_POSTS', { key: 32 }, { ttl: 10 });
    // await this.cacheManager.del('GET_POSTS'); // <<== for deletion
    // await this.cacheManager.reset(); // <<== resseting whole cache
    const cachedItem = await this.cacheManager.get('GET_POSTS');
    console.log(cachedItem);

    return this.posts;
  }

  async findOne(id: number): Promise<Post> {
    return this.posts[0];
  }
}
