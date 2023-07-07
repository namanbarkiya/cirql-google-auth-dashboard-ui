import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUserInfo } from "../store/reducer/UserReducer";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect } from "react";

export default function LoginPage() {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const userInfo = useSelector(selectUser);

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log(tokenResponse);
            checkUser(tokenResponse.access_token);
        },
    });

    const checkUser = async (token: string) => {
        try {
            const res = await axios.get(
                `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: "application/json",
                    },
                }
            );
            const { name, id, email, picture } = res.data;
            console.log(name, id, email, picture);
            dispatch(setUserInfo({ name, id, picture, email }));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        console.log(userInfo);
    }, [userInfo]);

    return (
        <div className="containerLogin">
            <div className="section section-1 hidden md:flex">
                <h1 className="text-5xl font-semibold mb-4 text-white">
                    Board.
                </h1>
            </div>

            <div className="section section-2">
                <div className="max-w-lg w-130 mx-auto">
                    <h2 className="text-2xl font-semibold">Sign In</h2>
                    <span>Sign in to your account</span>
                    <div className="flex">
                        <button
                            className="bg-white hover:bg-gray-200 text-gray-800 font-thin py-2 px-4 rounded-lg inline-flex items-center mt-2 mr-2"
                            onClick={() => login()}
                        >
                            <FcGoogle className="h-5 w-5" />
                            <span className="ml-2">Sign in with Google</span>
                        </button>
                        <button className="bg-white hover:bg-gray-200 text-gray-800 font-thin py-2 px-4 rounded inline-flex items-center mt-2">
                            <BsApple className="h-5 w-5" />
                            <span className="ml-2">Sign in with Apple</span>
                        </button>
                    </div>
                    <div className="bg-white rounded-lg p-6 mt-4">
                        <form>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 border rounded-md"
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm mb-2"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 border rounded-md"
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <a
                                className="text-sm text-gray-500 underline cursor-pointer"
                                href="#"
                            >
                                Forgot Password?
                            </a>
                            <div className="flex justify-between items-center mb-4 mt-2">
                                <button
                                    className="bg-black w-full text-white px-4 py-2 rounded-md"
                                    onClick={() => navigation("/app")}
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
