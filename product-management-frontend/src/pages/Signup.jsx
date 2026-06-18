import AuthPanel from "../components/auth/AuthPanel";
import FloatingShapes from "../components/auth/FloatingShapes";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../services/authService";

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSignup = async () => {
        try {
            const data = await signupUser(formData);

            localStorage.setItem(
                "token",
                data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            navigate("/home");

        } catch (error) {
            alert(
                error.response?.data?.message ||
                "Signup Failed"
            );
        }
    };
    return (
        <div className="min-h-screen bg-[#1f1f1f] flex items-center justify-center p-6">
            <div className="w-full max-w-6xl h-[550px] bg-white rounded-xl overflow-hidden flex shadow-2xl">

                {/* Left Side - Welcome Panel */}
                <div className="relative w-1/2">
                    <FloatingShapes />

                    <AuthPanel
                        title="Welcome Back!"
                        description="To keep connected with us please login with your personal info"
                        buttonText="SIGN IN"
                        navigateTo="/login"
                    />
                </div>

                {/* Right Side - Signup Form */}
                <div className="w-1/2 flex items-center justify-center bg-white">
                    <div className="w-full max-w-sm">
                        <h1 className="text-5xl font-bold text-[#E8A10A] mb-10 text-center">
                            Create Account
                        </h1>

                        <div className="space-y-4">
                            <div className="relative">
                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className="w-full bg-gray-100 py-3 pl-12 pr-4 rounded-md outline-none"
                                />
                            </div>

                            <div className="relative">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="w-full bg-gray-100 py-3 pl-12 pr-4 rounded-md outline-none"
                                />
                            </div>

                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    className="w-full bg-gray-100 py-3 pl-12 pr-4 rounded-md outline-none"
                                />
                            </div>

                            <div className="flex justify-center pt-4">
                                <button
                                    onClick={handleSignup}
                                    className="bg-[#E8A10A] text-white px-14 py-3 rounded-full font-semibold hover:scale-105 transition"
                                >
                                    SIGN UP
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Signup;