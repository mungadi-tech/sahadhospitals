import { Box, Button, Flex, TextArea, TextField } from "@radix-ui/themes";

export function FeedBackForm() {
  return (
    <Flex direction="column" gap="3" className="w-full z-10">
      <span className="text-4xl font-bold">Leave a FeedBack</span>
      <span>
        Your input is valuable in helping us better understand your needs and
        tailor our services accordingly
      </span>
      <Box>
        <TextField.Root size="3" placeholder="Name" />
      </Box>
      <Box>
        <TextField.Root size="3" placeholder="Patient Type" />
      </Box>
      <Box>
        <TextField.Root size="3" placeholder="Care Type" />
      </Box>
      <Box>
        <TextField.Root size="3" placeholder="Email" />
      </Box>
      <Box>
        <TextArea size="3" resize={"both"} placeholder="Comment" />
      </Box>
      <Box>
        <Button disabled color="green" size={"4"}>
          Send
        </Button>
      </Box>
    </Flex>
  );
}
