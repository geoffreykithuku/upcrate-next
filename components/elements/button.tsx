import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  className: string;
  variant?: "default" | "outline";
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: "submit";
}

export function Button({
  variant = "default",
  children,
  className,
  href,
  onClick,
  disabled = false,
}: React.PropsWithChildren<ButtonProps>) {
  const variantClassName = variant === "outline" ? "bg-red" : "bg-none";

  if (onClick) {
    return (
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <button
          className={`cursor-pointer font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center content-center gap-4 max-w-max mx-auto ${variantClassName} ${className}`}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`cursor-pointer font-display p-3 pt-2 pb-3 md:text-3xl inline-block max-w-max mx-auto ${variantClassName} ${className}`}
      >
        <Link href={href} className="col-span-2 inline-flex items-center content-center gap-4">
          {children}
        </Link>{" "}
      </motion.div>
    );
  }
}
