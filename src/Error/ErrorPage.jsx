import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-green-100 text-center px-4">
            {/* Big 404 Text */}
            <h1 className="text-[120px] font-extrabold text-green-700 drop-shadow-lg">
                404
            </h1>

            {/* Message */}
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                Oops! Page Not Found
            </h2>
            <p className="text-gray-600 max-w-md mb-8">
                The page you’re looking for doesn’t exist or has been moved.
                Let’s get you back on track to sustainable living.
            </p>

            {/* Back Home Button */}
            <Link
                to="/"
                className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition-all"
            >
                <ArrowLeft size={20} />
                Back to Home
            </Link>

        
         
        </div>
    );
};

export default ErrorPage;
