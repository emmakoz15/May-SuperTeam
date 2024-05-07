const teamMembers = [ 
    {
        Sport: 'Archery',
        name: 'Lionel Messi',
        age: 36,
        yearsPlayed: true,
        skills: ['dribbling', 'passing', 'shooting'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        bio: "BLAH BLAH BLAH YAP YAP",
    },
    {
        Sport: 'Beach Volleyball',
        name: 'Lionel Messi',
        age: 36,
        yearsPlayed: true,
        skills: ['dribbling', 'passing', 'shooting'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        bio: "BLAH BLAH BLAH YAP YAP",
    },
    {
        Sport: 'Cycling BMX Racing',
        name: 'Lionel Messi',
        age: 36,
        yearsPlayed: true,
        skills: ['dribbling', 'passing', 'shooting'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        bio: "BLAH BLAH BLAH YAP YAP",
    },
    {
        Sport: 'Diving',
        name: 'Lionel Messi',
        age: 36,
        yearsPlayed: true,
        skills: ['dribbling', 'passing', 'shooting'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        bio: "BLAH BLAH BLAH YAP YAP",
    },
    {
        Sport: 'Fencing',
        name: 'Lionel Messi',
        age: 36,
        yearsPlayed: true,
        skills: ['dribbling', 'passing', 'shooting'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        bio: "BLAH BLAH BLAH YAP YAP",
    },
    {
        Sport: 'Golf',
        name: 'Lionel Messi',
        age: 36,
        yearsPlayed: true,
        skills: ['dribbling', 'passing', 'shooting'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        bio: "BLAH BLAH BLAH YAP YAP",
    },
    {
        Sport: 'Rowing',
        name: 'Lionel Messi',
        age: 36,
        yearsPlayed: true,
        skills: ['dribbling', 'passing', 'shooting'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        bio: "BLAH BLAH BLAH YAP YAP",
    },
    {
        Sport: 'Surfing',
        name: 'John John Florence',
        age: 36,
        yearsPlayed: true,
        skills: ['dribbling', 'passing', 'shooting'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        bio: "BLAH BLAH BLAH YAP YAP",
    },
    {
        Sport: 'Tennis',
        name: 'Coco Gauff',
        age: 36,
        yearsPlayed: true,
        skills: ['dribbling', 'passing', 'shooting'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        bio: "BLAH BLAH BLAH YAP YAP",
    },
    {
        Sport: 'Skateboarding',
        name: 'Lionel Messi',
        age: 36,
        yearsPlayed: true,
        skills: ['dribbling', 'passing', 'shooting'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        bio: "BLAH BLAH BLAH YAP YAP",
    },

    //https://www.nbcsports.com/olympics/news/2024-usa-olympic-team-roster-athletes
]

function generateTeamCards(){
    const teamCardsContainer = document.getElementById('teamCards')

    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')
        card.classList.add('mt-3')

        //styling down here
        let backgroundColor 
        switch(member.position){
            case 'forward':
            backgroundColor = 'gray'
            break
            case 'midfield':
            backgroundColor = 'aqua'
            break
            default:
            backgroundColor = 'green'

        }

       

        //Create a list of skills with the <li> tag
        const skillsList = member.skills.map(skill => `<li> ${skill} </li>`).join('')

        card.innerHTML = `
        <div class = "card">
            <div class = "card-header" style="background-color: ${backgroundColor};"> 
                ${member.name}
            </div>
            
            <div class = "card-body" style="background-color: ${backgroundColor};">
                
                <p><b>Age: </b>${member.age}</p>
                <p><b>Sport: </b> ${member.sport}</p>
                <p><b>Years Played: </b>${member.yearsPlayed}</p>
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