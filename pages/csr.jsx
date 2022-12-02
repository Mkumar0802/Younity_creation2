import React, { useEffect, useState } from "react";

function Csr() {
  const [csr, setCsr] = useState([]);

  useEffect(() => {
    const callCsr = async () => {
      const resp = await fetch(
        `https://6242b6dfb6734894c154f2f6.mockapi.io/a1/employee/`
      );
      const data = await resp.json();
      console.log(data);
      setCsr(data);
    };
    callCsr();
  }, []);

  return (
    <div className="container mx-auto">
      {csr.length === 0 && <p className="text-white bg-red-800">Loading...</p>}

      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                ID
              </th>
              <th scope="col" class="py-3 px-6">
                Name
              </th>
              <th scope="col" class="py-3 px-6">
                Age
              </th>
              <th scope="col" class="py-3 px-6">
                Country
              </th>
              <th scope="col" class="py-3 px-6">
                Email
              </th>
              <th scope="col" class="py-3 px-6">
                Mobile
              </th>
            </tr>
          </thead>
          <tbody>
            {
              csr.map( csrdata => 


                   
            <tr  key={csrdata.id}  class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                 {csrdata.id}
              </th>
              <td class="py-4 px-6">{csrdata.name}</td>
              <td class="py-4 px-6">{csrdata.age}</td>
              <td class="py-4 px-6">{csrdata.email}</td>
              <td class="py-4 px-6">{csrdata.mobile}</td>


              <td class="py-4 px-6">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
             )  
}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Csr;
