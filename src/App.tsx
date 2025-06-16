import { AminoSequencesResult } from '@components/AminoSequencesResult/AminoSequencesResult'
import { Form } from '@components/Form/Form'
import { type FormValues } from '@components/Form/schema'
import { Stack } from '@mui/material'
import { useState } from 'react'

function App() {
	const [formData, setFormData] = useState<FormValues | null>(null)

	const submitForm = (data: FormValues) => {
		setFormData(data)
	}

	return (
		<Stack alignItems='center'>
			<Form onSubmit={submitForm} />
			{formData && (
				<Stack width='100%' alignItems='center' mt={4}>
					<AminoSequencesResult sequence1={formData.sequence1} sequence2={formData.sequence2} />
				</Stack>
			)}
		</Stack>
	)
}

export default App
