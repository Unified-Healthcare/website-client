"use client"
import { title } from "@/components/primitives";
import { supabase } from '../../supadb.js';

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
           
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{org.floating_name}</h5>
              </a>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{org.floating_dob}</p>
              <div className="flex items-center justify-between mt-5">
                <span className="text-sm text-gray-600 dark:text-gray-400">{org.floating_patient_id}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{org.floating_description_name}</span>
              </div>
              <div className="flex items-center justify-between mt-5">
                <span className="text-sm text-gray-600 dark:text-gray-400">{org.floating_time}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{org.floating_blood_group}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{org.floating_medical_description}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{org.floating_department}</span>
             
              </div>
               </div>
          </div>
        ))}
      </div>
    </div>
  );
}