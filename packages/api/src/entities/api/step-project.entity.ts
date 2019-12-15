import { IStepProject } from "../istep-project.entity";

export class StepProject implements IStepProject {
    id: string;
    name: string;
    description: string;
}