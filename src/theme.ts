import { createTheme } from '@mui/material'

export const theme = createTheme({
	palette: { primary: { main: '#4841e3' }, background: { default: '#f3f3f3' } },
	components: {
		MuiCssBaseline: {
			styleOverrides: theme => ({
				body: {
					backgroundColor: theme.palette.background.default,
					margin: 0,
					display: 'flex',
					placeItems: 'center',
					minWidth: '320px',
					minHeight: '100vh'
				},
				'#root': {
					maxWidth: '1280px',
					width: '100%',
					margin: '0 auto',
					padding: theme.spacing(4)
				}
			})
		},
		MuiTypography: {
			styleOverrides: {
				h3: {
					fontSize: '2.8rem',
					fontWeight: 600
				}
			}
		},
		MuiButton: {
			defaultProps: { variant: 'contained', disableElevation: true },
			styleOverrides: {
				root: { borderRadius: '20px' }
			},
			variants: [{ props: { size: 'large' }, style: ({ theme }) => ({ padding: theme.spacing(2, 1) }) }]
		},
		MuiPaper: { defaultProps: { elevation: 0 } }
	}
})
