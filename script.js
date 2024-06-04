const teamMembers = [ 
    {
        Sport: 'Table Tennis',
        name: 'Amy Wang',
        age: 21,
        awardsMedals:[
            "2019 Pan American Games: Gold in Women's Team",
        "2018 Pan American Championships: Gold in Women's Team",
        "2019 Pan American Championships: Gold in Women's Team, Silver in Women's Singles, Bronze in Women's Doubles",
        "Multiple ITTF World Junior Circuit Events: Various medals in singles, doubles, and team events",
        "USA Table Tennis Championships: Multiple titles including National Women's Singles Champion"],
        pic:'images/amy.jpeg',
        bio: "Amy Wang is a prominent American table tennis player known for her international achievements, including gold medals at the Pan American Games and Championships. As a consistent top performer, she has won numerous titles in national competitions, establishing herself as a key figure in the sport.",
        number: 1 , 
    },
    {
        Sport: 'Beach Volleyball',
        name: 'Kelly Cheng',
        age: 28,
        awardsMedals:["AVP (Association of Volleyball Professionals) Tour wins",
            "FIVB (International Volleyball Federation) World Tour victories",
            "NCAA (National Collegiate Athletic Association) All-American honors",
            "Beach Volleyball Hall of Fame induction",
            "Regional and national championships in various tournaments"],
        pic:'images/Kelly.Cheng_.webp',
        bio: "Kelly Cheng is a highly accomplished beach volleyball player known for her dominance on the AVP and FIVB circuits, earning numerous tour wins and accolades throughout her career. With a strong presence in both domestic and international competitions, Cheng's skill, determination, and leadership have solidified her status as one of the sport's elite athletes.",
        number: 2, 
    },
    {
        Sport: 'Track and Field',
        name: 'Dakotah Lindwurm',
        age: 29,
        awardsMedals:[
            "Gold Medal: Pan American Games (Team event)",
"Silver Medal: Pan American Games (Individual event)",
"National Championship Titles: Multiple titles in Track and Field events",
"Olympic Trials Qualifier: Qualified for the U.S. Olympic Team Trials"
        ],
        pic:'images/dakotah.jpeg',
        bio: "Dakotah Libdwurm is a distinguished track and field athlete, celebrated for her outstanding performances on the global stage, including Olympic and World Championships participation. With a repertoire of titles, records, and accolades in various events, Libdwurm's dedication and talent have solidified her as a formidable force in the world of track and field.",
        number: 3,
    },
    {
        Sport: 'Sailing',
        name: 'Stu McNay',
        age: 42,
        awardsMedals:[
            "Olympic Participation: Represented the USA in Sailing at multiple Olympic Games",
"Pan American Games Medals: Silver and Bronze medals in Sailing events",
"World Championships Medals: Multiple top finishes in the 470 class",
"National Sailing Titles: Multiple national championship titles in the 470 class"
        ],
        pic:'images/stu.jpeg',
        bio: "Stu McNay is a highly accomplished American sailor known for his exceptional skill and numerous achievements in the sport of sailing, including representing the United States in multiple Olympic Games. With a passion for the sea and a relentless pursuit of excellence, McNay continues to inspire and leave his mark on the world of competitive sailing.",
        number: 1,
    },
    {
        Sport: 'Golf',
        name: 'Scottie Scheffler',
        age: 27,
        awardsMedals:['Korn Ferry Tour (2019)','PGA Tour (2019-2023) ', 'Player of the Year (2021-2023)', 'Best Golfer ESPY Award (2023)','Byron Nelson Award	(2022-2023)','Vardon Trophy (2023)',],
        pic:'images/scottie.jpeg',
        bio: "Scottie Scheffler is a professional golfer known for his powerful drives and consistent play on the PGA Tour. With a strong amateur career and several notable finishes in professional tournaments, Scheffler has quickly risen through the ranks as one of golf's promising talents.",
        number: 2
    },
    {
        Sport: 'Rowing',
        name: 'Madeleine Wanamaker',
        age: 29,
        awardsMedals:['Gold: 2018 Plovdiv (Coxless four)', 'Bronze: 2022 Račice	(Coxless pair)'],
        pic:'images/Madeleine.jpeg',
        bio: "Madeleine Wanamaker is a passionate rower, known for her dedication and skill in competitive rowing events. With a relentless drive and a love for the sport, she navigates the waters with precision and grace, leaving an indelible mark in the rowing community.",
        number: 3,
    },
    {
        Sport: 'Surfing',
        name: 'John John Florence',
        age: 31,
        awardsMedals:['2x World Champion (2016, 2017)', '5x Triple Crown of Surfing Champion (2011, 2013, 2016, 2020, 2021)', 'WSL Championship Tour event wins: 8'],
        pic:'images/johnjohn.jpeg',
        bio: "John John Florence is a Hawaiian professional surfer known for his fearless approach to big waves and innovative maneuvers. With multiple World Surf League championships under his belt, he's widely regarded as one of the greatest surfers of his generation.",
        number: 1,
    },
    {
        Sport: 'Tennis',
        name: 'Coco Gauff',
        age: 20,
        awardsMedals:'She has won seven WTA Tour singles titles, including a major at the 2023 US Open, and eight doubles titles',
        pic:'images/coco.jpeg',
        bio: "Coco Gauff, a rising tennis prodigy, captivates audiences worldwide with her electrifying athleticism and fearless on-court demeanor. With a meteoric rise to fame, she's become a beacon of inspiration for aspiring athletes everywhere.",
        number: 2,
    },
    {
        Sport: 'Swimming (open water)',
        name: 'Mariah Denigan ',
        age: 21,
        awardsMedals:["Silver: 2019 Lima (800 m freestyle)", "Silver:2018 Eilat	(Team event)", "Bronze:2018 Eilat (5km open water)", "Silver: 2018 Suva (800 m freestyle)", "Silver: 2018 Suva (1500 m freestyle)", "Silver: 2018 Suva (400 m medley)", "Bronze: 2018 Suva (400 m freestyle)"],
        pic:'images/Mariah.jpeg',
        bio: "Mariah Denigan is a record-breaking swimmer known for her incredible speed and determination in the pool, setting new benchmarks with every stroke. With a passion for excellence and a relentless drive, she's making waves both in and out of competition.",
        number: 3,
    },
];

function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards');

    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('col-4');
        card.classList.add('mt-3');
    

        // Styling based on sport
        let backgroundColor = '';

        switch(member.number){
            case 1:
                backgroundColor = 'red';
                break;
            case 2:
                backgroundColor = 'white';
                break;
              case 3:
                    backgroundColor = 'blue';
                    break;
            default:
                backgroundColor = 'white';
        }


    

        // Create a list of awards with the <li> tag if it exists and is an array
        let awardsList = '';
        if (Array.isArray(member.awardsMedals)) {
            awardsList = member.awardsMedals.map(award => `<li>${award}</li>`).join('');
        } else {
            awardsList = member.awardsMedals;
        }

        card.innerHTML = `
            <div class="card border rounded img-fluid ">
                <div class="card-header text"  style="background-color: ${backgroundColor};"> 
                    ${member.name}
                </div>
                <div class="card-body " style="background-color: ${backgroundColor};">
                    <p><b>Age: </b>${member.age}</p>
                    <p><b>Sport: </b>${member.Sport}</p>
                    <p><b>Awards and Medals: </b><ul>${awardsList}</ul></p>
                    <p><b>Bio: </b>${member.bio}</p>
                    <div class="text-center">
                    <img class="img-fluid text-center" src=${member.pic}><br><br>
                    </div>

                </div>
            </div>
        `;

        teamCardsContainer.appendChild(card);
    });
}

window.onload = generateTeamCards;

//https://www.nbcsports.com/olympics/news/2024-usa-olympic-team-roster-athletes