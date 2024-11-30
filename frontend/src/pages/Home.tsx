import React from 'react';


const HomePage = () => {
   return (
       <div
           style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               minHeight: '100vh',
               width: '100vw',
               background: `linear-gradient(
                   rgba(40, 44, 52, 0.8),
                   rgba(67, 67, 67, 0.8)
                 ), url('/public/stock.png')`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               padding: '0',
               margin: '0',
               boxSizing: 'border-box',
           }}
       >
           <div
               style={{
                   display: 'flex',
                   flexDirection: 'row',
                   alignItems: 'center',
                   justifyContent: 'space-between',
                   backgroundColor: '#ffffff',
                   borderRadius: '15px',
                   boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                   padding: '40px',
                   maxWidth: '1200px',
                   width: '90%',
                   gap: '20px',
                   flexWrap: 'wrap',
               }}
           >


               <div
                   style={{
                       flex: '1 1 300px',
                       textAlign: 'left',
                       marginBottom: '20px',
                   }}
               >
                   <h1
                       style={{
                           fontSize: '3rem',
                           color: '#282c34',
                           marginBottom: '15px',
                           fontWeight: 'bold',
                       }}
                       className="font-link"
                   >
                       TradeViewPro
                   </h1>
                   <p
                       style={{
                           fontSize: '1.2rem',
                           color: '#555',
                           marginBottom: '20px',
                           lineHeight: '1.6',
                       }}
                   >
                       <b> TradeViewPro </b> is the all in one stock visualization tool to track,
                       analyze, and visualize the latest stock trends and data. Start by
                       browsing the markets or by exploring a stock's detailed performance.
                   </p>
                   <div>
                       <button
                           onClick={() => (window.location.href = '/markets')}
                           style={{
                               padding: '12px 25px',
                               marginRight: '10px',
                               marginBottom: '10px',
                               backgroundColor: '#007bff',
                               color: 'white',
                               border: 'none',
                               borderRadius: '5px',
                               fontSize: '1rem',
                               fontWeight: 'bold',
                               cursor: 'pointer',
                               boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                           }}
                       >
                           Explore Markets
                       </button>
                       <button
                           onClick={() => (window.location.href = '/portfolio')}
                           style={{
                               padding: '12px 25px',
                               backgroundColor: '#28a745',
                               color: 'white',
                               border: 'none',
                               borderRadius: '5px',
                               fontSize: '1rem',
                               fontWeight: 'bold',
                               cursor: 'pointer',
                               boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                           }}
                       >
                           View Portfolio
                       </button>
                   </div>
               </div>


               <div
                   style={{
                       flex: '1 1 300px',
                       textAlign: 'center',
                   }}
               >
                   <img
                       src="/public/stock.png"
                       alt="Stock Visualization"
                       style={{
                           width: '100%',
                           maxWidth: '600px',
                           borderRadius: '15px',
                           boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                       }}
                   />
               </div>
           </div>
       </div>
   );
};


export default HomePage;