import {BsChevronDoubleDown} from 'react-icons/bs'
const About = () => {
  return (
  <div className=" about bg-violet-700">
    <div className='water1'/>
    <div className=" lg:px-28 px-10 py-12">
        <div className="head flex items-center gap-1" data-aos="fade-up"><div className="line"/><p className="font-bold text-white">ABOUT US</p></div>
        <div>
            <div className="font-bold md:text-3xl lg:text-4xl text-2xl text-violet-100 leading-normal" data-aos="fade-up">
            Learn More About Multi <br />Chain Finance
            </div>
            <p className="text-violet-200 py-5 leading-7 lg:font-semibold" data-aos="fade-up">
                Multi Chain Finance is an online platform that maximizes the slight differences in prices <br /> of global forex exchange rate and investment in real estate, crude oil and agriculture <br /> to inturn satisfy her clients. We also help to manage and save our client's <br /> funds for future use, ready to be withdrawn at any point. <br />
                we have very experienced experts and agents in the above mentioned  areas of <br /> investment, so be rest assured that your investments are very safe with us.
            </p>
            <button className="rounded-xl bg-blue-600 px-6 py-2 flex items-center gap-2 my-6 text-md font-semibold" data-aos="fade-up"><BsChevronDoubleDown/> <p>READ MORE</p> </button>
        </div>
        </div>
  </div>
  );
};

export default About;
