import Image from 'next/image'

export default function Team({teamName, imagePath}){
    return(
        <div className="h-[350px] flex flex-col justify-center items-center">
            <Image 
                priority
                src={imagePath}
                width={200}
                height={200}
                alt="Logo d'une team participante team"
                className='mb-4'
            />
            <h2 className='text-center'>{teamName}</h2>
        </div>
    )
}