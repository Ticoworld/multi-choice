import {GiChart} from 'react-icons/gi'
import {SiBitcoin} from 'react-icons/si'
import { GiHouse } from 'react-icons/gi';
import { GiOilPump } from 'react-icons/gi';
import {FaTractor} from 'react-icons/fa'
import { useState } from 'react';
const Investments = () => {

    const [tabs,setTabs] = useState([
        {
            id:1,
            title:'Forex',
            content:'we are here again',
            header:'forex and arbitrage trading',
            body:[
            "In the dynamic world of investment, Multichainfinance shines as a leading company harnessing the potential of forex trading to generate consistent profits. With a diverse team of skilled traders and cutting-edge algorithms, they leverage market trends to maximize returns. By strategically buying and selling currencies, they exploit fluctuations in exchange rates to their advantage. Employing rigorous risk management and extensive research, Multichainfinance ensures a balanced portfolio, offering investors an opportunity to passively grow their wealth. Experience the power of forex trading and discover a new realm of financial possibilities with Multichainfinance."],
            active:true,
            icon:GiChart,
            bg:'How-Citizenship-by-Investment-Unlocks-the-Potential-of-Cryptocurrency.webp'
        },
        {
            id:2,
            title:'Crypto',
            content:'we are here again',
            header:'crypto currency and NFTs',
            body:[
                "In the ever-evolving world of finance, Multichainfinance has emerged as a pioneering force, harnessing the power of cryptocurrencies to generate consistent profits. By skillfully navigating the volatile crypto market, the company utilizes strategic investment approaches to maximize returns for its investors. Leveraging cutting-edge algorithms, in-depth market analysis, and expert insights, Multichainfinance identifies lucrative opportunities and executes well-timed trades. Through disciplined risk management and diversification, the company capitalizes on the inherent potential of cryptocurrencies, offering investors a reliable avenue to unlock the wealth of the digital economy."],
            active:false,
            icon:SiBitcoin,
            bg:'Which-Type-of-Investment-Has-the-Highest-Risk.jpg'
        },
        {
            id:3,
            title:'Real Estate',
            content:'we are here again',
            header:'real estate and housing',
            body:[
                "Multichainfinance, a renowned real estate investment firm, has mastered the art of generating substantial profits from real estate investments. With a meticulous approach, they identify prime properties in high-growth areas, leveraging their expertise to make informed decisions. Through strategic acquisitions, property development, and rental income, they create a sustainable cash flow stream. Additionally, they capitalize on property appreciation, maximizing returns over the long term. As a trusted partner, Multichainfinance empowers investors to tap into the lucrative world of real estate, securing a reliable pathway to financial freedom."],
            active:false,
            icon:GiHouse,
            bg:'model-house-money-real-estate-investment-model-house-money-real-estate-investment-concept-131286610.jpg'
        },
        {
            id:4,
            title:'Oil',
            content:'we are here again',
            header:'crude oil investment',
            body:[
                "In the dynamic realm of investing, Multichainfinance stands tall as a company that strategically taps into the potential of oil and gas ventures. Through meticulous analysis and expert decision-making, the company identifies lucrative opportunities within the energy sector, capitalizing on the ever-present demand for these vital resources. By investing in carefully selected oil and gas projects, Multichainfinance generates profit through the production and sale of these valuable commodities. With a proven track record, their astute investment approach positions them as a trusted avenue for investors seeking to benefit from the enduring profitability of the oil and gas industry."],
            active:false,
            icon:GiOilPump,
            bg:'original_imageshttpsg.foolcdn.comeditorialimag.width-880_py99TiM.webp'
        },
        {
            id:5,
            title:'Agriculture',
            content:'we are here again',
            header:'argro -tech investment',
            body:[
                "Multichainfinance, a visionary company, has found an oasis of profit in the agrotech sector. By strategically investing in cutting-edge agricultural technologies, they sow the seeds of success. Leveraging precision farming, sustainable practices, and data-driven solutions, they optimize crop yields while reducing costs. From vertical farming to IoT-based monitoring systems, their agrotech portfolio blooms with potential. Through eco-conscious innovations, they cultivate healthy crops and a healthy bottom line. With a commitment to reaping sustainable returns, Multichainfinance harvests prosperity by nurturing the future of agriculture. Join them and witness the bountiful growth of agrotech investment."],
            active:false,
            icon:FaTractor,
            bg:'Invest4Land-Agriculture-Real-Estate-Investment-Investing-Farmland-Farming-Agrobusiness-Investor-Property-Managed-Farmland-Turkey-Spain-Almond-Walnut0.jpg'
        },
    ])

    const changeItems = (id)=>{
        setTabs(tabs.map(tab => (tab.id === id ? {...tab,active:true} : {...tab,active:false})))
    }
   
  return (
    <div className=" bg-violet-700">
        <div className=" px-28 py-12">
            <div className=''>
                    <div>
                    <div className="head flex items-center gap-1" data-aos="fade-up"><div className="line"/><p className="font-bold text-white">OUR MULTI-MILLION DOLLAR ASSETS</p>
            </div> 
            <div className="font-bold text-4xl text-violet-100 leading-normal" data-aos="fade-up">
            Industries We Invest In
            </div>
            <div className="text-violet-200 py-5 leading-7 font-semibold" data-aos="fade-up">
            Here are our major investments from which we build investors' profits.  <br /> Theseinvestments and their underlying assets were carefully selected,  <br />using high-end fundamental and technical analysis.
            </div>
            <div className='flex justify-between items-center gap-5'>
                    <div>
                    <div className='flex gap-8 py-4'>
                {
                    tabs.map(tab=> (
                        <div  key={tab.id} onClick={()=>{changeItems(tab.id)}} className='cursor-pointer' data-aos="fade-up">
                            <p className={tab.active === true ? `text-blue-50` : `text-violet-300`}>{tab.title}</p>
                            <div className={tab.active === true ? `active-invest`:'underline'}/>
                        </div>
                    ))
                }
                </div>

                <div>
                    {
                        tabs.map(tab => (
                            tab.active === true &&
                            <div key={tab.id} data-aos="fade-up">
                                <h3 className='font-bold text-3xl py-2 text-black'>{tab.header}</h3>
                                <p className='text-violet-100'>{tab.body}</p>
                            </div>
                        ))
                    }
                </div>
                    </div>
                    <div className="" data-aos="fade-up">
                        <img src="/src/images/showcase.jpg" alt=""   className='invest-image'/>
                    </div>

            </div>
                    </div>
            </div>
        </div>
    </div>
  );
};

export default Investments;
