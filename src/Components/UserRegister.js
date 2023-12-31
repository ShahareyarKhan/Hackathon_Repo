import React, { useContext, useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import NoteContext from '../Context/Notes/NoteContext'

const UserRegister = () => {

  const context = useContext(NoteContext);
  const { mode } = context;
  let navigate = useNavigate();

  const [Credential, setCredential] = useState({ name: "", email: "", password: "" })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = Credential;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect.
      localStorage.setItem('token', json.authtoken);

      navigate('/');
    }
    else {
      alert("Invalid Credentials");
    }
  }
  const onChange = (e) => {
    setCredential({ ...Credential, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className={`flex min-h-full flex-1 flex-col justify-center  lg:w-2/3 mx-auto px-6 py-12 lg:px-8 mb-2 ${mode === "white" ? "bg-gray-200" : "bg-gray-900"} rounded`}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight">
            Create a new account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className={`block text-sm font-medium leading-6 ${mode === "white" ? "text-black" : "text-white"}`}>
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={onChange} minLength={3}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className={`block text-sm font-medium leading-6 ${mode === "white" ? "text-black" : "text-white"}`}>
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={onChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className={`block text-sm font-medium leading-6 ${mode === "white" ? "text-black" : "text-white"}`}>
                  Password
                </label>

              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={onChange} minLength={8}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600  py-1.5  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already Account?{' '}
            <Link to='/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default UserRegister
