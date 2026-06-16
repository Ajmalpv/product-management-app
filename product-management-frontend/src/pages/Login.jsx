import AuthPanel from "../components/auth/AuthPanel";
import FloatingShapes from "../components/auth/FloatingShapes";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
    return (
        <div className="min-h-screen bg-[#1f1f1f] flex items-center justify-center p-6">
            <div className="w-full max-w-6xl h-[550px] bg-white rounded-xl overflow-hidden flex shadow-2xl">

                {/* Left Side - Login Form */}
                <div className="w-1/2 flex items-center justify-center bg-white">
                    <div className="w-full max-w-sm">
                        <h1 className="text-5xl font-bold text-[#E8A10A] mb-10 text-center">
                            Sign In to
                            <br />
                            Your Account
                        </h1>

                        <div className="space-y-4">
                            <div className="relative">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-gray-100 py-3 pl-12 pr-4 rounded-md outline-none"
                                />
                            </div>

                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full bg-gray-100 py-3 pl-12 pr-4 rounded-md outline-none"
                                />
                            </div>

                            <div className="text-center">
                                <button className="text-sm underline ">
                                    forgot password?
                                </button>
                            </div>

                            <div className="flex justify-center pt-4">
                                <button className="bg-[#E8A10A] text-white px-14 py-3 rounded-full font-semibold hover:scale-105 transition">
                                    SIGN IN
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Welcome Panel */}
                <div className="relative w-1/2">
                    <FloatingShapes />

                    <AuthPanel
                        title="Hello Friend!"
                        description="Enter your personal details and start your journey with us"
                        buttonText="SIGN UP"
                        navigateTo="/signup"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;