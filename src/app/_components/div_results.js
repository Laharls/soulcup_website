// import Image from "next/image"

// export default function DivResult({ divData }) {
//     return (
//         <div className="grid md:grid-cols-2 md:gap-8 xl:grid-cols-3">
//             {Object.keys(divData[0]).map((divisionKey, index) => (
//                 <div key={index} className="division flex flex-col justify-center items-center">
//                     <h2 className='text-white text-center text-xl mb-8 drop-shadow-red mt-8'>{divisionKey}</h2>
//                     <div className="team-list w-[300px] mb-8 border border-black rounded-lg">
//                         {divData[0][divisionKey].map((team, teamIndex) => (
//                             <div key={teamIndex} className={`team flex items-center justify-between ${teamIndex === divData[0][divisionKey].length - 1 ? 'no-border' : 'border-b border-black'}`}>
//                                 <Image 
//                                 src={team.imagePath} 
//                                 width={30} 
//                                 height={30} 
//                                 alt={`Team ${teamIndex + 1}`}
//                                 className="mr-4 my-4 ml-4"/>
//                                 <h3>{team.teamName}</h3>
//                                 <p className="pr-4">{team.score}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
// }
import Image from "next/image";

export default function DivisionResult({ season, division, teams }) {
    return (
        <div>
            {/* <h1>{season}</h1>
        <h2>{division}</h2> */}
            <table className="table-auto mx-auto">
                <thead>
                    <tr>
                        <th className="text-center py-2 px-4">Rank</th>
                        <th className="text-center py-2 px-4">Equipe</th>
                        <th className="text-center py-2 px-4">Day</th>
                        <th className="text-center py-2 px-4">Victory</th>
                        <th className="text-center py-2 px-4">Defeat</th>
                        <th className="text-center py-2 px-4">M+</th>
                        <th className="text-center py-2 px-4">M-</th>
                        <th className="text-center py-2 px-4">+/-</th>
                        <th className="text-center py-2 px-4">Points</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr key={index}>
                            <td className="text-center">{index + 1}</td>
                            <td className="flex flex-col justify-center items-center">
                                <Image
                                    priority
                                    src={team.imagePath}
                                    width={50}
                                    height={50}
                                    alt={`${team.teamName} logo`}
                                />

                                <p className="text-center">{team.teamName}</p>
                            </td>
                            <td className="text-center">{team.day}</td>
                            <td className="text-center">{team.victory}</td>
                            <td className="text-center">{team.day - team.victory}</td>
                            <td className="text-center">{team.rounds_won}</td>
                            <td className="text-center">{team.rounds_lost}</td>
                            <td className="text-center">{team.rounds_won - team.rounds_lost}</td>
                            <td className="text-center">{team.victory * 3}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}