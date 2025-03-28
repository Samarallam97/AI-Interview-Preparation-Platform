import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint, FaUserCircle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { register } from '../../api/api';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const togglePasswordView = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password, firstName, lastName);
      navigate('/login');
      alert("register completed");
    } catch (error) {
      setError(error);
    }
  };

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div className="w-full h-screen flex items-center justify-center hero ">
      <div className="Main w-[90%] sm:w-2/3 md:w-[40%] p-5 flex-col flex items-center gap-3 rounded-xl shadow-slate-200 shadow-lg child">
        <h3 className="text-secondary text-base font-bold mt-5">Create your account</h3>
        <p className=" text-primary text-sm">Welcome! Please fill in the details to get started.</p>
        <div className="w-1/2 lg:w-2/3 flex gap-2">
          <div className="p-2 md:px-6 lg:px-8 cursor-pointer rounded-xl flex items-center gap-2 icon__btn">
            <AiFillGithub style={{ color: '#181717' }} className="text-lg md:text-xl" />
            <span className="text-sm md:text-base font-medium">GitHub</span>
          </div>
          <div className="p-2 md:px-6 lg:px-8 cursor-pointer rounded-xl flex items-center gap-2 icon__btn">
            <AiFillLinkedin style={{ color: '#0077B5' }} className="text-lg md:text-xl" />
            <span className="text-sm md:text-base font-medium">LinkedIn</span>
          </div>
        </div>

        <h3 className="font-lora text-xs md:text-sm px-4 text-gray-500">Or</h3>

        <div className="w-2/3 flex flex-col gap-3">
          <div className="w-full flex items-center gap-2 p-2 rounded-xl icon__btn">
            <FaUserCircle />
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
            />
          </div>
          <div className="w-full flex items-center gap-2 p-2 rounded-xl icon__btn">
            <FaUserCircle />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
            />
          </div>

          <div className="w-full flex items-center gap-2 p-2 rounded-xl icon__btn">
            <MdAlternateEmail />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
            />
          </div>

          <div className="w-full flex items-center gap-2 p-2 rounded-xl relative icon__btn">
            <FaFingerprint />
            <input
              type={showPassword ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
            />
            {showPassword ? (
              <FaRegEyeSlash
                className="absolute right-5 cursor-pointer"
                onClick={togglePasswordView}
              />
            ) : (
              <FaRegEye
                className="absolute right-5 cursor-pointer"
                onClick={togglePasswordView}
              />
            )}
          </div>
        </div>

        <button onClick={handleSubmit} className="py-2 w-2/3 bg-secondary rounded-xl mt-3 text-textcolor text-sm md:text-base mb-9">
          Sign up
        </button>

        {error && <p className="text-red-500 text-xs">{error}</p>}

        <p className="text-xs md:text-sm text-gray-500 text-center mb-2">
          Already have an account? 
          <span className="text-primary">
            <button className="cursor-pointer px-2" onClick={handleClick}>Sign in</button>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
