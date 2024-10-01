'use client';
import clsx from 'clsx';
import { FieldErrors, FieldValues, UseFormRegister, RegisterOptions } from 'react-hook-form';

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  validation?: RegisterOptions;
  errors: FieldErrors;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type = 'text',
  required = false,
  register,
  validation,
  errors,
  disabled = false,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          id={id}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required, ...validation })}
          className={clsx(
            `
            form-input
            block
            w-full
            rounded-md
            border-0
            py-1.5
            text-gray-900
            shadow-sm
            ring-1
            ring-inset
            ring-gray-300
            placeholder:text-gray-400
            focus:ring-2
            focus:ring-inset
            focus:ring-cyan-600
            sm:text-sm
            sm:leading-6
            `,
            errors[id] && 'focus:ring-rose-500',
            disabled && 'opacity-50 cursor-default'
          )}
        />
          {errors[id] && (
              <p className="mt-1 text-sm text-rose-600">{errors[id]?.message?.toString()}</p>
          )}
      </div>
    </div>
  );
};
export default Input;
