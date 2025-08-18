import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const generateStrongPassword = () => {
  const length = 12;
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPasswordSuggestion, setShowPasswordSuggestion] = useState(false);
  const [suggestedPassword, setSuggestedPassword] = useState('');
  const [password, setPassword] = useState('');

  const hasCapital = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasMinLength = password.length >= 8;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const handlePasswordFocus = () => {
    if (isSignUp) {
      const pass = generateStrongPassword();
      setSuggestedPassword(pass);
      setShowPasswordSuggestion(true);
    }
  };

  const handlePasswordBlur = () => {
    setShowPasswordSuggestion(false);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full relative"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        exit={{ y: 50 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <X size={20} />
        </button>

        {/* ZUCCESS Logo */}
        <img
          src="/assets/zuccess-logo.png" // تأكد أن المسار صحيح
          alt="Zuccess Logo"
          className="mx-auto mb-4 h-10"
        />

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">
          {isSignUp ? 'Create Your Account' : 'Welcome to Zuccess'}
        </h2>

        <form className="space-y-4">
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              onChange={handlePasswordChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            {showPasswordSuggestion && (
              <div className="text-sm text-gray-500 mt-1">
                Suggested: <span className="font-mono">{suggestedPassword}</span>
              </div>
            )}

            {isSignUp && (
              <div className="mt-2 space-y-1 text-sm">
                <PasswordRequirement label="Capital Letter" met={hasCapital} />
                <PasswordRequirement label="Number" met={hasNumber} />
                <PasswordRequirement label="Special Character" met={hasSpecialChar} />
                <PasswordRequirement label="Minimum 8 characters" met={hasMinLength} />
              </div>
            )}
          </div>
          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          )}
          <button
            type="submit"
            className="w-full bg-accent text-white py-2 rounded-lg hover:bg-accent-dark transition duration-300"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">OR</div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition">
            <FcGoogle size={20} />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition text-blue-600">
            <FaFacebook size={20} />
            Continue with Facebook
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <span
                className="text-accent cursor-pointer"
                onClick={() => setIsSignUp(false)}
              >
                Sign in
              </span>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <span
                className="text-accent cursor-pointer"
                onClick={() => setIsSignUp(true)}
              >
                Sign up
              </span>
            </>
          )}
        </p>
      </motion.div>
    </motion.div>
  );
};

interface PasswordRequirementProps {
  label: string;
  met: boolean;
}

const PasswordRequirement: React.FC<PasswordRequirementProps> = ({ label, met }) => {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" checked={met} readOnly className="cursor-default" />
      <span className={met ? 'text-green-600 font-semibold' : 'text-gray-600'}>
        {label}
      </span>
    </div>
  );
};

export default LoginModal;
