import React from "react";

const Form = ({ username, setUsername, password, setPassword, label }) => {
  return (
    <div className="flex justify-center">
      <form className="p-10 flex flex-col border border-gray-200 rounded-2xl shadow-xl space-y-8">
        <h2 className="text-center text-xl font-bold">{label}</h2>
        <div>
          <label htmlFor="username" className="pr-2 text-lg">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
            className=" p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="password" className="pr-2 text-lg">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className=" p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="p-3 border-2 bg-[#03202a] border-[#ff5e00] rounded-2xl text-white">
          {label}
        </button>
      </form>
    </div>
  );
};

export default Form;
