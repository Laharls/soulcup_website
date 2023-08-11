import Team from "../_components/team"

const teamData = [
    { teamName: "Hana_tora", imagePath: "/images/teams/hana_tora.jpg" },
    { teamName: "Ink Souls : Maria", imagePath: "/images/teams/ink_souls.png" },
    { teamName: "NInk Souls : Rosina", imagePath: "/images/teams/ink_souls_rosina.png" },
    { teamName: "Disband", imagePath: "/images/teams/disband.png" },
    { teamName: "Draconink Spirits", imagePath: "/images/teams/draconink.png" },
    { teamName: "Phantom Thieves", imagePath: "/images/teams/phantomthieves.webp" },
    { teamName: "La Team à Cyriaque", imagePath: "/images/teams/team_a_cyriaque.png" },
    { teamName: "Lycoris", imagePath: "/images/teams/lycoris.jpg" },
    { teamName: "Asylum", imagePath: "/images/teams/asylum.png" },
    { teamName: "Mist'ink Theory Abyss", imagePath: "/images/teams/mist_ink_theory_abyss.png" },
    { teamName: "Oda Ryu", imagePath: "/images/teams/oda_ryu.png" },
    { teamName: "Mist'ink Theory Beyond", imagePath: "/images/teams/mist_ink_theory_beyond.png" },
    { teamName: "OS Sentinels", imagePath: "/images/teams/sentinels.png" },
    { teamName: "SplatSquid Sinine", imagePath: "/images/teams/splatsquid_sinine.png" },
    { teamName: "ZRX Daiki", imagePath: "/images/teams/zrx_daiki.png" },
    { teamName: "ZRX Koji", imagePath: "/images/teams/zrx_koji.png" },
    { teamName: "Little Squids", imagePath: "/images/teams/no_logo.png" },
    { teamName: "Phantom", imagePath: "/images/teams/no_logo.png" },
];

export default function List_Team() {
    return (
        <main className="min-h-screen">
            <div className="flex flex-col justify-center items-center">
                <div className="mb-8 flex justify-center items-center">
                    <h1 className="text-center w-[325px] leading-9 text-[25px] drop-shadow-red text-white mt-8 sm:w-[80%]">Liste des Equipes ayant participées à une compétition Soul Cup</h1>
                </div>

                <div className="grid md:grid-cols-2 md: gap-20 xl:grid-cols-4 2xl:grid-cols-6">
                    {teamData.map((team, index) => (
                        <Team key={index} teamName={team.teamName} imagePath={team.imagePath} />
                    ))}
                </div>
            </div>

        </main>
    )
}