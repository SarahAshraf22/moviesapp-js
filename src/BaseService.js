export class BaseService {
    constructor(url) {
        this.url = url;
    }
    getAll() {
        return fetch(`${this.url}`)
            .then(res => {
                return res.json();
            });
    }
    // getAllCategories() {
    //     return fetch(`${'https://frontend-recruitment-challenge.herokuapp.com/categories'}`)
    //         .then(res => {
    //             return res.json();
    //         });
    // }

    addNew(bodyJson) {
        return fetch(`${this.url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyJson)
        }).then(res => {
            return res.json();
        });
    }

    edit(id, title, year, budget, editFields) {
        let bodyJSON = JSON.stringify({
            title,
            year,
            budget,
        })
        console.log(bodyJSON)
        return fetch(`${this.url}/${id}`, {
            method: 'PUT',
            body: bodyJSON,
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(res => {
            console.log(res)
            return res.json();
        });
    }

    delete(id) {
        console.log(id)
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE'
        }).then(res => {
            return res.json();
        });
    }
}