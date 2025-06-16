import z from 'zod'
import { FORM_ERRORS, AMINO_ACID_REGEX } from '../../constants'

const aminoSequenceSchema = z.string().min(1, FORM_ERRORS.required).regex(AMINO_ACID_REGEX, FORM_ERRORS.aminoAcid)

export const formSchema = z
	.object({
		sequence1: aminoSequenceSchema,
		sequence2: aminoSequenceSchema
	})
	.refine(
		data => {
			return data.sequence1.length === data.sequence2.length
		},
		{ message: FORM_ERRORS.lengthMismatch, path: ['sequence2'] }
	)

export type FormValues = z.infer<typeof formSchema>

export const defaultValues: FormValues = {
	sequence1: '',
	sequence2: ''
}
