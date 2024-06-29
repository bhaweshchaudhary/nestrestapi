import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

  @Get() // GET /users
  findAll() {
    return 'This action returns array of all users';
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return `This action returns an object of user with id ${id}`;
  }

  
}
