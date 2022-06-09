export class CreateWorkPeriodDto {
    readonly from: string;
    readonly to: string;
    readonly weekDays: string;
    readonly teamId: number;
    readonly userId: number;
}