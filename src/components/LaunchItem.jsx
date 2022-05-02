import { Box, Flex, Text, Spacer, Tag} from '@chakra-ui/react'
 

export function LaunchItem(launch) {
return (
<Box         
    bg="gray.100"
    p={3}
    ml={3}
    mt={3}
>
    <Flex>
        <Text fontSize="lg">
        {launch.mission_name} - {launch.rocket.second_stage.payloads[0].nationality}
        </Text>
        <Spacer />
        <Tag p={3} colorScheme={launch.launch_success ? "green" : "red"}>
        {launch.launch_success ? "Success" : "Failure"}
        </Tag>
    </Flex>          
</Box>
)
}