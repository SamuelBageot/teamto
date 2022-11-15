import { Container } from "@chakra-ui/react";
import Header from "../Header";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Container maxW={"1500px"}>
      <Header />
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