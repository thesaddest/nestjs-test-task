import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {UpdateUserNameDto} from "./dto/update-user-name.dto";
import {AddTeamDto} from "./dto/add-team.dto";
import {DeleteTeamFromUserDto} from "./dto/delete-team-from-user.dto";

@Controller('users')
export class UsersController {

    constructor(private  usersService: UsersService) {
    }

    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @Get('/:id')
    getOneUser(@Param('id') id: number) {
        return this.usersService.getOneUser(id)
    }

    @Post('/team')
    addTeam(@Body() dto: AddTeamDto) {
        return this.usersService.addTeam(dto);
    }

    @Delete('/team')
    deleteTeamFromUser(@Body() dto: DeleteTeamFromUserDto) {
        return this.usersService.deleteTeamFromUser(dto)
    }

    @Delete('/:id')
    deleteOne(@Param('id') id: number) {
        return this.usersService.deleteUser(id)
    }

    @Put('/:id')
    updateUserName(@Param('id') id: number, @Body() updateUserNameDto: UpdateUserNameDto) {
        return this.usersService.updateUserName(id, updateUserNameDto)
    }
}
