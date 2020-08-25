import { UUID } from '../models/uuid.model';

export class CreateUUID {
    static readonly type = '[UUID] Create'
    constructor(public payload: UUID) { }
}

export class DeleteUUID {
    static readonly type = '[UUID] Delete'
    constructor() { }
}