"use client"
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import React, { useState } from 'react';
import  Html5QrcodePlugin  from '@/components/Html5QrcodePlugin';

export default function Home() {

	const [decodedText, setDecodedText] = useState('No result');
	const [decodedResult, setDecodedResult] = useState('No result');
	const onNewScanResult = (decodedText, decodedResult) => {
        // handle decoded results here
		setDecodedResult(decodedResult);
		setDecodedText(decodedText);

    };
	return (<>
		<section className="bg-white dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Unified HealthCare QR Scanner</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Please allow camera access permission and wait some time for reading the QR code generated</p>
     
        </div>
        <div className=" lg:mt-0 lg:col-span-5 text-black bg-white">
		<Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />
      
	  
        </div>            
		<p>{JSON.stringify(decodedText)}</p>
		<p>{JSON.stringify(decodedResult)}</p>
    </div>
</section>
		
		</>
	);
}
