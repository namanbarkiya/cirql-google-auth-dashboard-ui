import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigation = useNavigate();

    return (
        <div className="containerLogin">
            <div className="section section-1 hidden md:flex">
                <h1 className="text-5xl font-semibold mb-4 text-white">
                    Board.
                </h1>
            </div>
            <div className="section section-2">
                <div className="max-w-lg w-80 mx-auto">
                    <h2 className="text-2xl font-semibold">Sign In</h2>
                    <span>Sign in to your account</span>
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
