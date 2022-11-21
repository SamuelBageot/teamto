import {
  Card,
  Image,
  Heading,
  CardBody,
  Stack,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { FC } from "react";
import { NavLink } from "react-router-dom";

export type CharacterTemplateProps = {
  uid?: string;
  name?: string;
  url?: string;
  search: string;
  characterID: number;
};

const CharacterCard: FC<CharacterTemplateProps> = ({
  uid,
  name,
  characterID,
  url,
  search,
}) => {
  return (
    <NavLink to={`/characters/${characterID}`} style={{ color: 'black', textDecoration: 'none' }}>
      <Card border="3px solid #FFE81F" borderRadius={5} padding={5} height='200px' bgColor='whitesmoke' width='180px' display={'flex'} textAlign='center' justifyContent='center' alignItems={'center'}>
        <CardBody>
          <Flex direction="column" justifyContent="center" alignItems="center">
            <Stack>
              <Heading size="md">{name}</Heading>
            </Stack>
          </Flex>
        </CardBody>
        <Divider />
      </Card>
    </NavLink>
  );
};

export default CharacterCard;
