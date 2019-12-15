import { ITask } from "../itask.entity";

export class Task implements ITask {
    id: string;
    name: string;
    description: string;
}