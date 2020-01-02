const CTAManagerEndpoint = process.env.REACT_APP_CTA_Manager_Endpoint

export function getMemberHerosList(memberId) {
    const url = CTAManagerEndpoint + '/Members/' + memberId + '/Heros'
    console.log(CTAManagerEndpoint)

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

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

export function getHeroFromID(memberId, heroId) {
    const url = CTAManagerEndpoint + '/Members/' + memberId + '/Heros' + heroId

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function updateHero(memberId, hero) {
    const url = CTAManagerEndpoint + '/Members/' + memberId + '/Heros'

    return fetch(url, {
        method: 'PUT',
        body: JSON.stringify(hero),
        headers: { 'Content-Type': 'application/json' }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response;
        })
}

export function createHero(memberId, definition, stars, awakenings) {
    const url = CTAManagerEndpoint + '/Members/' + memberId + '/Heros'
    const data = {
        definition: definition,
        stars: stars,
        awakenings: awakenings
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