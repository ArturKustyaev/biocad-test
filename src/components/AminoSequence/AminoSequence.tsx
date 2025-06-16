import { Box, Stack, styled } from '@mui/material'
import { CHAR_COLOR_MAP } from '../../constants'

export interface AminoSequenceProps {
	sequence: string
	highlightChar?: (char: string, index: number) => boolean
}

export const AminoSequence = ({ sequence, highlightChar }: AminoSequenceProps) => {
	const splittedSequence = sequence.split('')

	return (
		<Box position='relative'>
			<StyledSequence>{sequence}</StyledSequence>
			<Stack direction='row' flexWrap='wrap' sx={{ userSelect: 'none' }}>
				{splittedSequence.map((char, index) => {
					const shouldHighlight = highlightChar?.(char, index) ?? true

					return (
						<StyledChar key={index} backgroundColor={shouldHighlight ? CHAR_COLOR_MAP[char] : undefined}>
							{char}
						</StyledChar>
					)
				})}
			</Stack>
		</Box>
	)
}

const StyledSequence = styled('span')(() => ({
	position: 'absolute',
	top: 0,
	left: 0,
	fontSize: '1.5rem',
	wordBreak: 'break-all'
}))

interface StyledCharProps {
	backgroundColor?: string
}

const StyledChar = styled('span', { shouldForwardProp: prop => prop !== 'backgroundColor' })<StyledCharProps>(
	({ backgroundColor }) => ({
		userSelect: 'none',
		color: 'transparent',
		fontSize: '1.5rem',
		backgroundColor
	})
)
