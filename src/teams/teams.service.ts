import { Injectable } from '@nestjs/common';
import {CreateTeamDto} from "./dto/create-team.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Team} from "./teams.model";
import {DeleteTeamDto} from "./dto/delete-team.dto";
import {UpdateTeamLogoDto} from "./dto/update-team-logo.dto";

@Injectable()
export class TeamsService {
    constructor(@InjectModel(Team) private TeamRepository: typeof Team) {
    }

    async createTeam(dto: CreateTeamDto) {
        const team = await this.TeamRepository.create(dto);
        return team;
    }

    async getTeamByName(name: string) {
        const team = await this.TeamRepository.findOne({where: {name}})
        return team;
    }

    async getAllTeams() {
        const teams = await this.TeamRepository.findAll({include: {all: true}});
        return teams;
    }

    async deleteTeam(dto:DeleteTeamDto) {
        const user = await this.TeamRepository.findByPk(dto.teamId);
        await user.destroy();
    }

    async updateTeamLogo(id: number, dto:UpdateTeamLogoDto) {
        const team = await this.TeamRepository.findOne({where: {id}});
        team.logo = dto.logo;
        return team;
    }
}
