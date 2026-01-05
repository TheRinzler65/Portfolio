interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="flex flex-col items-center mb-10 md:mb-14">
      <h1 className="uppercase font-bold text-3xl md:text-4xl tracking-wider text-base-content">
        {title}
      </h1>
      <div className="h-1.5 w-16 bg-accent mt-2 rounded-full"></div>
    </div>
  );
};

export default Title;