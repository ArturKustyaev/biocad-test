import { useEffect } from 'react'

interface UseCopyTextParams {
	ref: React.RefObject<HTMLElement | null>
	onSuccess?: (text: string) => void
	onError?: (error: unknown) => void
}

export const useCopyText = ({ ref, onSuccess, onError }: UseCopyTextParams) => {
	useEffect(() => {
		const handleMouseUp = async () => {
			const selection = window.getSelection()
			const selectedText = selection?.toString().trim()

			if (!selectedText) return

			if (ref?.current && selection?.rangeCount) {
				const range = selection.getRangeAt(0)
				if (!ref.current.contains(range.commonAncestorContainer)) return
			}

			try {
				await navigator.clipboard.writeText(selectedText)
				onSuccess?.(selectedText)
			} catch (err) {
				onError?.(err)
			}
		}

		document.addEventListener('mouseup', handleMouseUp)
		return () => document.removeEventListener('mouseup', handleMouseUp)
	}, [ref, onSuccess, onError])
}
