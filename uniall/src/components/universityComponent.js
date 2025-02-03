import React, { useEffect, useState } from 'react';
import { getAllUniversities } from '../services/universityService';

const UniversityList = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    const fetchUniversities = async () => {
      const data = await getAllUniversities();
      setUniversities(data);
    };

    fetchUniversities();
  }, []);

  return (
    console.log(universities),
    <div>
      <h1>Universities</h1>
      <table>
           <thead>
             <tr>
               <th>Name</th>
               <th>Country</th>
               <th>Web Pages</th>
             </tr>
           </thead>
           <tbody>
             {universities.map((university) => (
               <tr key={university.id}>
                 <td>{university.name}</td>
                 <td>{university.country}</td>
                 <td>
                   {university.webPages.map((webPage, index) => (
                     <a key={index} href={webPage} target="_blank" rel="noopener noreferrer">
                       {webPage}
                     </a>
                   ))}
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
    </div>
  );
};

export default UniversityList;