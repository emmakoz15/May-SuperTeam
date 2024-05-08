const teamMembers = [ 
    {
        Sport: 'Table Tennis',
        name: 'Amy Wang',
        age: 21,
        awardsMedals:'',
        pic:'',
        bio: "BLAH BLAH BLAH YAP YAP",
    },
    {
        Sport: 'Beach Volleyball',
        name: 'Kelly Cheng',
        age: 28,
        awardsMedals:'',
        pic:'',
        bio: "BLAH BLAH BLAH YAP YAP",
    },
    {
        Sport: 'Track and Field',
        name: 'Dakotah Lindwurm',
        age: 29,
        awardsMedals:'',
        pic:'',
        bio: "BLAH BLAH BLAH YAP YAP",
    },
    {
        Sport: 'Sailing',
        name: 'Stu McNay',
        age: 36,
        awardsMedals:'',
        pic:'',
        bio: "BLAH BLAH BLAH YAP YAP",
    },
    {
        Sport: 'Fencing',
        name: 'Colin Heathcock',
        age: 36,
        awardsMedals:'',
        pic:'',
        bio: "BLAH BLAH BLAH YAP YAP",
    },
    {
        Sport: 'Golf',
        name: 'Scottie Scheffler',
        age: 27,
        awardsMedals:['Korn Ferry Tour (2019)','PGA Tour (2019-2023) ', 'Player of the Year (2021-2023)', 'Best Golfer ESPY Award (2023)','Byron Nelson Award	(2022-2023)','Vardon Trophy (2023)',],
        pic:'',
        bio: "BLAH BLAH BLAH YAP YAP",
    },
    {
        Sport: 'Rowing',
        name: 'Madeleine Wanamaker',
        age: 29,
        awardsMedals:['Gold: 2018 Plovdiv (Coxless four)', 'Bronze: 2022 Račice	(Coxless pair)'],
        pic:'',
        bio: "BLAH BLAH BLAH YAP YAP",
    },
    {
        Sport: 'Surfing',
        name: 'John John Florence',
        age: 31,
        awardsMedals:['2x World Champion (2016, 2017)', '5x Triple Crown of Surfing Champion (2011, 2013, 2016, 2020, 2021)', 'WSL Championship Tour event wins: 8'],
        pic:'',
        bio: "BLAH BLAH BLAH YAP YAP",
    },
    {
        Sport: 'Tennis',
        name: 'Coco Gauff',
        age: 20,
        awardsMedals:'She has won seven WTA Tour singles titles, including a major at the 2023 US Open, and eight doubles titles',
        pic:'',
        bio: "BLAH BLAH BLAH YAP YAP",
    },
    {
        Sport: 'Swimming (open water)',
        name: 'Mariah Denigan ',
        age: 21,
        awardsMedals:["Silver: 2019 Lima (800 m freestyle)", "Silver:2018 Eilat	(Team event)", "Bronze:2018 Eilat (5km open water)", "Silver: 2018 Suva (800 m freestyle)", "Silver: 2018 Suva (1500 m freestyle)", "Silver: 2018 Suva (400 m medley)", "Bronze: 2018 Suva (400 m freestyle)"]
        pic:'',
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