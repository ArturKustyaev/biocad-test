import { Paper, Snackbar, styled } from '@mui/material'
import { useRef, useState } from 'react'
import { useCopyText } from '../../hooks/useCopyText'
import { AminoSequence, type AminoSequenceProps } from '../AminoSequence/AminoSequence'
import type { FormValues } from '../Form/schema'

export const AminoSequencesResult = ({ sequence1, sequence2 }: FormValues) => {
	const ref = useRef<HTMLDivElement>(null)
	const [open, setOpen] = useState(false)

	const highlightChar: AminoSequenceProps['highlightChar'] = (char, index) => sequence1[index] === char

	const openSnackbar = () => {
		setOpen(true)
	}

	const closeSnackbar = () => {
		setOpen(false)
	}

	useCopyText({
		ref,
		onSuccess: openSnackbar
	})

	return (
		<StyledAminoSequencesResultPaper ref={ref}>
			<AminoSequence sequence={sequence1} />
			<AminoSequence sequence={sequence2} highlightChar={highlightChar} />
			<Snackbar message='Текст успешно скопирован' autoHideDuration={3000} open={open} onClose={closeSnackbar} />
		</StyledAminoSequencesResultPaper>
	)
}

const StyledAminoSequencesResultPaper = styled(Paper)(({ theme }) => ({
	maxWidth: 600,
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(2),
	padding: theme.spacing(4),
	borderRadius: theme.spacing(3)
}))
