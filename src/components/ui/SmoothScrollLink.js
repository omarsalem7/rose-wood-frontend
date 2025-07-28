"use client";
import { useRouter } from "next/navigation";
import { scrollToElement } from "@/lib/utils";

const SmoothScrollLink = ({
  children,
  elementId,
  locale,
  className = "",
  onClick = null,
  ...props
}) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);

    // Check if we're already on the home page
    const isOnHomePage = window.location.pathname === `/${locale}`;

    if (isOnHomePage) {
      // If already on home page, just scroll
      scrollToElement(elementId);
    } else {
      // Navigate to home page with hash
      router.push(`/${locale}#${elementId}`);

      // Scroll to element after navigation with longer delay
      setTimeout(() => {
        scrollToElement(elementId);
      }, 300);
    }
  };

  return (
    <a
      href={`/${locale}#${elementId}`}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};

export default SmoothScrollLink;
