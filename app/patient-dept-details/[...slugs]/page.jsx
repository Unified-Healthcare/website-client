"use client"
import { title } from "@/components/primitives";
import { supabase } from '../../supadb.js';
import {Accordion, AccordionItem} from "@nextui-org/react";
import { useEffect, useState } from 'react';




export default function DocsPage({ params }) {
    // console.log(user);


  const [patientlist, setpatientlist] = useState([]);
const patientid=params.slugs[0];
const department=params.slugs[1];
  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from(department).select().eq('floating_patient_id', patientid);
      if (error) {
        console.error(error);
      } else {
        setpatientlist(data);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 className={title()}>Patient  {department} Department Details</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {patientlist.map((org, index) => (
          <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           
           
               

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{org.floating_description_name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{org.floating_medical_description}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {org.floating_time}
            
        </a>
    </div>
</div>


          </div>
        ))}
      </div>
    </div>
  );
}