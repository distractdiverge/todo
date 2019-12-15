import { IGistDataService } from "./igist-data.service";

export class DynamoDBService implements IGistDataService {
    createGoal(goal: import("../entities").IGoal): import("../entities").IGoal {
        throw new Error("Method not implemented.");
    }    createIdea(goalId: string, idea: import("../entities").IIdea): import("../entities").IIdea {
        throw new Error("Method not implemented.");
    }
    createStepProject(ideaId: string, stepProject: import("../entities").IStepProject): import("../entities").IStepProject {
        throw new Error("Method not implemented.");
    }
    createTask(projectId: string, task: import("../entities").ITask): import("../entities").ITask {
        throw new Error("Method not implemented.");
    }
    getGoals(): readonly import("../entities").IGoal[] {
        throw new Error("Method not implemented.");
    }
    getIdeas(): readonly import("../entities").IIdea[] {
        throw new Error("Method not implemented.");
    }
    getIdeasByGoal(goalId: string): readonly import("../entities").IIdea[] {
        throw new Error("Method not implemented.");
    }
    getStepProjects(): readonly import("../entities").IStepProject[] {
        throw new Error("Method not implemented.");
    }
    getStepProjectsByGoal(goalId: string): readonly import("../entities").IStepProject[] {
        throw new Error("Method not implemented.");
    }
    getStepProjectsByIdea(ideaId: string): readonly import("../entities").IStepProject[] {
        throw new Error("Method not implemented.");
    }
    getTasks(): readonly import("../entities").ITask[] {
        throw new Error("Method not implemented.");
    }
    getTasksByGoal(goalId: string): readonly import("../entities").IIdea[] {
        throw new Error("Method not implemented.");
    }
    getTasksByIdea(ideaId: string): readonly import("../entities").IIdea[] {
        throw new Error("Method not implemented.");
    }
    getTasksByStepProject(projectId: string): readonly import("../entities").IIdea[] {
        throw new Error("Method not implemented.");
    }


}