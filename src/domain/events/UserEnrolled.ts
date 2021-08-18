import { Course } from "../model/course";
import { User } from "../model/user";
import { DomainEvent } from "../../events/domain-event";
import { Sandbox } from "../model/sandbox";

export class UserEnrolled implements DomainEvent {
    constructor(
        public readonly user: User,
        public readonly course: Course,
        public readonly sandbox?: Sandbox,
    ) {}
}