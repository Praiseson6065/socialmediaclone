import { useState } from "react";

const Register = () => {
  const [emailValue, setEmail] = useState("");
  const [passValue, setPass] = useState("");
  const [nameValue, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [isAvailbleUserName, setIsAvail] = useState(null);
  
  const userNameCheck = () => {
    if (isAvailbleUserName === true && userName.length > 0) {
      return (
        <p className="text-blue-400 my-auto ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.6}
            stroke="currentColor"
            className="w-8 h-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </p>
      );
    } else if (isAvailbleUserName === false) {
      return (
        <p className="text-red-400 my-auto ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </p>
      );
    }
    return <></>;
  };
  const handleChange = ({ target }) => {
    switch (target.name) {
      case "Email":
        setEmail(target.value);
        break;
      case "Password":
        setPass(target.value);
        break;
      case "Username":
        setUserName(target.value);
        if(target.value===""){
          setIsAvail(null);
        }
        break;
      default:
        setName(target.value);
    }
  };

  const userNameStatus = (event) => {
    event.preventDefault();

    const data = {
      username: userName,
    };
    fetch("http://localhost:5000/api/user/checkusername", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setIsAvail(data.isAvailable);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const data = {
      username: userName,
      name: nameValue,
      email: emailValue,
      password: passValue,
    };
    console.log(data);
    fetch("http://localhost:5000/api/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <section className="bg-white">
        <div className=" flex flex-col  items-center justify-center  min-h-screen p-6 space-y-4">
          <h2 className=" text-3xl  font-medium text-ellipsis">Register</h2>
          <form className="flex flex-col space-y-2  ">
            <div className=" flex flex-col space-y-1 w-[400px]   ">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="Name"
                onChange={handleChange}
                className="py-1.5 px-3 rounded-md  focus:outline-blue-400 border-[.08rem] border-[#78b0cc77]"
              />
            </div>
            <div className=" flex flex-col space-y-2 w-[400px]   ">
              <label htmlFor="username">Username</label>
              <div className="rounded-md flex  focus-within:outline-offset-[-2px] w-[400px]  focus-within:outline-blue-400 focus-within:outline focus-within:outline-2  border-[.08rem] border-[#78b0cc77]">
                <input
                  type="text"
                  name="Username"
                  onChange={handleChange}
                  onBlur={userNameStatus}
                  className="py-1.5 px-3  rounded-md  w-[360px] outline-none "
                />
                {userNameCheck()}
              </div>
            </div>
            <div className=" flex flex-col space-y-2 w-[400px] ">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="Email"
                onChange={handleChange}
                className="py-1.5 px-3  rounded-md  focus:outline-blue-400 border-[.08rem] border-[#78b0cc77]"
              />
            </div>

            <div className=" flex flex-col space-y-2 w-[400px]   ">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="Password"
                onChange={handleChange}
                className="py-1.5 px-3 rounded-md  focus:outline-blue-400 border-[.08rem] border-[#78b0cc77]"
              />
            </div>
            <div className=" flex space-y-2   ">
              <button
                className="bg-blue-600 w-[400px] rounded-md py-1.5  text-white font-bold"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
