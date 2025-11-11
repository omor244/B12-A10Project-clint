import { useState } from "react";
import { Link } from "react-router";
const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch("https://your-server.com/api/forgot-password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        const data = await res.json();
        setLoading(false);

        if (data.success) {
            setMessage("✅ Reset link sent! Check your email.");
        } else {
            setMessage("❌ Email not found. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="bg-[#1f2937] p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-white text-center mb-2">
                    Forgot Password
                </h2>
               

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-white/50 font-medium  hover:bg-white/80 text-black py-3 rounded-xl transition"
                    >
                        {loading ? "Sending..." : "Send Reset Link"}
                    </button>
                </form>

                {message && (
                    <p className="text-center text-sm mt-4 text-gray-700">{message}</p>
                )}

                <div className="text-center mt-6">
                    <Link
                        to="/login"
                        className="text-green-600 hover:underline text-sm font-medium"
                    >
                        ← Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default ForgotPassword