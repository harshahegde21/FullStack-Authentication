import React from 'react'

const Form = ({handleForm,username,email,password}) => {
  return (
    <React.Fragment>
        <form method="POST" onSubmit={handleForm} className="mt-30 px-0 bg-white py-20 w-90 border-1 rounded-xl">
        <h2 className="text-4xl ml-25 ">Sign up</h2>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Name"
          className="px-2 py-2 border-1 rounded mt-3 w-60 ml-8"
          value={username}
          onChange={(e) => {
            setuserName(e.target.value);
          }}
        />
        <br />
        <span ref={nameRef} className="text-red-500 m-1"></span>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="px-2 py-2 border-1 rounded mt-1 w-60 ml-8"
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
        />
        <br />
        <span ref={emailRef} className="text-red-500 m-1"></span>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="px-2 py-2 border-1 rounded mt-1 w-60 ml-8"
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
        />
        <br />
        <span ref={passwordRef} className="text-red-500 m-1"></span>
        <br />
        <button
          id="submit"
          className="ml-28 mt-5 px-2 py-1 border-1 rounded-xl cursor-pointer bg-blue-400 "
        >
          Sign in
        </button>
      </form>
    </React.Fragment>
  )
}

export default Form