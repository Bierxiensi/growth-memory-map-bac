import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('post')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({ summary: 'hello world' })
  @Get()
  getHello(): string {
    return this.postsService.getPosts();
  }
}
