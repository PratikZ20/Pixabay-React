// import React, { useEffect, useState } from 'react'
// import axios from '.././axios'
// import { useParams } from 'react-router-dom'
// import { API_KEY } from '../request'

// const CastDetails = () => {

//     const {castId, castName}=useParams();
//     const [castDtl, setCastDtl]=useState({});
//     const baseUrl = "https://image.tmbd.org/t/p/original/"

//     useEffect(()=>{
//         async function fetchCastDetails(){
//             const details = await axios.get(
//                 `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=en-US&page=1&query=${castName}`
//             )
//             setCastDtl(details.data.results);
//             console.log(details.data.results);
//             return details;
//         }
//         fetchCastDetails();
//     },[castId])
//   return (
//     <div>
//         <img src={`${baseUrl}${x.profile_path}`} />
//         <h2>{x.name}</h2>
//         <h2>Populor Movies</h2>
//         <div>
//             {x.known_for.map((Movie)=>(
//                 <div key={Movie.id}>
//                     <img src={`${baseUrl} ${Movie.poster_path}`} alt="" />
//                     <div>
//                         <h3>{Movie.title}</h3>
//                         <p>{Movie.overview}</p>
//                         <p>Release Date:{Movie.release_date}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
      
//     </div>
//   )
// }

// export default CastDetails


// import React, { useEffect, useState } from 'react';
// import axios from '../axios';
// import { useParams } from 'react-router-dom';
// import { API_KEY } from '../request';

// const CastDetails = () => {
//   const { castName } = useParams();
//   const [castDtl, setCastDtl] = useState({});
//   const baseUrl = "https://image.tmdb.org/t/p/original/";

//   useEffect(() => {
//     async function fetchCastDetails() {
//       const details = await axios.get(
//         `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=en-US&page=1&query=${castName}`
//       );
//       setCastDtl(details.data.results[0]); // Assuming you want details for the first result
//       console.log(details.data.results[0]);
//       return details;
//     }
//     fetchCastDetails();
//   }, [castName]);

//   return (
//     <div>
//       <img src={`${baseUrl}${castDtl.profile_path}`} alt={castDtl.name} />
//       <h2>{castDtl.name}</h2>
//       <h2>Popular Movies</h2>
//       <div>
//         {castDtl.known_for.map((Movie) => (
//           <div key={Movie.id}>
//             <img src={`${baseUrl}${Movie.poster_path}`} alt={Movie.title} />
//             <div>
//               <h3>{Movie.title}</h3>
//               <p>{Movie.overview}</p>
//               <p>Release Date: {Movie.release_date}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CastDetails;

import React, { useEffect, useState } from 'react';
import axios from '../axios';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../request';

const CastDetails = () => {
  const { castName } = useParams();
  const [castDtl, setCastDtl] = useState({});
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchCastDetails() {
      const details = await axios.get(
        `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=en-US&page=1&query=${castName}`
      );
      setCastDtl(details.data.results[0]); // Assuming you want details for the first result
      console.log(details.data.results[0]);
      return details;
    }
    fetchCastDetails();
  }, [castName]);

  return (
    <div>
      <img src={`${baseUrl}${castDtl.profile_path}`} alt={castDtl.name} />
      <h2>{castDtl.name}</h2>
      <h2>Popular Movies</h2>
      <div>
        {castDtl.known_for?.map((Movie) => (
          <div key={Movie.id}>
            <img src={`${baseUrl}${Movie.poster_path}`} alt={Movie.title} />
            <div>
              <h3>{Movie.title}</h3>
              <p>{Movie.overview}</p>
              <p>Release Date: {Movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastDetails;
