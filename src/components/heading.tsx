const Heading = ({ title }: { title: string }) => {
  return (
    <div className="text-2xl font-bold text-zinc-100 md:text-4xl">{title}</div>
  );
};

export default Heading;
