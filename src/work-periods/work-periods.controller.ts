import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {WorkPeriodsService} from "./work-periods.service";
import {CreateWorkPeriodDto} from "./dto/create-work-period.dto";
import {DeleteWorkPeriodDto} from "./dto/delete-work-period.dto";
import {UpdateWorkPeriodDto} from "./dto/update-work-period.dto";

@Controller('work-periods')
export class WorkPeriodsController {
    constructor(private workPeriodsService: WorkPeriodsService) {}

    @Post()
    create(@Body() dto: CreateWorkPeriodDto){
        return this.workPeriodsService.createWorkPeriod(dto)
    }

    @Get('/:id')
    getById(@Param('id') id: number){
        return this.workPeriodsService.getWorkPeriodById(id)
    }

    @Get()
    getAllWorkerPeriods() {
        return this.workPeriodsService.getAllWorkerPeriods()
    }

    @Put('/:id')
    updateWorkPeriod(@Param('id') id: number, @Body() updateWorkPeriodDto: UpdateWorkPeriodDto) {
        return this.workPeriodsService.updateWorkPeriod(id, updateWorkPeriodDto)
    }

    @Delete()
    deleteWorkPeriod(@Body() deleteDto: DeleteWorkPeriodDto) {
        return this.workPeriodsService.deleteWorkPeriod(deleteDto)
    }

}
