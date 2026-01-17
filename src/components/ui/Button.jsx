export default function Button({ children, variant = "primary", saveNote }) {
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 hover:bg-gray-200",
    outline: "border hover:bg-gray-50",
    danger: "border border-red-500 text-red-600 hover:bg-red-50",
  };

  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition ${styles[variant]}`}
      onClick={() => saveNote()}
    >
      {children}
    </button>
  );
}
