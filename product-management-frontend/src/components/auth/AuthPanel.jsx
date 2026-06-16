import { useNavigate } from "react-router-dom";
import authPanelBg from "../../assets/auth-panel-bg.png";

const AuthPanel = ({
    title,
    description,
    buttonText,
    navigateTo,
}) => {
    const navigate = useNavigate();

    return (
        <div className="relative w-full h-full bg-[#003f63] overflow-hidden flex items-center justify-center">

            {/* Background Decoration */}
            <img
                src={authPanelBg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-white px-8">
                <h1 className="text-5xl font-bold mb-6 text-center">
                    {title}
                </h1>

                <p className="text-center text-lg max-w-sm text-gray-200 mb-10">
                    {description}
                </p>

                <button
                    onClick={() => navigate(navigateTo)}
                    className="
            border-2 border-white
            rounded-full
            px-12 py-3
            font-semibold
            transition-all duration-300
            hover:bg-white
            hover:text-[#003f63]
          "
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default AuthPanel;