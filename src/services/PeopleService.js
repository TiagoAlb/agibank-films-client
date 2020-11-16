import Rest from './Rest'

export default class PeopleService extends Rest {
    constructor() {
        super('/people')
    }
}