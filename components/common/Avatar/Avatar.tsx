import Image from "next/image";

interface Props {
  className?: string;
  src: string;
}

const Avatar = ({
  className = "w-8 h-8 rounded-full shadow-md",
  src,
}: Props) => {
  return (
    <div className={className}>
      <Image
        className="object-fill rounded-full"
        src={src}
        width={50}
        height={50}
      />
    </div>
  );
};

export default Avatar;
