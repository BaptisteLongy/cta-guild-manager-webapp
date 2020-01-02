const CTAManagerEndpoint = process.env.REACT_APP_CTA_Manager_Endpoint

export function getMemberList() {
    const url = CTAManagerEndpoint + '/Members/'

    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response.json();
        })
}


export function addNewMember(memberName) {
    const url = CTAManagerEndpoint + '/Members/'

    const data = { name: memberName }
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


export function deleteMember(memberId) {
    const url = CTAManagerEndpoint + '/Members/' + memberId
    return fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            return response;
        })
        .catch(error => console.error('Error:', error))

}