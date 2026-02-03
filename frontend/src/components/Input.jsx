const Input = ({ label, type = 'text', value, onChange, placeholder, error, required = false, className = '', ...rest }) => {
  return (
    <div className="mb-5">
      {label && (
        <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">
          {label} {required && <span className="text-primary-400">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border ${error ? 'border-red-500/50 ring-1 ring-red-500/50' : 'border-slate-700 focus:border-primary-500'
          } text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 ${className}`}
        required={required}
        {...rest}
      />
      {error && <p className="text-red-400 text-sm mt-1.5 ml-1">{error}</p>}
    </div>
  );
};

export default Input;
