import {Flex} from "@chakra-ui/react";

interface HeadlineWapperProps {
    children?: React.ReactNode;
}

export const HeadlineWapper = (props: HeadlineWapperProps) => {
    const {children} = props;
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} mb={6}>
            {children}
        </Flex>
    );
};
