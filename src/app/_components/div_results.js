import Image from "next/image"

export default function DivResult({ divData }) {
    return (
        <div className="grid md:grid-cols-2 md:gap-8 xl:grid-cols-3">
            {Object.keys(divData[0]).map((divisionKey, index) => (
                <div key={index} className="division flex flex-col justify-center items-center">
                    <h2 className='text-white text-center text-xl mb-8 drop-shadow-red mt-8'>{divisionKey}</h2>
                    <div className="team-list w-[300px] mb-8 border border-black rounded-lg">
                        {divData[0][divisionKey].map((team, teamIndex) => (
                            <div key={teamIndex} className={`team flex items-center justify-between ${teamIndex === divData[0][divisionKey].length - 1 ? 'no-border' : 'border-b border-black'}`}>
                                <Image 
                                src={team.imagePath} 
                                width={30} 
                                height={30} 
                                alt={`Team ${teamIndex + 1}`}
                                className="mr-4 my-4 ml-4"/>
                                <h3>{team.teamName}</h3>
                                <p className="pr-4">{team.score}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}