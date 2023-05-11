
interface TextAreaProps {
  label: string,
  placeholder: string,

}
const TextArea = ({label,placeholder}: TextAreaProps) => (
  <div className="w-full flex flex-col justify-start p-2 gap-2">
    <label htmlFor='{label}' className='text-white'>{label}</label>
    <textarea 
      className='w-full p-2 text-black rounded-lg'
      name='{label}' 
      id='{label}' 
      placeholder={placeholder}
    />
  </div>  
);

export default TextArea;