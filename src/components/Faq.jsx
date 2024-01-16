import { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
const Faq = () => {
    const [faqs,setFaqs] = useState([
        {
            id:1,
            active:true,
            question:'What is IRA and how does it work?',
            answer:"An individual retirement account (IRA) allows you to save and invest money for your retirement with tax advantages. A Roth IRA offers tax-free growth potential on after-tax contributions. For a traditional IRA, your investments have the opportunity to grow tax-deferred with before-tax and after-tax contributions.Each year the IRS sets a maximum amount that you can contribute across all of your IRAs, including those outside of Multichainfinance. For 2023, the contribution limit is $6,500 for people under age 50, and $7,500 for people age 50 and over. You can either make a new IRA contribution that counts towards your annual limit or rollover funds from another retirement account to reinvest.",
        },
        {
            id:2,
            active:false,
            question:'where does the investment go into?',
            answer:"Multichainfinance reinvests the funds generated from this platform, into real estate, gold stock investment, agro-tech industries and oil exploration industries around the world. these industries generate enough revenue to constantly satisfy the client's returns, and keep the company running",
        },
        {
            id:3,
            active:false,
            question:'What are the advantages of joining this platform?',
            answer:'Your account will be managed by a professional financial manager. We monitor the financial markets every day and regularly review your portfolio to ensure that an optimal blend of investments is being used to meet your individual goals. This provides our clients with many benefits, including more time to pursue what really interests them.',
        },
        {
            id:4,
            active:false,
            question:'how do i withdraw my profit?',
            answer:'its as easy as you can possibly imagine, you just have to go to the withdrawal page. select your withdrawal method, enter amount to withdraw, then paste your wallet address and submit. then wait for like 30 minutes after placing withdrawal order and there you go, your wallet address will be credited.',
        },
        {
            id:5,
            active:false,
            question:'What cryptocurrencies can I use?',
            answer:'Multichainfinance supports at least 3 crypto currencies for transactions which include BTC, USDT, ETHEREUM. We plan on supporting more crypto currencies in the near future.',
        },
    ])

    const dropDown = (id)=>{
        setFaqs(
        faqs.map(faq => faq.id === id ? {...faq, active:!faq.active} : {...faq, active:false}))
        
    }
  return <div className="faq  bg-violet-800">
            <div className=" px-28 py-12">
                    <div className="head flex items-center gap-1" data-aos="fade-up"><div className="line"/><p className="font-bold text-white">FAQ</p>
                     </div> 
                <div className="font-bold text-4xl text-violet-100 leading-normal" data-aos="fade-up">
                    Frequently Asked Questions
                </div>
                <p className="text-violet-100 py-5 text-lg leading-6 font-semibold" data-aos="fade-up">We’ve provided some information about Multichainfinance, Multichainfinance Plans,  cryptocurrencies, <br />and few other common questions you might want to ask. If you have any other questions, <br /> contact our live support system or email address.</p>

                <div>
                    {
                        faqs.map(faq=> (
                            <div key={faq.id} className='bg-violet-950 my-2 p-5 rounded-md' data-aos="fade-up">
                                <div className='flex justify-between'>
                                    <h3 className='font-semi-bold text-xl text-violet-100'>{faq.question}</h3>
                                    <AiOutlinePlus onClick={()=>{dropDown(faq.id)}} className={ `cursor-pointer text-white bg-violet-800 p-2 h-10 w-10 text-2xl rounded-full ${faq.active === true?`rotate-180 transition-all duration-300`:`-rotate-180  transition-all duration-300`}`}/>
                                </div>
                                <div className={`text-violet-400 pt-5 `} style={{display:faq.active? 'block' : 'none'}}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>;
};

export default Faq;
