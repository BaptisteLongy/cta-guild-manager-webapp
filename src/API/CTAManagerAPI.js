const CTAManagerEndpoint = process.env.REACT_APP_CTA_Manager_Endpoint

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