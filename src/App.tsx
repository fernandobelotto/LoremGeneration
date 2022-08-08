import {
  Box,
  Button,
  Center,
  CopyButton,
  NumberInput,
  Radio,
  Stack,
  Text,
  Title
} from "@mantine/core";
import { loremIpsum } from "lorem-ipsum";
import { LoremUnit } from "lorem-ipsum/types/src/constants/units";
import { useState } from "react";

export default function App() {
  const [lorem, setLorem] = useState("");
  const [unity, setUnity] = useState<LoremUnit>("words");
  const [quantity, setQuantity] = useState(1);

  function generateLorem() {
    setLorem(
      loremIpsum({
        count: quantity,
        units: unity,
      })
    );
  }

  return (
    <>
      <Center style={{ height: "80vh" }}>
        <Stack>
          <Title>Lorem ipsum generator</Title>

          <Radio.Group
            onChange={(e) => setUnity(e)}
            label="Select unity of generation"
          >
            <Radio value="words" label="By Word(s)" />
            <Radio value="paragraphs" label="By Paragraph(s)" />
            <Radio value="sentences" label="By Sentences" />
          </Radio.Group>

          <NumberInput
            value={quantity}
            onChange={(e) => setQuantity(e || 0)}
            defaultValue={100}
            placeholder="Select the quantity"
            label="Select the quantity"
          />
          <Button onClick={generateLorem}>Generate!</Button>

          <CopyButton value={lorem} timeout={2000}>
            {({ copied, copy }) => (
              <Button color={copied ? "teal" : "blue"} onClick={copy}>
                {copied ? "Copied" : "Copy value"}
              </Button>
            )}
          </CopyButton>
        </Stack>
      </Center>
      <Box style={{ padding: "32px" }}>
        <Text align="center">{lorem}</Text>
      </Box>
    </>
  );
}
