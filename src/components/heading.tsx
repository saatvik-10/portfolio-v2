const Heading = ({ title }: { title: string }) => {
  return (
    <div className="text-xl font-bold text-zinc-100 md:text-2xl">{title}</div>
  );
};

export default Heading;
