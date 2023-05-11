
interface InputProps {
  label: string,
  type: string,
  placeholder: string,
}

const Input = ({ label,type,placeholder  }: InputProps) => (
  <div className="w-full flex flex-col justify-start p-2 gap-2">
    <label htmlFor={label} className='text-white'>{label}</label>
    <input 
      className='w-full p-2 text-black rounded-lg'
      id={label}
      name={label} 
      type={type}
      placeholder={placeholder}
    /> 
  </div>
);


export default Input;