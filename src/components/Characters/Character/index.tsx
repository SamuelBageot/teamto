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
      <Card border="1px solid lightgrey" height='200px' bgColor='whitesmoke' width='180px'>
        <CardBody>
          <Flex direction="column" justifyContent="center" alignItems="center">
            {/* <Image
                h={{ sm: 100, md: 120, lg: 150 }}
                w={{ sm: 100, md: 120, lg: 150 }}
                mb={5}
                borderRadius='full'
                src="https://lumiere-a.akamaihd.net/v1/images/image_1760b382.jpeg?region=0,0,2048,878"
                objectFit='cover'
                alt="Green double couch with wooden legs"
                /> */}
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
