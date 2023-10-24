

const Login = () => {
    
    
    return ( <>
         
        <section className="bg-[#ffffff]">
            <div className=" flex flex-col  items-center justify-center  min-h-screen p-6 space-y-4">
                <form className="bg-white flex flex-col space-y-6 rounded-lg shadow-lg p-6  border-[.09rem] border-[#78b0cc4b]">
                <div className=" flex flex-col space-y-2 w-[380px]   ">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="Email" id="" className="p-2.5 rounded-lg shadow-md focus:outline-blue-400 border-[.08rem] border-[#78b0cc77]" />
                </div>
                <div className=" flex flex-col space-y-2 w-[380px]   ">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" className="p-2.5 rounded-lg shadow-md focus:outline-blue-400 border-[.08rem] border-[#78b0cc77]" />
                </div>
                <div className=" flex space-y-2   ">
                    <button className="bg-blue-600 w-[380px] rounded-lg p-2.5 text-white font-bold">Login</button>
                </div>

                </form>
                
                
            </div>

        </section>
    </> );
}
 
export default Login;

