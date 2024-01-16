import Header from "../components/Header";

const UserDashBoardMyProfile = () => {
  return (
    <div className="bg-violet-100">
        <Header />
        <div className="px-28 py-10">
            <div className="text-center py-5">
                <h3 className="text-violet-950 font-semibold text-4xl">Profile Settings</h3>
                <p className="text-sm font-medium py-4 text-gray-700">make changes to your profile and update</p>
            </div>
            <div className="w-full h-full rounded-md shadow bg-white px-16 py-14 mb-10">
                <form action="">
                    <div className="grid grid-cols-3 gap-10 justify-between items-center">
                        <div className="img-container h-48 w-48 rounded-full bg-black">
                            {/* <input type="file" name="" id="" /> */}
                        </div>
                        <div>
                        <div className="">
                            <div className="py-3 text-gray-600">
                                <label htmlFor="f-name">Firstname</label>
                                <input type="text" name="" id="" className="w-full rounded-md focus:outline-none border p-2 mt-2"/>
                            </div>
                            <div className="py-3 text-gray-600">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="" id="" className="w-full rounded-md focus:outline-none border p-2 mt-2"/>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="">
                            <div className="py-3 text-gray-600">
                                <label htmlFor="l-name">Lastname</label>
                                <input type="text" name="" id="" className="w-full rounded-md focus:outline-none border p-2 mt-2"/>
                            </div>
                            <div className="py-3 text-gray-600">
                                <label htmlFor="tel">Phone Number</label>
                                <input type="tel" name="" id="" className="w-full rounded-md focus:outline-none border p-2 mt-2"/>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                    <div className="">
                            <div className="py-3 text-gray-600">
                                <label htmlFor="country">Country</label>
                                <input type="text" name="" id="" className="w-full rounded-md focus:outline-none border p-2 mt-2"/>
                            </div>
                            <div className="py-3 text-gray-600">
                                <label htmlFor="state">State</label>
                                <input type="text" name="" id="" className="w-full rounded-md focus:outline-none border p-2 mt-2"/>
                            </div>
                            <div className="py-3 text-gray-600">
                                <label htmlFor="wallet-address">Wallet Address</label>
                                <input type="text" name="" id="" className="w-full rounded-md focus:outline-none border p-2 mt-2"/>
                            </div>
                        </div>
                        <div className="">
                            <div className="py-3 text-gray-600">
                                <label htmlFor="address">Address</label>
                                <input type="text" name="" id="" className="w-full rounded-md focus:outline-none border p-2 mt-2"/>
                            </div>
                            <div className="py-3 text-gray-600">
                                <label htmlFor="z-code">Zip code</label>
                                <input type="tel" name="" id="" className="w-full rounded-md focus:outline-none border p-2 mt-2"/>
                            </div>
                            <div className="py-3 text-gray-600">
                                <label htmlFor="w-a-type">Wallet Address Type</label>
                                <input type="text" name="" id="" className="w-full rounded-md focus:outline-none border p-2 mt-2"/>
                            </div>
                        </div>
                    </div>
                    <div className="text-violet-100 bg-violet-950 rounded-md text-center w-36 py-2 font-semibold m-auto flex items-center justify-center gap-3 my-6">
      <p>Update</p></div>
            </form>
        </div>
        </div>
        
    </div>
  );
};

export default UserDashBoardMyProfile;
