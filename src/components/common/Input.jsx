export const SignupAndSiginInput = ({
  type,
  id,
  name,
  onChange,
  onblur,
  value,
  placeholder,
  className,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      onChange={onChange}
      onBlur={onblur}
      value={value}
      placeholder={placeholder}
      autoComplete="given-name"
      className={`rounded-sm border border-solid border-gray-300 bg-gray-100 px-2 py-2 text-sm outline-none ${className}`}
    />
  );
};

export const SignupAndSigninInputErr = ({ message }) => (
  <p className="mt-1 text-xs text-red-400">{message}</p>
);
