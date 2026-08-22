import { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ChevronDown } from "lucide-react";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  /** Form field name — this is what gets submitted. */
  name: string;
  label: string;
  options: SelectOption[];
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  /** Validation message to show under the field. */
  error?: string | null;
};

/**
 * Dropdown styled to match the site rather than the operating system.
 *
 * A native <select> cannot have its option list styled — browsers draw that
 * popup themselves. This renders the list as markup instead, and mirrors the
 * chosen value into a hidden input so FormData still picks it up.
 */
export function SelectField({
  name,
  label,
  options,
  placeholder,
  required = false,
  value,
  onChange,
  error,
}: SelectFieldProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const id = useId();

  const listboxId = `${id}-listbox`;
  const labelId = `${id}-label`;
  const errorId = `${id}-error`;
  const selected = options.find((o) => o.value === value) ?? null;

  // Close on outside click
  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);

  // Keep the highlighted option scrolled into view
  useEffect(() => {
    if (!open || activeIndex < 0) return;
    const active = listRef.current?.children[activeIndex] as HTMLElement | undefined;
    active?.scrollIntoView({ block: "nearest" });
  }, [open, activeIndex]);

  const openList = (startIndex: number) => {
    setActiveIndex(startIndex);
    setOpen(true);
  };

  const commit = (index: number) => {
    const option = options[index];
    if (!option) return;
    onChange(option.value);
    setOpen(false);
    buttonRef.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const selectedIndex = options.findIndex((o) => o.value === value);

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (!open) openList(selectedIndex >= 0 ? selectedIndex : 0);
        else setActiveIndex((i) => Math.min(i + 1, options.length - 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        if (!open) openList(selectedIndex >= 0 ? selectedIndex : options.length - 1);
        else setActiveIndex((i) => Math.max(i - 1, 0));
        break;
      case "Home":
        if (open) {
          event.preventDefault();
          setActiveIndex(0);
        }
        break;
      case "End":
        if (open) {
          event.preventDefault();
          setActiveIndex(options.length - 1);
        }
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (!open) openList(selectedIndex >= 0 ? selectedIndex : 0);
        else commit(activeIndex);
        break;
      case "Escape":
        if (open) {
          event.preventDefault();
          setOpen(false);
        }
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <label
        id={labelId}
        htmlFor={`${id}-button`}
        className="block text-sm font-semibold text-[#003060] mb-2"
      >
        {label} {required && "*"}
      </label>

      {/* Carries the value into FormData on submit */}
      <input type="hidden" name={name} value={value} />

      <button
        ref={buttonRef}
        id={`${id}-button`}
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        aria-labelledby={labelId}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={!!error}
        onClick={() =>
          open ? setOpen(false) : openList(options.findIndex((o) => o.value === value))
        }
        onKeyDown={handleKeyDown}
        className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl border bg-white text-left outline-none transition-all duration-200 ${
          error
            ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            : "border-gray-200 focus:border-[#003060] focus:ring-2 focus:ring-[#003060]/20"
        } ${open ? "border-[#003060] ring-2 ring-[#003060]/20" : ""}`}
      >
        <span className={selected ? "text-[#2E2E2E]" : "text-[#2E2E2E]/50"}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#003060] flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            ref={listRef}
            id={listboxId}
            role="listbox"
            aria-labelledby={labelId}
            tabIndex={-1}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-30 left-0 right-0 mt-2 max-h-64 overflow-auto rounded-2xl border border-gray-100 bg-white p-2"
            style={{ boxShadow: "0 12px 30px rgba(0,48,96,0.14)" }}
          >
            {options.map((option, index) => {
              const isSelected = option.value === value;
              const isActive = index === activeIndex;
              return (
                <li
                  key={option.value}
                  id={`${id}-option-${index}`}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => commit(index)}
                  className={`flex items-center justify-between gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors duration-150 ${
                    isActive ? "bg-[#003060]/8" : ""
                  } ${isSelected ? "font-semibold text-[#003060]" : "text-[#2E2E2E]"}`}
                >
                  <span>{option.label}</span>
                  {isSelected && (
                    <Check className="w-5 h-5 text-[#FFB703] flex-shrink-0" />
                  )}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>

      {error && (
        <p id={errorId} className="mt-2 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
