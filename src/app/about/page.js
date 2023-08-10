import Image from "next/image"
import Staff from "../_components/staff"

const staffData = [
    { pseudo: "Splatos", to: true, caster: true, illustrator: false, developer: false, social_medias: ["https://twitter.com/Splatoscar", "https://www.instagram.com/iksplatos/"] },
    { pseudo: "Nathendo", to: true, caster: true, illustrator: false, developer: false, social_medias: ['https://twitter.com/Nathendo211'] },
    { pseudo: "Emidu383", to: true, caster: false, illustrator: true, developer: false, social_medias: ["https://twitter.com/emi_nerf", "https://www.instagram.com/woomeee/"] },
    { pseudo: "Roxane", to: false, caster: false, illustrator: true, developer: false, social_medias: ['https://twitter.com/SpiritXane', 'https://instagram.com/roxane__spirit'] },
    { pseudo: "Fly", to: true, caster: true, illustrator: false, developer: false, social_medias: [] },
    { pseudo: "Yukino", to: true, caster: false, illustrator: false, developer: false, social_medias: [] },
    { pseudo: "Low", to: true, caster: false, illustrator: true, developer: false, social_medias: [] },
    { pseudo: "Lubin", to: true, caster: false, illustrator: false, developer: false, social_medias: ['https://twitter.com/Low_du_robinet', 'https://instagram.com/lowasis_spl'] },
    { pseudo: "Raellik", to: true, caster: false, illustrator: false, developer: false, social_medias: [] },
    { pseudo: "Laharl", to: true, caster: false, illustrator: false, developer: true, social_medias: [] },
    { pseudo: "Mizu", to: true, caster: false, illustrator: false, developer: false, social_medias: [] },
]

export default function About() {
    return (
        <main className="min-h-screen">
            <div className="flex flex-col justify-center items-center">
                <Image
                    priority
                    src="/images/soul_cup.png"
                    width={200}
                    height={200}
                    alt='Logo de la Soul Cup'
                    className='my-4'
                />

                <div className='flex flex-col justify-center items-center mb-20'>
                    <h1 className='text-white text-5xl mb-8 drop-shadow-red'>A propos</h1>

                    <p className='text-center w-[325px] leading-[25px] tracking-[0.2px] mb-8 drop-shadow-white text-lg md:w-[80%]'>
                        La Soul Cup est une organisation non officielle qui a pour but de créer et gérer des tournois et des ligues sur le jeu Splatoon 3.
                    </p>

                    <p className='text-center w-[300px] leading-[25px] tracking-[0.2px] drop-shadow-white text-lg mb-8 md:w-[80%]'>
                        Tout les organisateurs sont des personnes passionnées qui ont pour but de faire vivre et diversifier la compétition.
                        Ce site représente une nouvelle étape de cet objectif. Vous pourrez ainsi consulter les équipes participantes à la Soul League, les tournois et plus encore !
                    </p>

                    <p className='text-center w-[300px] leading-[25px] tracking-[0.2px] drop-shadow-white text-lg md:w-[80%]'>
                        La Soul Cup est gérée par plusieurs personnes, tous la pour vous donner la meilleure expérience possible.
                        Retrouvez si dessous la liste des TOs, Casters ainsi que les illustratrices qui ont permit ce magnifique designs de serveur.
                    </p>
                </div>

                <div className="grid grid-cols-6 gap-4 mb-8">
                    <p className="col-span-1 text-center">Pseudo</p>
                    <p className="col-span-1 text-center">TO</p>
                    <p className="col-span-1 text-center">Caster</p>
                    <p className="col-span-1 text-center">Illustratrices</p>
                    <p className="col-span-1 text-center">Développeur</p>
                    <p className="col-span-1 text-center">Réseaux</p>

                    {staffData.map((staff, index) => (
                        <Staff pseudo={staff.pseudo} to={staff.to} caster={staff.caster} illustrator={staff.illustrator} developer={staff.developer} social_medias={staff.social_medias} />
                    ))}
                </div>

                <div className="flex flex-col justify-center items-center">
                    <p className='text-center w-[300px] leading-[25px] tracking-[0.2px] drop-shadow-white text-lg mb-8 sm:w-[80%] lg:w-full'>
                        N'hésitez pas à suivre les réseaux de Soul Cup pour vous inscrire où simplement être informé !
                    </p>

                    <div className="flex justify-center items-center gap-4">
                        <a href="https://twitter.com/SoulCup_">
                            <Image
                                src="/images/x-twitter.svg"
                                width={50}
                                height={50}
                                alt="X twitter icon"
                            />
                        </a>

                        <a href="https://discord.gg/rtJE9Cv9jx">
                            <Image
                                src="/images/discord.svg"
                                width={50}
                                height={50}
                                alt="Discord icon"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}