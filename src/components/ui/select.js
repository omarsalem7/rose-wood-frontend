"use client";
import * as React from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

// Dynamically import react-select to avoid SSR issues
const Select = dynamic(() => import("react-select"), {
  ssr: false,
  loading: () => (
    <div className="h-10 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-500">
      Loading...
    </div>
  ),
});

// Custom Select component with search functionality
const CustomSelect = React.forwardRef(function CustomSelect(
  {
    className,
    options = [],
    value,
    onChange,
    placeholder = "Select...",
    isDisabled = false,
    isLoading = false,
    isSearchable = true,
    ...props
  },
  ref
) {
  // Only pass through props that are valid for react-select
  const selectComponentProps = {
    ...props,
    // Remove any props that might cause DOM warnings
    selectProps: undefined,
    form: undefined,
    name: undefined,
    id: undefined,
    // Remove react-select internal props that might leak through
    getStyles: undefined,
    getClassNames: undefined,
    cx: undefined,
    clearValue: undefined,
    getValue: undefined,
    setValue: undefined,
    hasValue: undefined,
    isMulti: undefined,
    isRtl: undefined,
    selectOption: undefined,
    isDisabled: undefined,
    innerRef: undefined,
  };
  // All hooks must be called at the top level, before any conditional returns
  const [isMounted, setIsMounted] = React.useState(false);
  const instanceId = React.useMemo(
    () => `select-${Math.random().toString(36).substr(2, 9)}`,
    []
  );

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Transform options to react-select format if they're not already
  const transformedOptions = React.useMemo(() => {
    if (options.length === 0) return [];

    // Check if options are already in react-select format
    if (options[0] && options[0].options) {
      return options;
    }

    // Transform from our custom format to react-select format
    return Object.entries(options).map(([category, categoryProducts]) => ({
      label: category,
      options: categoryProducts.map((product) => ({
        value: product.value,
        label: product.label,
        image: product.image,
        data: product,
      })),
    }));
  }, [options]);

  // Show loading state during SSR and initial client render
  if (!isMounted) {
    return (
      <div className="h-10 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-500">
        {placeholder}
      </div>
    );
  }

  // Custom option component to show product images
  const CustomOption = ({
    data,
    label,
    innerProps,
    isFocused,
    isSelected,
    ...props
  }) => {
    // Only pass through props that are safe for DOM elements
    const safeProps = {
      className: props.className,
      style: props.style,
      "data-testid": props["data-testid"],
      "aria-label": props["aria-label"],
      "aria-describedby": props["aria-describedby"],
      "aria-labelledby": props["aria-labelledby"],
      role: props.role,
      tabIndex: props.tabIndex,
      onKeyDown: props.onKeyDown,
      onMouseDown: props.onMouseDown,
      onMouseMove: props.onMouseMove,
      onMouseOver: props.onMouseOver,
    };

    return (
      <div
        {...innerProps}
        {...safeProps}
        className={cn(
          "flex items-center px-3 py-2 gap-2 cursor-pointer font-alexandria hover:bg-gray-100 transition-colors",
          isSelected && "bg-[#5f381f19]"
        )}
      >
        {data.image && (
          <img
            src={data.image}
            alt={label}
            className="h-6 w-6 rounded object-cover mr-3"
          />
        )}
        <span className="text-sm font-alexandria">{label}</span>
      </div>
    );
  };

  // Custom group header component
  const CustomGroupHeader = ({ children, ...props }) => {
    // Only pass through props that are safe for DOM elements
    const safeProps = {
      className: props.className,
      style: props.style,
      "data-testid": props["data-testid"],
      "aria-label": props["aria-label"],
      "aria-describedby": props["aria-describedby"],
      "aria-labelledby": props["aria-labelledby"],
      role: props.role,
      tabIndex: props.tabIndex,
    };

    return (
      <div
        {...safeProps}
        className="px-3 py-2 text-sm font-semibold text-gray-700 bg-gray-50 font-alexandria"
      >
        {children}
      </div>
    );
  };

  // Custom styles to match your current design
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: "40px",
      border: "1px solid #d1d5db",
      borderRadius: "6px",
      backgroundColor: "white",
      boxShadow: state.isFocused ? "0 0 0 2px #3b82f6" : "none",
      borderColor: state.isFocused ? "#3b82f6" : "#d1d5db",
      "&:hover": {
        borderColor: "#9ca3af",
      },
    }),
    menu: (provided) => ({
      ...provided,
      border: "1px solid #e5e7eb",
      borderRadius: "6px",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      zIndex: 50,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent", // No default background
      color: "#111827",
      "&:hover": {
        backgroundColor: "#f3f4f6", // Only highlight on hover
      },
      "&:active": {
        backgroundColor: "#f3f4f6", // Highlight when clicked
      },
    }),
    group: (provided) => ({
      ...provided,
      paddingBottom: 0,
    }),
    groupHeading: (provided) => ({
      ...provided,
      padding: "8px 12px",
      fontSize: "14px",
      fontWeight: "600",
      color: "#374151",
      backgroundColor: "#f9fafb",
      borderBottom: "1px solid #e5e7eb",
      margin: 0,
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#9ca3af",
      fontSize: "14px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#111827",
      fontSize: "14px",
    }),
    input: (provided) => ({
      ...provided,
      color: "#111827",
      fontSize: "14px",
    }),
  };

  return (
    <Select
      key={`select-${isMounted ? "client" : "server"}`}
      instanceId={instanceId}
      ref={ref}
      options={transformedOptions}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isSearchable={isSearchable}
      components={{
        Option: CustomOption,
        GroupHeading: CustomGroupHeader,
      }}
      styles={customStyles}
      className={cn("font-alexandria", className)}
      {...selectComponentProps}
    />
  );
});

CustomSelect.displayName = "CustomSelect";

// Export the custom select and other components for backward compatibility
export { CustomSelect as Select, CustomSelect };

// Export individual components that might be used elsewhere
export const SelectGroup = ({ children, ...props }) => (
  <div {...props} className="space-y-1">
    {children}
  </div>
);

export const SelectValue = ({ children, ...props }) => (
  <span {...props} className="text-sm text-gray-900">
    {children}
  </span>
);

export const SelectTrigger = ({ children, ...props }) => (
  <div {...props} className="w-full">
    {children}
  </div>
);

export const SelectContent = ({ children, ...props }) => (
  <div {...props} className="w-full">
    {children}
  </div>
);

export const SelectLabel = ({ children, ...props }) => (
  <div
    {...props}
    className="text-sm font-semibold text-gray-700 mb-2 font-alexandria"
  >
    {children}
  </div>
);

export const SelectItem = ({ children, ...props }) => (
  <div
    {...props}
    className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer font-alexandria"
  >
    {children}
  </div>
);

export const SelectSeparator = ({ ...props }) => (
  <div {...props} className="h-px bg-gray-200 my-1" />
);

export const SelectScrollUpButton = ({ ...props }) => (
  <div {...props} className="h-6 w-6" />
);

export const SelectScrollDownButton = ({ ...props }) => (
  <div {...props} className="h-6 w-6" />
);

// For backward compatibility with existing code
export const SearchableSelectContent = CustomSelect;
