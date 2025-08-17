import React, { useId, useState } from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  value = "",
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "md",
  type = "text",
}) => {
  const id = useId();
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;
  const [showPassword, setShowPassword] = useState(false);

  const base =
    "w-full rounded-2xl border px-3 pr-10 focus:outline-none transition-shadow shadow-sm disabled:cursor-not-allowed";
  const variantClasses = {
    filled: "bg-gray-100/80 border-transparent focus:ring-2 focus:ring-blue-400 focus:bg-white",
    outlined: "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 bg-white",
    ghost: "border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-400 bg-transparent",
  } as const;
  const sizeClasses = { sm: "text-sm h-9", md: "text-base h-11", lg: "text-lg h-12" } as const;

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  const describedBy = [!invalid && helperText ? helperId : undefined, invalid && errorMessage ? errorId : undefined]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="font-medium text-gray-800 dark:text-gray-100">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type={inputType}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy || undefined}
          className={[
            base,
            variantClasses[variant],
            sizeClasses[size],
            invalid ? "border-red-500 focus:ring-red-200" : "",
            disabled ? "opacity-60" : "",
          ].join(" ")}
        />

        {!!value && !disabled && onChange && (
          <button
            type="button"
            aria-label="Clear input"
            onClick={() =>
              onChange({ target: { value: "" } } as unknown as React.ChangeEvent<HTMLInputElement>)
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-gray-100 active:scale-95"
          >
            ×
          </button>
        )}

        {isPassword && (
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword((s) => !s)}
            className="absolute right-8 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-gray-100 active:scale-95"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        )}
      </div>

      {!invalid && helperText && (
        <span id={helperId} className="text-xs text-gray-500">
          {helperText}
        </span>
      )}
      {invalid && errorMessage && (
        <span id={errorId} className="text-xs text-red-600">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
