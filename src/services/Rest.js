import api from './Api'

export default class Rest {

    constructor(url) {
        this.url = url
    }

    get(id, success, error) {
        api.get(`${this.url}/${id}`)
            .then(res => {
                if (res.status === 200) {
                    success(res.data)
                } else {
                    error(res)
                }
            }).catch(err => {
                error(this.handleCatchError(err))
            })
    }

    list(success, error) {
        api.get(`${this.url}`)
            .then(res => {
                if (res.status === 200) {
                    console.log(res)
                    success(res.data)
                } else {
                    error(res)
                }
            }).catch(err => {
                error(this.handleCatchError(err))
            })
    }

    handleCatchError(error) {
        if (error.response) {
            const err = error.response.data
            if (err.errors && err.errors.length > 0)
                return err.message + '\n' + err.errors[0]

            return err.message
        }
        return error.message
    }
}