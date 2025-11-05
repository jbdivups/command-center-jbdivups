import {Box, Heading, Text} from '@chakra-ui/react';

interface HeadlineProps {
    title: string;
    description?: string;
}

export const Headline = (props: HeadlineProps) => {
    const {title, description} = props;
    return (
        <Box>
            <Heading fontWeight={'bold'} size={'3xl'}>{title}</Heading>
            <Text color={'gray.500'}>{description}</Text>
        </Box>
    );
};
