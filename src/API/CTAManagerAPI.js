const CTAManagerEndpoint = process.env.REACT_APP_CTA_Manager_Endpoint

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if (localStorage.getItem("accessToken")) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("accessToken"))
    }

    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};


export function getHerosConfigurationList() {
    const url = CTAManagerEndpoint + "/Configuration/Heros"

    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response.json();
        })
}

export function addNewHeroConfiguration(heroName, heroElement) {
    const url = CTAManagerEndpoint + "/Configuration/Heros"

    const data = {
        name: heroName,
        element: heroElement
    }

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response;
        })
}

export function updateHeroConfiguration(heroId, newHeroName, newHeroElement) {
    const url = CTAManagerEndpoint + "/Configuration/Heros"

    const data = {
        id: heroId,
        name: newHeroName,
        element: newHeroElement

    }

    return fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response;
        })
}

export function login(username, password) {
    const url = CTAManagerEndpoint + "/auth/signin"
    const loginRequest = {
        usernameOrEmail: username,
        password: password
    }

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(loginRequest),
        headers: { 'Content-Type': 'application/json' }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response.json();
        })
}

export function getUserList() {
    const url = CTAManagerEndpoint + "/users/"

    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response.json();
        })
}

export function updateUserRoles(username, isMember, isAdmin) {
    const url = CTAManagerEndpoint + "/users/" + username

    var updateUserRolesRequest = {
        username: username,
        roles: [{ id: 1 }]
    }


    if (isMember) { updateUserRolesRequest.roles.push({ id: 3 }) }
    if (isAdmin) { updateUserRolesRequest.roles.push({ id: 2 }) }


    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(updateUserRolesRequest),
        headers: { 'Content-Type': 'application/json' }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response.json();
        })
}

export function getCurrentUser() {

    if (!localStorage.getItem("accessToken")) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: CTAManagerEndpoint + "/user/me",
        method: 'GET'
    });
}


export function createNewUser(name, username, email, password) {
    const url = CTAManagerEndpoint + "/auth/signup"

    var createNewUserRequest = {
        name: name,
        username: username,
        email: email,
        password: password
    }


    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(createNewUserRequest),
        headers: { 'Content-Type': 'application/json' }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response.json();
        })
}

export function getUserInfo(username) {
    const url = CTAManagerEndpoint + "/users/" + username

    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response.json();
        })
}