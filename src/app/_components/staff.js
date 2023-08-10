import Image from "next/image"

export default function Staff({pseudo, to, caster, illustrator, developer, social_medias }) {
    const isTwitterLink = (link) => link.includes("twitter.com");
    const isInstagramLink = (link) => link.includes("instagram.com");

    return (
        <>
            <p className="col-span-1 text-center flex justify-center items-center">{pseudo}</p>
            <p className="col-span-1 text-center flex">{to ? <Image src="/images/checkmark.svg" width={25} height={25} alt="Green checkmark" className="my-0 m-auto"/> : <Image src="/images/xmark.svg" width={25} height={25} alt="Red x mark" className="my-0 m-auto"/>}</p>
            <p className="col-span-1 text-center flex">{caster ? <Image src="/images/checkmark.svg" width={25} height={25} alt="Green checkmark" className="my-0 m-auto"/> : <Image src="/images/xmark.svg" width={25} height={25} alt="Red x mark" className="my-0 m-auto"/>}</p>
            <p className="col-span-1 text-center flex">{illustrator ? <Image src="/images/checkmark.svg" width={25} height={25} alt="Green checkmark" className="my-0 m-auto"/> : <Image src="/images/xmark.svg" width={25} height={25} alt="Red x mark" className="my-0 m-auto"/>}</p>
            <p className="col-span-1 text-center flex">{developer ? <Image src="/images/checkmark.svg" width={25} height={25} alt="Green checkmark" className="my-0 m-auto"/> : <Image src="/images/xmark.svg" width={25} height={25} alt="Red x mark" className="my-0 m-auto"/>}</p>
            <p className="col-span-1 text-center flex justify-around items-center">
                {social_medias.length !== 0 &&
                    social_medias.map((media, index) => (
                        <a key={index} href={media} target="_blank" rel="noopener noreferrer">
                            {isTwitterLink(media) ? (
                                <Image src="/images/x-twitter.svg" width={25} height={25} alt="Twitter Icon" className="my-0 m-auto"/>
                            ) : isInstagramLink(media) ? (
                                <Image src="/images/instagram.svg" width={25} height={25} alt="Instagram Icon" className="my-0 m-auto"/>
                            ) : (
                                <Image src="/images/xmark.svg" width={25} height={25} alt="Red x mark" className="my-0 m-auto"/>
                            )}
                        </a>
                    ))}
            </p>
        </>
    )
}