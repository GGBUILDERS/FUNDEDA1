export function Button({ children, className = "" }) {
  return (
    <button className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-4 py-2 ${className}`}>
      {children}
    </button>
  );
}
