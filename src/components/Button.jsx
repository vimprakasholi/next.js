import Spinner from "./Spinner";

const Button = ({
  label,
  loading = false,
  type = "submit",
  className = "bg-primary/80 hover:bg-primary text-center transition w-full",
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      className={`relative text-white font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer ${className}`}
    >
      {label}
      {loading && (
        <Spinner className="absolute w-4 h-4 fill-secondary top-2.5 right-3" />
      )}
    </button>
  );
};

export default Button;
