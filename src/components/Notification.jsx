function Notification({ message }) {
    if (!message) return null;

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 card px-6 py-3 border-4 border-primary bg-white text-primary font-semibold shadow-lg rounded-md animate-fade-in-down transition-all duration-300">
            {message}
        </div>
    );
}

export default Notification;
