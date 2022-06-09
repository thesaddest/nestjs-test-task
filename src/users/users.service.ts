import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import {TeamsService} from "../teams/teams.service";
import {UpdateUserNameDto} from "./dto/update-user-name.dto";
import {AddTeamDto} from "./dto/add-team.dto";
import {DeleteTeamFromUserDto} from "./dto/delete-team-from-user.dto";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
                private teamsService: TeamsService) {}

    async createUser(dto:CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const team = await this.teamsService.getTeamByName("NonTeam")
        await user.$set('teams', [team.id])
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}});
        return users;
    }

    async getOneUser(id: number) {
        const user = await this.userRepository.findOne({where: {id}})
        return user;
    }

    async deleteUser(id: number) {
        const user = await this.userRepository.findOne({where: {id}})
        await user.destroy();
    }

    async updateUserName(id: number, dto: UpdateUserNameDto) {
        const user = await this.userRepository.findOne({where: {id}});
        user.name = dto.name
        await user.save()
        return user
    }

    async addTeam(dto:AddTeamDto){
        const user = await this.userRepository.findByPk(dto.userId);
        const team = await this.teamsService.getTeamByName(dto.name);
        if(user && team) {
            await user.$add('team', team.id);
            return dto;
        }
        throw new HttpException('User or team name was not found', HttpStatus.NOT_FOUND);
    }

    async deleteTeamFromUser (dto: DeleteTeamFromUserDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const team = await this.teamsService.getTeamByName(dto.name);
        if(user && team) {
            await user.$remove('team', team.id);
            return dto;
        }
        throw new HttpException('User or team name was not found', HttpStatus.NOT_FOUND);
    }
}
