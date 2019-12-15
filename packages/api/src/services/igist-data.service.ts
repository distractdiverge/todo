import { IGoal, IIdea, IStepProject, ITask } from "../entities";

export interface IGistDataService {

    createGoal(goal: IGoal): IGoal;
    createIdea(goalId: string, idea: IIdea): IIdea;
    createStepProject(ideaId: string, stepProject: IStepProject): IStepProject;
    createTask(projectId: string, task: ITask): ITask;

    getGoals(): ReadonlyArray<IGoal>;
    getIdeas(): ReadonlyArray<IIdea>;
    getIdeasByGoal(goalId: string): ReadonlyArray<IIdea>;

    getStepProjects(): ReadonlyArray<IStepProject>;
    getStepProjectsByGoal(goalId: string): ReadonlyArray<IStepProject>;
    getStepProjectsByIdea(ideaId: string): ReadonlyArray<IStepProject>;

    getTasks(): ReadonlyArray<ITask>;
    getTasksByGoal(goalId: string): ReadonlyArray<IIdea>;
    getTasksByIdea(ideaId: string): ReadonlyArray<IIdea>;
    getTasksByStepProject(projectId: string): ReadonlyArray<IIdea>;
}
