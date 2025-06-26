import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Footer from "../components/footer/Footer.component";
import Header from "../components/header/Header.component";
import { NavLink } from "react-router-dom";

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email format").nonempty("Email is required"),
  phoneNumber: z.string().nonempty("Phone number is required"),
  region: z.string().nonempty("Region is required"),
  socialProofs: z.string().nonempty("Social proofs are required"),
  yourHandle: z.string().nonempty("Handle is required"),
  followers: z.string().nonempty("Followers count is required"),
  profileStatus: z.enum(["public", "incognito"], {
    errorMap: () => ({ message: "Please select a profile status" }),
  }),
  gender: z.enum(["female", "male", "custom"], {
    errorMap: () => ({ message: "Please select a gender" }),
  }),
});

function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };

  return (
    <>
      <Header />
      <main className="w-[100%] flex-grow text_c_0  min-h-screen flex items-center justify-center my-10">
        <div className="w-full max-w-md p-6  bg_c_1 t_c_1000  shadow-lg rounded-2xl">
          <h2 className="text-2xl font-bold  text-center mb-6">
            Apply to join Paid Email
          </h2>
          <p className=" text-center mb-6">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium  mb-1">
                Name*
              </label>
              <input
                {...register("name")}
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg_c_2 t_c_1000 dark:border-gray-600 dark:text-white"
                placeholder="Name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium  mb-1"
              >
                Email*
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg_c_2 t_c_1000 dark:border-gray-600 dark:text-white"
                placeholder="Email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium mb-1"
              >
                Phone Number*
              </label>
              <input
                {...register("phoneNumber")}
                id="phoneNumber"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg_c_2 t_c_1000 dark:border-gray-600 dark:text-white"
                placeholder="Phone Number"
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="region"
                className="block text-sm font-medium  mb-1"
              >
                Region*
              </label>
              <input
                {...register("region")}
                id="region"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg_c_2 t_c_1000 dark:border-gray-600 dark:text-white"
                placeholder="Region"
              />
              {errors.region && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.region.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="socialProofs"
                className="block text-sm font-medium  mb-1"
              >
                Social Proofs*
              </label>
              <input
                {...register("socialProofs")}
                id="socialProofs"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg_c_2 t_c_1000 dark:border-gray-600 dark:text-white"
                placeholder="Social Proofs"
              />
              {errors.socialProofs && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.socialProofs.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="yourHandle"
                className="block text-sm font-medium  mb-1"
              >
                Your Handle*
              </label>
              <input
                {...register("yourHandle")}
                id="yourHandle"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg_c_2 t_c_1000 dark:border-gray-600 dark:text-white"
                placeholder="Your Handle"
              />
              {errors.yourHandle && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.yourHandle.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="followers"
                className="block text-sm font-medium  mb-1"
              >
                How many followers do you have?*
              </label>
              <input
                {...register("followers")}
                id="followers"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg_c_2 t_c_1000 dark:border-gray-600 dark:text-white"
                placeholder="How many followers do you have?"
              />
              {errors.followers && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.followers.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium  mb-1">
                Your profile status*
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    {...register("profileStatus")}
                    type="radio"
                    value="public"
                    className="mr-2"
                  />
                  Public
                </label>
                <label className="flex items-center">
                  <input
                    {...register("profileStatus")}
                    type="radio"
                    value="incognito"
                    className="mr-2"
                  />
                  Incognito
                </label>
              </div>
              {errors.profileStatus && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.profileStatus.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium  mb-1">Gender*</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    {...register("gender")}
                    type="radio"
                    value="female"
                    className="mr-2"
                  />
                  Female
                </label>
                <label className="flex items-center">
                  <input
                    {...register("gender")}
                    type="radio"
                    value="male"
                    className="mr-2"
                  />
                  Male
                </label>
                <label className="flex items-center">
                  <input
                    {...register("gender")}
                    type="radio"
                    value="custom"
                    className="mr-2"
                  />
                  Custom
                </label>
              </div>
              {errors.gender && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.gender.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 cursor-pointer main_color text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign up
            </button>
          </form>
          <div className="mt-4 text-center text1_">
            <NavLink
              to="/LogIn"
              className={({ isActive }) =>
                `text-text_c_0-light dark:text-text_c_0-dark text-base  ${
                  isActive ? "underline" : ""
                }`
              }
            >
              Log in
            </NavLink>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Registration;
