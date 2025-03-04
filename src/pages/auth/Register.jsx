import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
            {/* Logo góc trái trên */}
            <div className="absolute top-4 left-4 flex items-center space-x-2">
                {/* Nếu có file logo, thay div này bằng <img src="/logo.png" ... /> */}
                <div className="w-6 h-6 bg-green-400 clip-triangle"></div>
                <span className="text-gray-800 font-semibold">Logo here</span>
            </div>

            {/* "have an account? Sign in!" góc phải trên */}
            <div className="absolute top-4 right-4 text-sm">
                <span className="text-gray-600">have an account?</span>
                <Link to="/" className="text-green-500 font-semibold ml-1">Sign in!</Link>
            </div>

            {/* Form chính */}
            <div className=" p-8 rounded-lg w-full max-w-md shadow-lg mt-16">
                <h2 className="text-2xl font-bold text-center mb-2">Get Started With MAKER</h2>
                <p className="text-center text-gray-500 mb-6">Getting started is easy</p>

                {/* Nút Google + Facebook */}
                <div className="flex justify-center space-x-4 mb-4">
                    <button className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded bg-white">
                        <img
                            src="https://www.svgrepo.com/show/355037/google.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        <span>Google</span>
                    </button>
                    <button className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded bg-white">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-5 h-5" />
                    <span>Facebook</span>
                    </button>
                </div>

                <p className="text-center text-gray-500 mb-4">Or continue with</p>

                {/* Các ô nhập */}
                <input
                    type="text"
                    placeholder="Full Name"
                    className="border border-gray-300 rounded w-full p-2 mb-3 bg-white"

                />
                <input
                    type="email"
                    placeholder="Enter Email"
                    className="border border-gray-300 rounded w-full p-2 mb-3 bg-white"

                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-300 rounded w-full p-2 mb-3 bg-white"

                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="border border-gray-300 rounded w-full p-2 mb-3 bg-white"

                />

                {/* Nút Create Account */}
                <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300">
                    Create Account
                </button>

                {/* Thông báo Terms of Use */}
                <p className="mt-4 text-center text-gray-500 text-xs">
                    By continuing you indicate that you read and agreed to the Terms of Use
                </p>
            </div>
        </div>
    );
}

export default Register;
