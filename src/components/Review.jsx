import {ImQuotesLeft} from 'react-icons/im'
import {ImQuotesRight} from 'react-icons/im'
import { IoStar } from "react-icons/io5";import { useState } from 'react';
const Review = () => {
    const [reviews, setReviews] = useState(
        [
            {
                id:1,
                img:`/rev5.jpg`,
                name:`John D.`,
                rev:`I've been investing with MultichainFinance for over a year now, and I couldn't be happier with the results. The team's expertise in utilizing IRAs for real estate and cryptocurrencies is truly remarkable. They've not only helped me diversify my investment portfolio but also guided me through the entire process with professionalism and transparency.I've achieved financial stability and peace of mind.
                `
            },
            {
                id:2,
                img:`/rev2.jpg`,
                name:`mary J.`,
                rev:`MultichainFinance has exceeded my expectations in every way possible. As someone who wanted to explore investment opportunities beyond traditional options, I was initially hesitant. However, the team's in-depth knowledge and personalized approach put my mind at ease. My investments have shown consistent growth, and I feel confident knowing that my financial future is in capable hands.

                `
            },
            {
                id:3,
                img:`/rev.jpg`,
                name:`Rose M..`,
                rev:` Choosing MultichainFinance for my IRA investments was undoubtedly one of the best decisions I've made. The team's deep understanding of both real estate and crypto markets is evident in their well-researched and strategic investment approach. They take the time to explain the intricacies of each investment, ensuring I'm well-informed and comfortable with the decisions being made.
                `
            },
        ]
    )
  return(
    <div className='bg-violet-950 relative'>
        <div className=" lg:px-28 px-10 py-12">
        <div className="head flex items-center gap-1" data-aos="fade-up"><div className="line"/><p className="font-bold text-white">WHAT OUR CUSTOMERS ARE SAYING</p>
            </div> 
            <div className="font-bold md:text-3xl lg:text-4xl text-2xl text-violet-100 leading-normal pb-3" data-aos="fade-up">
            Customer Reviews
            </div>
            <div className='flex justify-center items-center min-h-screen mt-5'>
            <div className='grid grid-cols-1 gap-7 xl:grid-cols-3 md:grid-cols-2' >
            {
                reviews.map(review => (
                    <div key={review.id} className='bg-violet-100 px-6 py-4 rounded-md z-10 w-80' data-aos="fade-up">
                        <div className="flex items-center">
                            <div className='h-32 w-32 '>
                                <img src={review.img} alt=""  className='p-2 w-full h-full bg-cover rounded-full object-cover'/>
                            </div>
                            
                            <div>
                               <div className='flex'>
                                <IoStar  className='fill-yellow-500'/>
                                <IoStar className='fill-yellow-500' />
                                <IoStar  className='fill-yellow-500'/>
                                <IoStar  className='fill-yellow-500'/>
                                <IoStar  className='fill-yellow-500'/>
                            </div> 
                            <h3>{review.name}</h3>
                            </div>
                        </div>
                        <div className='flex flex-col py-5'>
                           <ImQuotesLeft className='text-4xl text-gray-700'/>
                        <p>{review.rev}</p>
                        <ImQuotesRight className='text-4xl self-end text-gray-700'/> 
                        </div>
                        
                    </div>
                ))
            }
            </div>
            </div>
        </div>
    </div>
  ) ;
};

export default Review;
