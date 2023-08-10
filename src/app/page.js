import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-undertale">

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
          <h1 className='text-white text-5xl mb-8 drop-shadow-red'>Soul Cup</h1>

          <p className='text-center w-[325px] leading-[25px] tracking-[0.2px] mb-8 drop-shadow-white text-lg'>
            Bienvenue sur le site web de la Soul Cup !
            Sur ce site, vous avez la possibilité de consulter les équipes participants aux tournois et à la Soul League.
          </p>

          <p className='text-center w-[300px] leading-[25px] tracking-[0.2px] drop-shadow-white text-lg'>
            N'hésitez pas à parcourir les différents onglets, et rejoignez notre <a href='https://discord.gg/rtJE9Cv9jx' className='text-red'>serveur discord</a> pour participer aux évènements.
          </p>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-white text-3xl mb-4 drop-shadow-red'>Evènement en cours</h2>

          <p className='drop-shadow-white text-lg'>Soul League : Saison 1 finie</p>
        </div>

      </div>

    </main>
  )
}