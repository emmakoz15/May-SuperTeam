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
        position: 'midfield',
        skills: ['dribbling', 'defending', 'shooting'],
        strengths: 'Young',
        weaknesses: 'SHORT',
        bio: "BIO FOR MESSI JR",
    },
    {
        name: 'RONALDO',
        position: 'Forward',
        skills: ['GOOD', 'Scoring', 'shooting'],
        strengths: 'BIG',
        weaknesses: 'NO Englsh',
        bio: "This is Filler Text",
    },
]

function generateTeamCards(){
    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')

        //Create a list of skills with the <li> tag
        const skillsList = member.skills.map(skill => `<li> ${skill} </li>`).join('')

        card.innerHTML = `
        <div class = "card">
            <div class = "card-header"> 
                ${member.name}
            </div>
            
            <div class = "card-body">
                <p><b>Position: </b> ${member.position}</p>
                <p><b>Skills:</b><ul>${skillsList}</ul>                <p><b>Strengths: </b>${member.strengths}</p>
                <p><b>Weaknesses: </b> ${member.weaknesses}</p>
                <p><b>bio: </b>${member.bio}</p>

            </div>
        </div>
        `

        teamCardsContainer.appendChild(card)
    })
}

window.onload = generateTeamCards()