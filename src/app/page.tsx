"use client";
//back to basic
import dynamic from "next/dynamic";
import Head from "next/head";

const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
});

export default function HomePage() {
    return (
        <>
            <Head>
                <title>River Explorer Europe</title>
                <meta
                    name='description'
                    content='Et interaktivt kart over Europa'
                />
            </Head>
            <main className='h-screen w-screen'>
                <MapWithNoSSR />
            </main>
        </>
    );
}
