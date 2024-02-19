import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsersDto } from './dto/create-users.dto';
import { Users } from './schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private readonly userModel: Model<Users>) {}

  async create(createUserDto: CreateUsersDto): Promise<Users> {
    const createdUser = await this.userModel.create(createUserDto);
    return createdUser;
  }

  async findOne(username: string): Promise<Users | undefined> {
    return this.userModel.findOne({username:{$eq: username}}).exec();
  }

  async findAll(): Promise<Users[]> {
    return this.userModel.find().exec();
  }
}
