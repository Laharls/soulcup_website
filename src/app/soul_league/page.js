import DivResult from "../_components/div_results_resume"

const divData = [
    {
        Division1: [
            { teamName: "Asylum", imagePath: "/images/teams/asylum.png", score: 15 },
            { teamName: "OS Sentinels", imagePath: "/images/teams/sentinels.png", score: 12 },
            { teamName: "Disband", imagePath: "/images/teams/disband.png", score: 9 },
            { teamName: "ZRX Koji", imagePath: "/images/teams/zrx_koji.png", score: 6 },
            { teamName: "Phantom", imagePath: "/images/teams/no_logo.png", score: 'F' },
            { teamName: "Phantom Thieves", imagePath: "/images/teams/phantomthieves.webp", score: 'F' },
        ],
        Division2: [
            { teamName: "La Team à Cyriaque", imagePath: "/images/teams/team_a_cyriaque.png" , score: 15 },
            { teamName: "Hana_tora", imagePath: "/images/teams/hana_tora.jpg", score: 12 },
            { teamName: "Ink Souls : Maria", imagePath: "/images/teams/ink_souls.png", score: 9 },
            { teamName: "ZRX Daiki", imagePath: "/images/teams/zrx_daiki.png", score: 6 },
            { teamName: "Lycoris", imagePath: "/images/teams/lycoris.jpg", score: 3 },
            { teamName: "Oda Ryu", imagePath: "/images/teams/oda_ryu.png", score: 'F' },
        ],
        Division3: [
            { teamName: "Draconink Spirits", imagePath: "/images/teams/draconink.png", score: 15 },
            { teamName: "Mist'ink Theory Beyond", imagePath: "/images/teams/mist_ink_theory_beyond.png", score: 12 },
            { teamName: "Mist'ink Theory Abyss", imagePath: "/images/teams/mist_ink_theory_abyss.png", score: 9 },
            { teamName: "SplatSquid Sinine", imagePath: "/images/teams/splatsquid_sinine.png", score: 6},
            { teamName: "NInk Souls : Rosina", imagePath: "/images/teams/ink_souls_rosina.png", score: 3 },
            { teamName: "Little Squids", imagePath: "/images/teams/no_logo.png", score: 'F' },
        ],
    }
]

export default function Soul_League() {
    return (
        <main className="min-h-screen">
            <div className='flex flex-col justify-center items-center mb-20'>
                <h1 className='text-white text-center text-3xl mb-8 drop-shadow-red mt-8'>Soul Cup présente : Soul League</h1>

                <p className='text-center w-[325px] leading-[25px] tracking-[0.2px] mb-8 drop-shadow-white text-lg md:w-[80%]'>
                    La Soul League est une ligue organisée par la Soul Cup sur le jeu Splatoon 3.

                </p>

                <p className='text-center w-[325px] leading-[25px] tracking-[0.2px] mb-8 drop-shadow-white text-lg md:w-[80%]'>
                    Les équipes inscrites sont réparties en plusieurs Divisions et s'affrontent sur plusieurs semaines de compétitions.
                </p>

                <p className='text-center w-[300px] leading-[25px] tracking-[0.2px] drop-shadow-white text-lg mb-8 md:w-[80%]'>
                    La spécificité de cette ligue est la mise en place de Défis. Ces derniers sont proposés durant chaque saison, et  permettent de gagner des points en les réalisants.
                </p>

                <p className='text-center w-[325px] leading-[25px] tracking-[0.2px] mb-8 drop-shadow-white text-lg md:w-[80%]'>
                    Un classement parallèle aux divisions est mis en place, ainsi même une équipe n'étant pas première d'une division peut gagner !
                </p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h2 className='text-white text-3xl mb-8 drop-shadow-red'>Résultat de la saison 1</h2>

                <DivResult divData={divData}/>
            </div>
        </main>
    )
}