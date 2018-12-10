export class Thought {
    id: number;
    title: string;
    description: string;
    moment: Date;
    changed: boolean;
    changeMoment: Date;

    constructor(init: Partial<Thought>) {
        Object.assign(this, init);
    }

}
