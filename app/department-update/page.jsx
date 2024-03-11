"use client"
import { supabase } from '../supadb.js'
import { useState } from 'react';
import { title } from "@/components/primitives";
import { useRouter } from 'next/navigation'
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime.js';
// import { Toast } from 'flowbite-react';
// import { HiFire } from 'react-icons/hi';
// import { HiCheck, HiExclamation, HiX } from 'react-icons/hi';
// import { useClerk,SignedIn,SignedOut } from "@clerk/nextjs";


// Generate a random ID of length 8

export default function DocsPage() {
    const router = useRouter()
 
    // const { user } = useClerk();
    const [patientId, setpatientId] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Get form data
        const formData = new FormData(event.target);
        const patientId = formData.get('floating_patient_id');
        const patientName = formData.get('floating_name');
        const patientDepartment = formData.get('floating_department');
console.log(patientId);
        // Prepare the data object to be inserted
        const dataToInsert = {};
        for (const [key, value] of formData.entries()) {
            dataToInsert[key] = value;
        }
    console.log(dataToInsert);
        // Insert into patientlist table
        const { data, error: patientListError } = await supabase
            .from(patientDepartment)
            .insert([dataToInsert])
            .select('*');

        if (patientListError) {
            console.error(patientListError.message);
            return;
        }
console.log(data);
if(data){
    setShowSuccessMessage(true);

    // router.push(/qrpage/+patientId+"/"+patientName)
}
    };
	return (<>
		<div>
			<h1 className={title()}>Department Updation Page</h1>
            </div>
<br />
{/* {(user!=undefined) &&  (user.publicMetadata.admin!="yes")&&( 

    <Toast>
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
        <HiFire className="h-5 w-5" />
      </div>
      <div className="ml-3 text-sm font-normal">Oopsie you are not an admin </div>
      <Toast.Toggle /> 
      </Toast>)} */}

{showSuccessMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Success!</strong>
                    <span className="block sm:inline"> Data inserted successfully.</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg onClick={() => setShowSuccessMessage(false)} className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.354 5.646a.5.5 0 0 0-.708 0L10 9.293 6.354 5.646a.5.5 0 1 0-.708.708L9.293 10l-3.647 3.646a.5.5 0 1 0 .708.708L10 10.707l3.646 3.647a.5.5 0 0 0 .708-.708L10.707 10l3.647-3.646a.5.5 0 0 0 0-.708z"/></svg>
                    </span>
                
                </div>
            )}
             <br />
             {/* {user && (user.publicMetadata.admin=="yes") && ( */}
<form className="max-w-md mx-auto" onSubmit={handleSubmit}>
  <div className="relative z-0 w-full mb-5 group">
   
      <input  type="text" name="floating_description_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description Name</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
   
      <input  type="text" name="floating_patient_id" id="floating_id" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Patient ID</label>
  </div>
  <div className="hidden">
  <input type="hidden" id="floating_time" name="floating_time" value={new Date().toISOString()} />
</div>



  <div className="relative z-0 w-full mb-5 group">
  <label htmlFor="floating_department" className="block text-sm font-medium text-gray-200 mb-1">Department</label>
  <div className="relative">
    <select id="floating_department" name="floating_department" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-800 dark:text-white">
      <option value="gastro">Gastroenterology</option>
      <option value="pharmacy">Pharmacy</option>
      <option value="cardiology">Cardiology</option>
      <option value="neurology">Neurology</option>
      <option value="orthopedics">Orthopedics</option>
      <option value="urology">Urology</option>
      <option value="oncology">Oncology</option>
    
    </select>

  </div>
</div>





  <div className="relative z-0 w-full mb-5 group">
      <textarea name="floating_medical_description" id="floating_description" rows="3" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Medical Description </label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form> 
{/* )} */}

	</>	
	);
}
