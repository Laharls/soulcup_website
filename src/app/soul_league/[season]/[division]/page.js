import DivResult from "@/app/_components/div_results";

const divData = [
    {
        division1: [
            { teamName: "Asylum", imagePath: "/images/teams/asylum.png", day: 5, victory: 5, rounds_won:20, rounds_lost:4},
            { teamName: "OS Sentinels", imagePath: "/images/teams/sentinels.png", day: 5, victory: 4, rounds_won:18, rounds_lost:7 },
            { teamName: "Disband", imagePath: "/images/teams/disband.png", day: 5, victory: 3, rounds_won:17, rounds_lost:11 },
            { teamName: "ZRX Koji", imagePath: "/images/teams/zrx_koji.png", day: 5, victory: 5, rounds_won:20, rounds_lost:4 },
            { teamName: "Phantom", imagePath: "/images/teams/no_logo.png", day: 5, victory: 2, rounds_won:11, rounds_lost:12 },
            { teamName: "Phantom Thieves", imagePath: "/images/teams/phantomthieves.webp", day: 5, victory: 0, rounds_won:0, rounds_lost:20 },
        ],
        division2: [
            { teamName: "La Team à Cyriaque", imagePath: "/images/teams/team_a_cyriaque.png", day: 5, victory: 5, rounds_won:20, rounds_lost:3 },
            { teamName: "Hana_tora", imagePath: "/images/teams/hana_tora.jpg", day: 5, victory: 4, rounds_won:17, rounds_lost:4 },
            { teamName: "Ink Souls : Maria", imagePath: "/images/teams/ink_souls.png", day: 5, victory: 3, rounds_won:13, rounds_lost:8 },
            { teamName: "ZRX Daiki", imagePath: "/images/teams/zrx_daiki.png", day: 5, victory: 2, rounds_won:10, rounds_lost:13 },
            { teamName: "Lycoris", imagePath: "/images/teams/lycoris.jpg", day: 5, victory: 1, rounds_won:5, rounds_lost:16 },
            { teamName: "Oda Ryu", imagePath: "/images/teams/oda_ryu.png", day: 5, victory: 0, rounds_won:0, rounds_lost:-20 },
        ],
        division3: [
            { teamName: "Draconink Spirits", imagePath: "/images/teams/draconink.png", day: 5, victory: 5, rounds_won:20, rounds_lost:5 },
            { teamName: "Mist'ink Theory Beyond", imagePath: "/images/teams/mist_ink_theory_beyond.png", day: 5, victory: 4, rounds_won:17, rounds_lost:7 },
            { teamName: "Mist'ink Theory Abyss", imagePath: "/images/teams/mist_ink_theory_abyss.png", day: 5, victory: 3, rounds_won:15, rounds_lost:9 },
            { teamName: "SplatSquid Sinine", imagePath: "/images/teams/splatsquid_sinine.png", day: 5, victory: 2, rounds_won:13, rounds_lost:13 },
            { teamName: "NInk Souls : Rosina", imagePath: "/images/teams/ink_souls_rosina.png", day: 5, victory: 1, rounds_won:5, rounds_lost:16 },
            { teamName: "Little Squids", imagePath: "/images/teams/no_logo.png", day: 5, victory: 0, rounds_won:0, rounds_lost:-20 },
        ],
    }
]

export default function Division({ params }) {
    // Extract season and division from the params object
    const { season, division } = params;
  
    // Find the division data based on the division parameter
    const divisionData = divData.find(data => data.hasOwnProperty(division));
  
    // If divisionData is found, extract the data; otherwise, display a message
    const teams = divisionData ? divisionData[division] : [];
  
    return (
      <main className="min-h-screen">
        <DivResult season={season} division={division} teams={teams}/>
      </main>
    );
  }