import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {Team} from "../teams/teams.model";
import {UserTeams} from "../teams/user-teams.model";
import {TeamsModule} from "../teams/teams.module";
import {WorkPeriod} from "../work-periods/work-period.model";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
      SequelizeModule.forFeature([User, Team, UserTeams, WorkPeriod]),
      TeamsModule
  ]
})
export class UsersModule {}
