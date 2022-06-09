import { Injectable } from '@nestjs/common';
import {CreateWorkPeriodDto} from "./dto/create-work-period.dto";
import {InjectModel} from "@nestjs/sequelize";
import {WorkPeriod} from "./work-period.model";
import {DeleteWorkPeriodDto} from "./dto/delete-work-period.dto";
import {UpdateWorkPeriodDto} from "./dto/update-work-period.dto";

@Injectable()
export class WorkPeriodsService {
    constructor(@InjectModel(WorkPeriod) private workPeriodRepository: typeof WorkPeriod) {}

    async createWorkPeriod(dto: CreateWorkPeriodDto) {
        const workPeriod = await this.workPeriodRepository.create(dto);
        return workPeriod;
    }

    async getWorkPeriodById(id: number) {
        const workPeriod = await this.workPeriodRepository.findOne({where: {id}});
        return workPeriod;
    }

    async getAllWorkerPeriods() {
        const workPeriods = await this.workPeriodRepository.findAll({include: {all: true}});
        return workPeriods;
    }

    async deleteWorkPeriod(dto:DeleteWorkPeriodDto) {
        const workPeriod = await this.workPeriodRepository.findByPk(dto.workPeriodId);
        await workPeriod.destroy();
    }

    async updateWorkPeriod(id: number, dto: UpdateWorkPeriodDto) {
        const workPeriod = await this.workPeriodRepository.findOne({where: {id}});
        workPeriod.from = dto.from;
        workPeriod.to = dto.to;
        return workPeriod
    }
}
