import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'

import 'components/App/index.scss'

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
	<>
		<Head>
			<link
				key="fonts-googleapis-preconnect"
				rel="preconnect"
				href="https://fonts.googleapis.com"
			/>
			<link
				key="fonts-gstatic-preconnect"
				rel="preconnect"
				href="https://fonts.gstatic.com"
			/>
			<link
				key="fonts-googleapis"
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Acme&display=swap"
			/>
		</Head>
		<Component {...pageProps} />
	</>
)

export default App
