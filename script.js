const teamMembers = [
    {
        name: 'Lionel Messi',
        position: 'Forward',
        skills: ['dribbling', 'passing', 'shooting'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        bio: "BLAH BLAH BLAH YAP YAP",
    },
    {
        name: 'Lionel Messi Jr OOHHHH',
        position: 'Forward',
        skills: ['dribbling', 'passing', 'shooting'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        bio: "BLAH BLAH BLAH YAP YAP",
    },
]

function generateTeamCards(){
    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')

        card.innerHTML = `
        <div class = "card">
        <div class = "card-header"> ${member.name}</div>
        <div class = "card-body">
        `

        teamCardsContainer.appendChild(card)
    })
}

window.onload = generateTeamCards()