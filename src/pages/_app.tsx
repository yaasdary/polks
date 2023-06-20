import React from "react"
import '../styles/globals.scss'
import { AppProps } from 'next/app'
import {Provider} from "react-redux";
import {store} from "../store";
// import 'swiper/swiper.scss';


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp