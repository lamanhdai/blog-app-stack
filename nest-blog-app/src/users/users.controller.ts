import { Body, Controller, Post, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { Users } from './schemas/users.schema';
import { Public } from '../auth/decorators/public.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post()
  async create(@Body() createUsersDto: CreateUsersDto) {
    await this.usersService.create(createUsersDto);
  }

  @Public()
  @Get()
  async findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }
}
