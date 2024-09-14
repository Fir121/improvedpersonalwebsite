import Image from 'next/image';

export function PreviewCard({ title, image }: { title: string, image: string }) {
    return (
        <div className="w-full rounded-sm md:rounded-lg overflow-hidden relative" style={{aspectRatio: "1.8/1"}}>
            <Image src={image} alt={title} fill={true}/>
        </div>
    );
}