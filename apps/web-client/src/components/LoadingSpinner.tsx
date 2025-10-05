import React from "react";

type SpinnerSize = "sm" | "md" | "lg" | "xl";
type SpinnerVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "dots"
  | "pulse";

interface LoadingSpinnerProps {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  message?: string;
  className?: string;
}

export function LoadingSpinner({
  size = "md",
  variant = "primary",
  message,
  className = "",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-10 w-10",
    lg: "h-16 w-16",
    xl: "h-24 w-24",
  };

  const borderWidthClasses = {
    sm: "border-2",
    md: "border-3",
    lg: "border-4",
    xl: "border-4",
  };

  const variantClasses = {
    primary: "border-blue-600 border-t-transparent",
    secondary: "border-gray-600 border-t-transparent",
    success: "border-green-600 border-t-transparent",
    danger: "border-red-600 border-t-transparent",
    dots: "",
    pulse: "",
  };

  if (variant === "dots") {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <div className="flex space-x-2">
          <div
            className={`${
              size === "sm" ? "w-2 h-2" : size === "md" ? "w-3 h-3" : "w-4 h-4"
            } bg-blue-600 rounded-full animate-bounce`}
          ></div>
          <div
            className={`${
              size === "sm" ? "w-2 h-2" : size === "md" ? "w-3 h-3" : "w-4 h-4"
            } bg-blue-600 rounded-full animate-bounce`}
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className={`${
              size === "sm" ? "w-2 h-2" : size === "md" ? "w-3 h-3" : "w-4 h-4"
            } bg-blue-600 rounded-full animate-bounce`}
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
        {message && (
          <p className="mt-4 text-gray-600 text-center animate-pulse">
            {message}
          </p>
        )}
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <div className="relative">
          <div
            className={`${sizeClasses[size]} rounded-full bg-blue-600 animate-ping absolute`}
          ></div>
          <div
            className={`${sizeClasses[size]} rounded-full bg-blue-600 relative`}
          ></div>
        </div>
        {message && (
          <p className="mt-4 text-gray-600 text-center animate-pulse">
            {message}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} ${borderWidthClasses[size]} ${variantClasses[variant]} rounded-full animate-spin`}
      ></div>
      {message && (
        <p className="mt-4 text-gray-600 text-center animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
}
