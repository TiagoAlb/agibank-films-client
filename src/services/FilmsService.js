import Rest from './Rest'

export default class FilmsService extends Rest {
    constructor() {
        super('/films')
    }
}