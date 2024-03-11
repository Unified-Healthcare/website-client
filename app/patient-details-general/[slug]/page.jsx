"use client"
import { title } from "@/components/primitives";
import { supabase } from '../../supadb.js';

import { useEffect, useState } from 'react';



export default function DocsPage({ params }) {
  const [patientlist, setpatientlist] = useState([]);
  const [patientid, setpatientid] = useState([]);

  useEffect(() => {
      async function fetchData() {
          const { data, error } = await supabase
              .from('patientlist')
              .select()
              .eq('floating_patient_id', params.slug);

              setpatientid(params.slug);
          if (error) {
              console.error(error);
          } else {
              setpatientlist(data);
          }
      }
      fetchData();
  }, []);

  const calculateAge = (dob) => {
      const dobDate = new Date(dob);
      const now = new Date();
      let age = now.getFullYear() - dobDate.getFullYear();
      const monthDiff = now.getMonth() - dobDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dobDate.getDate())) {
          age--;
      }
      return age;
  };

  return (
      <div>
          <h1 className={title()}>Patient Details General</h1>
<br />
<br />
<br />
          <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" className="px-6 py-3">
                              Name
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Date of Birth
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Age
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Patient ID
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Address
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Allergy Description
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Blood Group
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Medical Description
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Email
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Phone Number
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Gender
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      {patientlist.map((org, index) => (
                          <tr key={index} className=" border-b bg-gray-800 border-gray-700">
                              <td className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                                  {org.floating_name}
                              </td>
                              <td className="px-6 py-4">
                                  {org.floating_dob}
                              </td>
                              <td className="px-6 py-4">
                                  {calculateAge(org.floating_dob)}
                              </td>
                              <td className="px-6 py-4">
                                  {org.floating_patient_id}
                              </td>
                              <td className="px-6 py-4">
                                  {org.floating_address}
                              </td>
                              <td className="px-6 py-4">
                                  {org.floating_allergy_description}
                              </td>
                              <td className="px-6 py-4">
                                  {org.floating_blood_group}
                              </td>
                              <td className="px-6 py-4">
                                  {org.floating_medical_description}
                              </td>
                              <td className="px-6 py-4">
                                  {org.floating_patient_email}
                              </td>
                              <td className="px-6 py-4">
                                  {org.floating_phone_number}
                              </td>
                              <td className="px-6 py-4">
                                  {org.floating_gender}
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>

          <br />
          <br />


          <div class="inline-flex rounded-md shadow-sm">
  <a href={"/patient-dept-details/"+patientid+"/gastro"} class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
    Gastroenterology
  </a>
  <a href={"/patient-dept-details/"+patientid+"/pharmacy"} class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
    Pharmacy
  </a>
  <a href={"/patient-dept-details/"+patientid+"/cardiology"} class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
    Cardiology
  </a>
  <a href={"/patient-dept-details/"+patientid+"/neurology"} class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
    Neurology
  </a>
  <a href={"/patient-dept-details/"+patientid+"/orthopedics"} class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
    Orthopedics
  </a>
  <a href={"/patient-dept-details/"+patientid+"/urology"} class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
    Urology
  </a>
  <a href={"/patient-dept-details/"+patientid+"/oncology"} class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
    Oncology
  </a>
</div>


      </div>
  );
}
