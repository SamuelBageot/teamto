import { Container } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <main
        style={{
          minHeight: "100vh"
        }}
      >
        {children}
      </main>
    </Container>
  );
};

export default Layout;
