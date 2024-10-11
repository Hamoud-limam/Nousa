export default function Error() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-6xl font-bold text-red-600 mb-4">Error 404</h1>
                <p className="text-xl text-gray-700 mb-8">Sorry, we couldn t find the page you re looking for.</p>
                <a href="/" className="text-lg text-blue-600 hover:underline">
                    Go back to the homepage
                </a>
            </div>
        </div>
    );
}

