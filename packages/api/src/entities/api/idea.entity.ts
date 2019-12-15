import { IIdea } from "../iidea.entity";

export class Idea implements IIdea {
    id: string;
    name: string;
    description: string;
}