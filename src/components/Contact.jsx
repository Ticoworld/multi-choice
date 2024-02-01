import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className=" bg-violet-700 relative">
        <div className=" lg:px-28 px-10 py-12">
            <div className="head flex items-center gap-1" data-aos="fade-up"><div className="line"/><p className="font-bold text-white">CONTACT US</p></div> 
                <div className="font-bold md:text-3xl lg:text-4xl text-2xl text-violet-100 leading-normal" data-aos="fade-up">
                    Get In Touch
                </div>
                <p className="text-violet-100 py-5 text-lg leading-6 font-semibold" data-aos="fade-up">Any question? Reach out to us and we’ll get back to you shortly.</p>
                <div className="flex gap-5" data-aos="fade-up">
                    <FaTelegramPlane className="text-2xl text-gray-700" />
                    <MdEmail className="text-2xl text-gray-700 "/>
                </div>
        </div> 
    </div>
  );
};

export default Contact;
