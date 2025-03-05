import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
            {/* Header p
            <div className="absolute top-4 left-4 flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-200 rounded-full"></div>
                <span className="font-bold text-gray-700">Logo here</span>
            </div>
            <div className="absolute top-4 right-4 text-sm">
                <span className="text-gray-600">Don't have an account?</span>
                <Link to="/register" className="text-green-500 font-semibold ml-1">Sign up!</Link>
            </div>

            {/* Form login chính */}
            <div className="p-8 rounded-lg w-full max-w-md shadow-lg">

                <h2 className="text-2xl font-bold text-center mb-1">Welcome Back</h2>
                <p className="text-center text-gray-500 mb-6">Login into your account</p>

                {/* Nút đăng nhập Google + Facebook */}
                <div className="flex justify-center space-x-4 mb-4">
                <button className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded bg-white">
                        <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
                        <span>Google</span>
                    </button>
                    <button className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded bg-white">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-5 h-5" />
                    <span>Facebook</span>
                    </button>

                </div>

                {/* Dòng phân cách */}
                <p className="text-center text-gray-500 mb-4">Or continue with</p>

                {/* Các input */}
                <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded w-full p-3 mb-3 bg-white" 
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-300 rounded w-full p-3 mb-3 bg-white" 
                />

                {/* Remember me + Recover password */}
                <div className="flex justify-between items-center mb-4">
                    <label className="flex items-center text-gray-600">
                        <input type="checkbox" className="mr-2" />
                        Remember me
                    </label>
                    <a href="#" className="text-red-500 text-sm">Recover Password</a>
                </div>

                {/* Nút login */}
                <button className="w-full border border-gray-900 text-gray-900 py-3 rounded-lg bg-gray hover:bg-gray-100 transition duration-300">
    Log In
</button>

            </div>
        </div>
    );
}

export default Login;
