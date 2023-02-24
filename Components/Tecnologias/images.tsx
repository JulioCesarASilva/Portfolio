import Image from "next/image";

export default function ImageTec({ technologies }: { technologies: ITechnologie[] }) {
    return <div>
      {
        technologies.map((item, index)=>
            <Image alt={item.technologie} key={index} width={100} height={100}  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.technologie.toLocaleLowerCase().split("-")[0]}/${item.technologie.toLocaleLowerCase()}.svg`} />
        )
      }
      {
        technologies.map((item, index)=>
            <Image alt={item.technologie} key={index} width={100} height={100}  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.technologie.toLocaleLowerCase().split("-")[0]}/${item.technologie.toLocaleLowerCase()}.svg`} />
        )
      }
  </div>
}