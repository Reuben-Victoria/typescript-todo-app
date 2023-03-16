type InputProps = {
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  label: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  [x: string]: any;
};

export const Input = ({
  type,
  onChange,
  value,
  name,
  label,
  placeholder,
  onBlur,
  ...rest
}: InputProps) => {
  return (
    <div className='mt-[1.55rem] text-neutral-darkGray' {...rest}>
      <label htmlFor={name} className='block mb-[0.375rem]'>
        {label}
      </label>
      <div className='input-box p-[0rem] w-[100%]'>
        <input
          className=' border-transparent w-[100%] p-2.5 rounded-lg h-[100%]'
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
};
