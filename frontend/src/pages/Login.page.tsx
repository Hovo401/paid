import { useState } from 'react';
import Footer from '../components/footer/Footer.component';
import Header from '../components/header/Header.component';
import { NavLink, useNavigate } from 'react-router-dom';
import api from '../api/api';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 2) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      const fetch = async () => {
        try {
          const res = await api.post('/auth/login', {
            email: formData.email,
            password: formData.password,
          });
          if (res.status === 200) {
            localStorage.setItem('token', res.data.access_token);
            navigate(`/accaunt`);
          } else {
            alert('code : ' + res.status);
          }
        } catch (e:any) {
          alert('code : ' + e?.status && '');
        }
      };
      fetch();
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  return (
    <>
      <Header />
      <main className="w-[100%] flex-grow my-10">
        <div className="bg_c_1 t_c_1000 p-5 max-w-[400px] mx-auto  shadow-lg rounded-2xl">
          <div>
            <h2 className="text-2xl font-bold text_c_0 mb-6">Login</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text_c_0 text-sm font-medium text-text2-light dark:text-text2-dark mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg_c_2 t_c_1000 dark:border-gray-600 dark:text-white"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text_c_0 text-sm font-medium text-text2-light dark:text-text2-dark mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg_c_2 t_c_1000 dark:border-gray-600 dark:text-white"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 cursor-pointer main_color text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>
          <div className="mt-4 text-center text1_">
            <p
              className="text_c_0"
              // to="/RegInfluencer"
              // className={({ isActive }) =>
              //   `text-text_c_0-light dark:text-text_c_0-dark text-base hidden lg:block ${
              //     isActive ? "underline" : ""
              //   }`
              // }
            >
              Forgot your password?
            </p>
          </div>
          <div className="mt-4 text-center text1_">
            <NavLink
              to="/Registration"
              className={({ isActive }) =>
                `text-text_c_0-light dark:text-text_c_0-dark text-base  ${
                  isActive ? 'underline' : ''
                }`
              }
            >
              Registration
            </NavLink>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Login;
