import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/solid";
import { connect } from "react-redux";
import { registerUser } from "../../../../redux/users/users.action";

const Login = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const changeDataHandler = (event, init) => {
    const value = event.target.value;
    switch (init) {
      case "name":
        setUserData({
          ...userData,
          name: value,
        });
        break;

      case "email":
        setUserData({
          ...userData,
          email: value,
        });
        break;

      case "password":
        setUserData({
          ...userData,
          password: value,
        });
        break;

      default:
        break;
    }
  };

  const submitData = (event) => {
    event.preventDefault();
    props.registerUser(userData);
    console.log(props.user);
  };

  return (
    <div>
      <button
        className="text-gray-700 uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="flex">
          <UserIcon width={20} height={20}></UserIcon>
          <span className="pl-3">Sign Up</span>
        </div>
        <hr className="my-2" />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="text-right">
                <button
                  className="text-gray-700 text-3xl background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  &times;
                </button>
              </div>
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-24 pb-12 pt-7">
                <div>
                  <a href="/">
                    <svg
                      width="260"
                      height="22"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      alt="logo"
                      className="brand rhf-logo mobile-hide"
                    >
                      <defs>
                        <path id="a" d="M.187.131h18.541v20.98H.188z"></path>
                        <path id="c" d="M.057.145h13.29V17.6H.058z"></path>
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <g transform="translate(125.384 .189)">
                          <mask id="b" fill="#fff">
                            <use xlinkHref="#a"></use>
                          </mask>
                          <path
                            d="M7.595 19.509c-1.376 0-2.448-.396-3.219-1.19-.771-.793-1.157-1.866-1.157-3.217 0-1.724.656-3.159 1.967-4.305l6.037 7.332c-1.099.92-2.308 1.38-3.628 1.38zM5.606 1.645c.796-.455 1.896-.384 2.606.196.764.626 1.008 1.498.993 2.437-.03 1.824-.99 3.136-2.4 4.23C5.614 7.242 4.622 5.95 4.438 4.198c-.11-1.049.344-2.081 1.169-2.554zm13.011 18.158a4.465 4.465 0 01-.845.088c-.664 0-1.245-.21-1.744-.631-.498-.422-1.052-1.083-1.661-1.984.94-1.469 1.412-3.222 1.412-5.26 0-.42-.027-.881-.083-1.38-.028-.177.05-.29.235-.338l1.731-.456-.041-.646c-.37.02-.76.034-1.17.044-.412.01-.853.015-1.322.015a84.177 84.177 0 01-3.172-.06l.028.662 1.717.367a.87.87 0 01.394.176c.088.08.146.211.173.397.056.372.084.857.084 1.455 0 1.459-.305 2.762-.914 3.908L7.534 9.298c2.829-1.4 4.137-3.034 4.137-5.062 0-1.254-.342-2.317-1.24-3.032C9.534.488 8.428.13 7.111.13c-1.494 0-2.745.421-3.752 1.264-1.007.842-1.51 1.964-1.51 3.364 0 .764.14 1.509.422 2.233.282.725.926 1.714 1.932 2.968C1.526 11.45.187 13.33.187 15.6c0 1.676.65 3.003 1.951 3.982 1.301.98 2.903 1.47 4.805 1.47 2.03 0 3.872-.637 5.526-1.91 1.025 1.312 2.267 1.969 3.726 1.969a5.25 5.25 0 002.533-.662l-.11-.646z"
                            fill="#C0A02E"
                            mask="url(#b)"
                          ></path>
                        </g>
                        <path
                          d="M0 2.017h8.104c1.995 0 3.566.548 4.563 1.546.798.798 1.197 1.77 1.197 2.967v.05c0 1.97-1.047 3.067-2.294 3.765 2.02.773 3.267 1.945 3.267 4.289v.05c0 3.192-2.594 4.787-6.533 4.787H0V2.017zm10.049 5.161c0-1.147-.898-1.795-2.519-1.795H3.74v3.69h3.541c1.695 0 2.768-.548 2.768-1.845v-.05zm-1.87 5.087H3.74v3.84h4.564c1.695 0 2.717-.598 2.717-1.895v-.05c0-1.172-.872-1.895-2.842-1.895zM26.41 1.892h3.541l7.48 17.58h-4.014l-1.596-3.915h-7.38l-1.597 3.914H18.93l7.48-17.579zm4.04 10.273l-2.32-5.66-2.318 5.66h4.638zM42.905 2.017h7.98c2.219 0 3.94.623 5.086 1.77.973.973 1.496 2.344 1.496 3.99v.05c0 2.817-1.52 4.588-3.74 5.41l4.264 6.234h-4.488l-3.74-5.585h-3.018v5.585h-3.84V2.017zm7.73 8.478c1.87 0 2.943-.998 2.943-2.469v-.05c0-1.646-1.148-2.493-3.018-2.493h-3.815v5.012h3.89zM64.494 2.017h3.541l8.179 10.747V2.017h3.79V19.47h-3.266L68.285 8.375v11.096h-3.79zM87.933 2.017H101.1v3.416h-9.35v3.54h8.228v3.417h-8.229v3.665h9.476v3.416h-13.29zM106.685 16.928l2.269-2.718c1.57 1.297 3.216 2.12 5.211 2.12 1.57 0 2.519-.624 2.519-1.646v-.05c0-.973-.599-1.471-3.517-2.22-3.515-.897-5.784-1.87-5.784-5.335v-.05c0-3.167 2.543-5.261 6.109-5.261 2.543 0 4.713.797 6.483 2.219l-1.995 2.892c-1.546-1.072-3.067-1.72-4.538-1.72s-2.244.673-2.244 1.52v.05c0 1.147.748 1.522 3.765 2.294 3.541.923 5.536 2.195 5.536 5.237v.05c0 3.466-2.643 5.41-6.409 5.41-2.643 0-5.311-.921-7.405-2.792M149.39 1.933h3.54l8.18 10.747V1.933h3.789v17.455h-3.267L153.18 8.29v11.097h-3.79zM170.56 10.71v-.05c0-4.962 3.914-9.026 9.3-9.026 5.386 0 9.251 4.014 9.251 8.976v.05c0 4.962-3.915 9.026-9.3 9.026-5.387 0-9.252-4.014-9.252-8.976m14.537 0v-.05c0-2.992-2.194-5.486-5.286-5.486-3.092 0-5.236 2.444-5.236 5.436v.05c0 2.992 2.194 5.486 5.286 5.486 3.092 0 5.236-2.444 5.236-5.436M195.27 1.933h8.104c1.994 0 3.565.548 4.563 1.546.798.798 1.197 1.77 1.197 2.967v.05c0 1.97-1.048 3.067-2.294 3.765 2.02.773 3.266 1.945 3.266 4.289v.05c0 3.192-2.593 4.788-6.533 4.788h-8.303V1.933zm10.048 5.162c0-1.148-.897-1.796-2.518-1.796h-3.79v3.69h3.541c1.695 0 2.767-.548 2.767-1.845v-.05zm-1.87 5.086h-4.438v3.84h4.563c1.696 0 2.718-.598 2.718-1.895v-.05c0-1.172-.872-1.895-2.843-1.895zM215.517 1.933h3.84v13.964h8.702v3.49h-12.542z"
                          fill="#54575A"
                        ></path>
                        <g transform="translate(233.816 1.788)">
                          <mask id="d" fill="#fff">
                            <use xlinkHref="#c"></use>
                          </mask>
                          <path
                            fill="#54575A"
                            mask="url(#d)"
                            d="M.057.145h13.166V3.56h-9.35v3.54H12.1v3.417H3.873v3.666h9.475V17.6H.058z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                  <form onSubmit={submitData}>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 undefined"
                      >
                        Name
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          onChange={(event) => changeDataHandler(event, "name")}
                          value={userData.name}
                          type="text"
                          name="name"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 undefined"
                      >
                        Email
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          onChange={(event) =>
                            changeDataHandler(event, "email")
                          }
                          value={userData.email}
                          type="email"
                          name="email"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 undefined"
                      >
                        Password
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          onChange={(event) =>
                            changeDataHandler(event, "password")
                          }
                          value={userData.password}
                          type="password"
                          name="password"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="password_confirmation"
                        className="block text-sm font-medium text-gray-700 undefined"
                      >
                        Confirm Password
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          type="password"
                          name="password_confirmation"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-end mt-4">
                      <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-700 border border-transparent rounded-md active:bg-gray-900 false"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (user) => dispatch(registerUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
