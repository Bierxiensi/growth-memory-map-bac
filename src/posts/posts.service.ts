import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  getPosts(): string {
    return 'this is a posts list for test';
  }
}
