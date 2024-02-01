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
        <div className=" lg:px-28 px-10 py-12">
          <div>
              <div className="head flex items-center gap-1" data-aos="fade-up"><div className="line"/><p className="font-bold text-white" >WHY CHOOSE US</p></div> 
            <div className="font-bold md:text-3xl lg:text-4xl text-2xl text-violet-100 leading-normal" data-aos="fade-up">
                Best Qualities
            </div>
            <p className="text-violet-100 py-5 text-lg leading-6 font-semibold" data-aos="fade-up">Our Team combines a passion for esports, industry  experise  & proven record in <br /> finance, development, marketing.</p>
          </div>
          
          <div className='flex justify-center items-center min-h-screen mt-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-flow-col lg:gap-10'>
              {qualities.map(quality => (
                <div key={quality.id} className='h-full w-80 lg:w-72 bg-white rounded-md p-4 pb-4 q-cont' data-aos="fade-up">
                  <p className='text-right text-5xl  font-bold py-2 text-violet-200 q-id'>0{quality.id}</p>
                  <div className='text-violet-700 text-6xl py-2'>{quality.icon}</div>
                  <h3 className='font-bold text-base py-2'>{quality.title}</h3>
                  <p className='text-slate-600 pb-3 lg:text-sm'>{quality.body}</p>
                </div>
              ))}
            </div>
      </div>
              
        </div>
    </div>
  );
};

export default Qualities;
