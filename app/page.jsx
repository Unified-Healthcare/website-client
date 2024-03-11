"use client"
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';


export default function Home() {
	const [data, setData] = useState('No result');
	const [facingMode, setFacingMode] = useState('environment');
	const toggleFacingMode = () => {
		setFacingMode((prevFacingMode) =>
		  prevFacingMode === 'environment' ? 'user' : 'environment'
		);
	  };
	return (<>
		<section className="bg-white dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Unified HealthCare QR Scanner</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Please allow camera access permission and wait some time for reading the QR code generated</p>
     
        </div>
        <div className=" lg:mt-0 lg:col-span-5 ">
		<QrReader
		facingMode={facingMode}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <button onClick={toggleFacingMode}>
        Switch Camera ({facingMode === 'environment' ? 'Front' : 'Back'})
      </button>
        </div>   
		<br />         
		<p>{data}</p>
    </div>
</section>
		
		</>
	);
}
