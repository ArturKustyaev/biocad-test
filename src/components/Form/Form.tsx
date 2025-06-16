import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Paper, Stack, styled, TextField, Typography, typographyClasses } from '@mui/material'
import { useForm } from 'react-hook-form'
import { AMINO_ACID_REGEX } from '../../constants'
import { defaultValues, formSchema, type FormValues } from './schema'

interface FormProps {
	onSubmit: (values: FormValues) => void
}

export const Form = ({ onSubmit }: FormProps) => {
	const {
		formState: { errors },
		register,
		handleSubmit
	} = useForm({ defaultValues, resolver: zodResolver(formSchema) })

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (!AMINO_ACID_REGEX.test(e.key) && e.key.length === 1 && !e.metaKey) {
			e.preventDefault()
		}
	}

	return (
		<StyledFormPaper elevation={0}>
			<Stack component='form' spacing={4} alignItems='center' onSubmit={handleSubmit(onSubmit)}>
				<Typography variant='h3' textAlign='center'>
					BIOCAD
				</Typography>
				<TextField
					{...register('sequence1')}
					label='Введите 1 последовательность'
					helperText={errors.sequence1?.message}
					error={!!errors.sequence1}
					fullWidth
					onKeyDown={handleKeyDown}
				/>
				<TextField
					{...register('sequence2')}
					label='Введите 2 последовательность'
					helperText={errors.sequence2?.message}
					error={!!errors.sequence2}
					fullWidth
					onKeyDown={handleKeyDown}
				/>
				<StyledButton type='submit' size='large'>
					Ок
				</StyledButton>
			</Stack>
		</StyledFormPaper>
	)
}

const StyledFormPaper = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(8),
	width: '100%',
	maxWidth: 600,
	borderRadius: theme.spacing(3),

	[`& .${typographyClasses.h3}`]: {
		paddingBottom: theme.spacing(3)
	},

	[theme.breakpoints.down('sm')]: {
		padding: theme.spacing(5),

		[`& .${typographyClasses.h3}`]: {
			fontSize: '2.2rem',
			paddingBottom: theme.spacing(2)
		}
	}
}))

const StyledButton = styled(Button)(() => ({
	width: '100%'
}))
