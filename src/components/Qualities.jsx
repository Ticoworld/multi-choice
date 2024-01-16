import {SlGraph} from 'react-icons/sl'
import {FaThinkPeaks} from 'react-icons/fa'
import {SiGraphql} from 'react-icons/si'
import { useState } from 'react';
import { GiRabbit } from 'react-icons/gi';
const Qualities = () => {
  const [qualities, setQualities] = useState([
    {
      id:1,
      icon:<SlGraph/>,
      title:'STRATEGIC INVESTMENT DIVERSITY',
      body:"Multi Chain Finance offers a unique fusion of real estate, crypto, and forex investments, diversifying clients' portfolios for optimal returns. This multifaceted approach ensures a resilient strategy to maximize IRA profits."
    },
    {
      id:2,
      icon:<FaThinkPeaks/>,
      title:'INFORMED DECISION-MAKING',
      body:"Backed by meticulous market analysis and cutting-edge technologies, Multi Chain Finance makes well-timed investment decisions. This expertise ensures clients benefit from market trends, propelling their retirement dreams forward."
    },
    {
      id:3,
      icon:<SiGraphql/>,
      title:'CLIENT-CENTRIC EXCELLENCE',
      body:"Multi Chain Finance's dedication to tailored investment plans, strategic withdrawal strategies, and continuous growth ensures a personalized experience. Clients benefit from a comprehensive approach that optimizes both their retirement journey and financial prosperity."
    },
    
  ])
  return (
    <div className="qualities relative bg-violet-800">
        {/* <div className="water2"/> */}
        <div className=" px-28 py-12">
          <div>
              <div className="head flex items-center gap-1" data-aos="fade-up"><div className="line"/><p className="font-bold text-white" >WHY CHOOSE US</p></div> 
            <div className="font-bold text-4xl text-violet-100 leading-normal" data-aos="fade-up">
                Best Qualities
            </div>
            <p className="text-violet-100 py-5 text-lg leading-6 font-semibold" data-aos="fade-up">Our Team combines a passion for esports, industry  experise  & proven record in <br /> finance, development, marketing.</p>
          </div>
          
          <div className='grid grid-flow-col'>
            {
              qualities.map(quality => (
                  <div key={quality.key} className='h-full w-80 bg-white rounded-md p-4 pb-4 q-cont' data-aos="fade-up">
                                  <p className='text-right text-5xl font-bold py-2 text-violet-200 q-id' >0{quality.id}</p>
                                  <div className='text-violet-700 text-6xl py-2'>{quality.icon}</div>
                                  <h3 className='font-bold text-base py-2'>{quality.title}</h3>
                                  <p className='text-slate-600 pb-3 '>{quality.body}</p>
                              </div>
              ))
            } 
          </div>
              
        </div>
    </div>
  );
};

export default Qualities;
