type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="container w-full max-w-full">
      <div className="items-center">{children}</div>
    </div>
  );
}
