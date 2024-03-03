// // GitHubStats.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import CalendarHeatmap from 'react-calendar-heatmap';
// import 'react-calendar-heatmap/dist/styles.css';

// const GitHubStats = () => {
//   const [githubStats, setGithubStats] = useState(null);
//   const [contributionData, setContributionData] = useState([]);

//   useEffect(() => {
//     const fetchGithubStats = async () => {
//       try {
//         const response = await axios.get('https://api.github.com/users/dxtAshish');
//         setGithubStats(response.data);
//       } catch (error) {
//         console.error('Error fetching GitHub stats:', error);
//       }
//     };

//     fetchGithubStats();
//   }, []);

//   useEffect(() => {
//     const fetchContributionData = async () => {
//       if (githubStats) {
//         try {
//           const response = await axios.get(`https://api.github.com/users/dxtAshish/contributions`);
//           // Assuming the API returns an array of contributions
//           setContributionData(response.data);
//         } catch (error) {
//           console.error('Error fetching contribution data:', error);
//         }
//       }
//     };

//     fetchContributionData();
//   }, [githubStats]);

//   return (
//     <div className="h-screen flex justify-center items-center">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold mb-4">GitHub Stats</h2>
//         {githubStats ? (
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <h3 className="font-semibold">Public Repositories</h3>
//               <p>{githubStats.public_repos}</p>
//             </div>
//             <div>
//               <h3 className="font-semibold">Followers</h3>
//               <p>{githubStats.followers}</p>
//             </div>
//             {/* Add more stats as needed */}
//           </div>
//         ) : (
//           <p>Loading GitHub stats...</p>
//         )}
//         {contributionData.length > 0 && (
//           <div className="mt-4">
//             <h3 className="font-semibold">Contribution Graph</h3>
//             <CalendarHeatmap
//   startDate={new Date('2016-01-01')}
//   endDate={new Date('2016-04-01')}
//   values={[
//     { date: '2016-01-01', count: 12 },
//     { date: '2016-01-22', count: 122 },
//     { date: '2016-01-30', count: 38 },
//     // ...and so on
//   ]}
// />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GitHubStats;
