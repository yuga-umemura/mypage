import Container from "./Container";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <div className="flex items-center w-full justify-center bg-white text-black py-6">
        {children}
      </div>
    </Container>
  );
}
