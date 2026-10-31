import Image from "next/image";

export default function ImageTec({
  technologies,
}: {
  technologies: ITechnologie[];
}) {
  return (
    <div>
      {[false, true].map((duplicate) =>
        technologies.map(({ technologie }, index) => {
          const name = technologie.toLowerCase();
          return (
            <Image
              key={`${duplicate}-${name}-${index}`}
              alt={duplicate ? "" : technologie}
              aria-hidden={duplicate || undefined}
              width={100}
              height={100}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${encodeURIComponent(name.split("-")[0])}/${encodeURIComponent(name)}.svg`}
            />
          );
        }),
      )}
    </div>
  );
}
