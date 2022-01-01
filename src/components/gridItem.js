import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
  url,
  width,
  height
}) => (
  <Box w="100%" textAlign="center">
    <a href={url} target="_blank">
      <LinkBox cursor="pointer">
        {thumbnail && (
          <img
            id={id}
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            width={width}
            height={height}
          />
        )}
        <LinkOverlay href={url} target="_blank">
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </a>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
        margin:0 auto;
      }
    `}
  />
)
