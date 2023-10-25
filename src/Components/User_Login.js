import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const User_Login = () => {
  const [CredentialReg, setCredentialReg] = useState({
    name: '',
    email: '',
    dob: '',
    gender: '',
    password: ''
  });
  const [Credential, setCredential] = useState({
    email: '',
    password: ''
  });
  const onChange = (e) => {
    setCredential({ ...Credential, [e.target.name]: e.target.value });
  }
  const [log, setLog] = useState(true);
  let navigate = useNavigate();

  const onChangeReg = (e) => {
    setCredentialReg({ ...CredentialReg, [e.target.name]: e.target.value });
  };


  const handleRegSubmit = async (e) => {
    e.preventDefault();
    const { name, email, dob, gender, password } = CredentialReg;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ name, email, dob, gender, password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect.
      localStorage.setItem('token', json.authtoken);
      setTimeout(() => {
        alert("Registered Successfully");
      }, 200)
      navigate('/');
    }
    else {
      alert("Invalid Credentials");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = Credential;
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect.
      localStorage.setItem('token', JSON.stringify({
        authtoken: json.authtoken,
        data: json.data
      }));
      setTimeout(() => {
        alert("Login Successfully");
      }, 200)
      navigate('/');
    }
    else {
      alert("Invalid Credentials");
    }
  }
  return (
    <div className="flex w-full ">
      <div className="w-1/2 bg-red-100 h-screen flex justify-end bgimg items-center ">
        <div className="absolute top-[30%]">
          <h1 className="text-4xl text-yellow-700 font-bold mt-11 mr-7">There Is No Health</h1>
          <p className="text-2xl text-yellow-700 font-semibold">without <span className="text-black"> Mental Health</span></p>
          <div>
            {log === true ? (
              <button className="px-12 bg-gray-200 mentbtn hover:bg-gray-400 text-black font-semibold p-2 rounded-md flex justify-end my-6 items-end mx-auto" onClick={() => setLog(!log)}>
                Register
              </button>
            ) : (
              <button className="px-12 bg-gray-200 mentbtn hover:bg-gray-400 text-black font-semibold p-2 rounded-md flex justify-end my-6 items-end mx-auto" onClick={() => setLog(!log)}>
                Login
              </button>
            )}
          </div>
        </div>
      </div>
      {log === true ? (
        <div className="w-1/2 bg-[#ecb36a] h-screen">
          <h1 className="text-3xl text-center  text-#060606 font-semibold mt-9">LifeCoach</h1>
          <h3 className="text-2xl font-semibold mt-4 text-center">Login</h3>
          <p className="nb-2 my-2 mx-2 font-mono font-semibold text-center">Welcome Back!! Please Enter your details.</p>
          <div className="mx-auto w-3/4 flex flex-col">
            <form onSubmit={handleSubmit}>
              <div className="w-full flex flex-col">
                <input
                  type="email"
                  name="email"
                  value={Credential.email}
                  required
                  onChange={onChange}
                  placeholder="Email"
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none placeholder-black"
                />

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={onChange}
                  value={Credential.password}
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none placeholder-black"
                />
              </div>
              <div className="w-full flex items-center justify-end">
                <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">Forget Password?</p>
              </div>
              <div className="w-full flex flex-col my-4">
                <button type="submit" className="w-full text-white my-2 bg-[#2f2e2e] rounded-md p-2.5 text-center flex items-center justify-center cursor-pointer hover:bg-[#352525] mentbtn">
                  Log In
                </button>
              </div>
            </form>
            <div className="w-full flex items-center justify-center relative py-2">
              <p className="text-mg absolute text-black/80 bg-#f5f5f5">or</p>
            </div>
            <div className="w-full text-[#060606] my-4 font-semibold bg-gray-300 mentbtn rounded-md p-3 text-center flex items-center cursor-pointer">
              <div className="w-[50px] text-center flex">
                <FcGoogle className="text-2xl " />
              </div>
              <div className="text-center w-full">Sign In with Google</div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center my-4">
            <p className="text-sm font-normal text-#060606">Don't have an account? <span className="font-semibold underline underline-offset-2 cursor-pointer" onClick={()=>{
              setLog(!log)
            }}>Sign Up for free</span> </p>
          </div>
        </div>
      ) : (
        <div className="w-1/2 bg-[#ecb36a] h-screen">
          <h1 className="text-3xl text-center  text-#060606 font-semibold mt-9">LifeCoach</h1>
          <h3 className="text-2xl font-semibold mt-4 text-center">Register here</h3>
          <div className="mx-auto w-3/4 flex flex-col">
            <form onSubmit={handleRegSubmit}>
              <div className="w-full flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  onChange={onChangeReg}
                  value={CredentialReg.name}
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none placeholder-black"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={onChangeReg}
                  value={CredentialReg.email}
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none placeholder-black"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={onChangeReg}
                  value={CredentialReg.password}
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none placeholder-black"
                />
                <select
                  name="gender"
                  onChange={onChangeReg}
                  value={CredentialReg.gender}
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none placeholder-black "
                >
                  <option value="" className=''>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="date"
                  name="dob"
                  onChange={onChangeReg}
                  value={CredentialReg.dob}
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none placeholder-black"
                />
              </div>

              <div className="w-full flex flex-col my-4">
                <button type='submit' className="w-full text-white my-2 bg-[#2f2e2e] rounded-md p-2.5 text-center flex items-center justify-center cursor-pointer hover-bg-[#352525] mentbtn">Register</button>
              </div>
            </form>
            <div className="w-full flex items-center justify-center relative py-2">
              <p className="text-mg absolute text-black/80 bg-#f5f5f5">or</p>
            </div>
            <div className="w-full text-[#060606] my-4 font-semibold bg-gray-300 mentbtn rounded-md p-3 text-center flex items-center cursor-pointer">
              <div className="w-[50px] text-center flex">
                <FcGoogle className="text-2xl " />
              </div>
              <div className="text-center w-full">Sign up with Google</div>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default User_Login;

