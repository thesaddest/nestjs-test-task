import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {TeamsService} from "./teams.service";
import {CreateTeamDto} from "./dto/create-team.dto";
import {DeleteTeamDto} from "./dto/delete-team.dto";
import {UpdateTeamLogoDto} from "./dto/update-team-logo.dto";

@Controller('teams')
export class TeamsController {
    constructor(private teamsService: TeamsService) {
    }

    @Post()
    create(@Body() dto: CreateTeamDto) {
        return this.teamsService.createTeam(dto)
    }

    @Get()
    getAll() {
        return this.teamsService.getAllTeams();
    }

    @Get('/:name')
    getByName(@Param('name') name: string) {
        return this.teamsService.getTeamByName(name);
    }

    @Put('/:id')
    updateTeamLogo(@Param('id') id: number, @Body() updateTeamLogoDto: UpdateTeamLogoDto) {
        return this.teamsService.updateTeamLogo(id, updateTeamLogoDto)
    }

    @Delete()
    deleteOne(@Body() deleteDto: DeleteTeamDto) {
        return this.teamsService.deleteTeam(deleteDto)
    }


}
