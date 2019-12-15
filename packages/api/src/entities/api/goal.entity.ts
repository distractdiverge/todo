import { IGoal } from "../igoal.entity";

export class Goal implements IGoal {
    id: string;
    name: string;
    description: string;
}