import React from "react";

const Register = () => {
  return (
    <div className="container mx-auto px-6 my-6">
      <form>
        <input className="border w-full my-1 rounded-xl" type="text" />
        <input className="border w-full my-1 rounded-xl" type="email" />
        <input className="border w-full my-1 rounded-xl" type="password" />
        <input
          className="border w-full my-1 rounded-xl bg-green-400 text-white"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Register;
