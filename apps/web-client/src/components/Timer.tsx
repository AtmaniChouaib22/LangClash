import React from "react";

interface CircularTimerProps {
  timeLeft: number;
  totalTime: number;
  size?: "sm" | "md" | "lg" | "xl";
  showLabel?: boolean;
  className?: string;
}

export function CircularTimer({
  timeLeft,
  totalTime,
  size = "md",
  showLabel = true,
  className = "",
}: CircularTimerProps) {
  const percentage = (timeLeft / totalTime) * 100;

  const sizeConfig = {
    sm: { width: 60, radius: 24, strokeWidth: 4, fontSize: "text-lg" },
    md: { width: 80, radius: 32, strokeWidth: 5, fontSize: "text-2xl" },
    lg: { width: 120, radius: 52, strokeWidth: 6, fontSize: "text-4xl" },
    xl: { width: 160, radius: 72, strokeWidth: 8, fontSize: "text-5xl" },
  };

  const config = sizeConfig[size];
  const circumference = 2 * Math.PI * config.radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Color based on time remaining
  const getColor = () => {
    if (percentage > 50)
      return {
        stroke: "#10b981",
        text: "text-green-600",
        glow: "shadow-green-500/50",
      };
    if (percentage > 25)
      return {
        stroke: "#f59e0b",
        text: "text-orange-600",
        glow: "shadow-orange-500/50",
      };
    return {
      stroke: "#ef4444",
      text: "text-red-600",
      glow: "shadow-red-500/50",
    };
  };

  const colors = getColor();

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`relative ${timeLeft <= 10 ? "animate-pulse" : ""}`}>
        <svg
          width={config.width}
          height={config.width}
          className={`transform -rotate-90 drop-shadow-lg ${colors.glow}`}
        >
          {/* Background circle */}
          <circle
            cx={config.width / 2}
            cy={config.width / 2}
            r={config.radius}
            stroke="#e5e7eb"
            strokeWidth={config.strokeWidth}
            fill="white"
            className="drop-shadow-md"
          />
          {/* Progress circle */}
          <circle
            cx={config.width / 2}
            cy={config.width / 2}
            r={config.radius}
            stroke={colors.stroke}
            strokeWidth={config.strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-linear"
            style={{
              filter:
                timeLeft <= 10 ? "drop-shadow(0 0 8px currentColor)" : "none",
            }}
          />
        </svg>

        {/* Time display */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div
              className={`font-bold ${config.fontSize} ${colors.text} ${
                timeLeft <= 10 ? "animate-pulse" : ""
              }`}
            >
              {timeLeft}
            </div>
          </div>
        </div>
      </div>

      {showLabel && (
        <div className={`mt-2 text-sm font-medium ${colors.text}`}>
          {timeLeft <= 10 ? "Hurry! ⚡" : "Time Left"}
        </div>
      )}
    </div>
  );
}

interface LinearTimerProps {
  timeLeft: number;
  totalTime: number;
  showNumbers?: boolean;
  className?: string;
}

export function LinearTimer({
  timeLeft,
  totalTime,
  showNumbers = true,
  className = "",
}: LinearTimerProps) {
  const percentage = (timeLeft / totalTime) * 100;

  // Color based on time remaining
  const getColor = () => {
    if (percentage > 50) return "from-green-400 to-green-600";
    if (percentage > 25) return "from-orange-400 to-orange-600";
    return "from-red-400 to-red-600";
  };

  return (
    <div className={`w-full ${className}`}>
      {showNumbers && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Time Remaining
          </span>
          <span
            className={`text-lg font-bold ${
              percentage > 50
                ? "text-green-600"
                : percentage > 25
                ? "text-orange-600"
                : "text-red-600"
            } ${timeLeft <= 10 ? "animate-pulse" : ""}`}
          >
            {timeLeft}s
          </span>
        </div>
      )}
      <div className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${getColor()} h-4 rounded-full transition-all duration-1000 ease-linear`}
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
