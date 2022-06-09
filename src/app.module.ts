import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.model";
import { TeamsModule } from './teams/teams.module';
import {Team} from "./teams/teams.model";
import {UserTeams} from "./teams/user-teams.model";
import { WorkPeriodsModule } from './work-periods/work-periods.module';
import {WorkPeriod} from "./work-periods/work-period.model";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Team, UserTeams, WorkPeriod],
            autoLoadModels: true
        }),
        UsersModule,
        TeamsModule,
        WorkPeriodsModule,
    ]
})
export class AppModule {

}