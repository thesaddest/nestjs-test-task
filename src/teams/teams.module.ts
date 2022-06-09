import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Team} from "./teams.model";
import {User} from "../users/users.model";
import {UserTeams} from "./user-teams.model";
import {WorkPeriod} from "../work-periods/work-period.model";

@Module({
  providers: [TeamsService],
  controllers: [TeamsController],
  imports: [
    SequelizeModule.forFeature([Team, User, UserTeams, WorkPeriod])
  ],
  exports: [
    TeamsService
  ]
})
export class TeamsModule {}
