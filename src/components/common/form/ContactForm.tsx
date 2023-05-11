import Input from "@/components/common/inputs/Input";
import TextArea from "@/components/common/inputs/TextArea";

const ContactForm = () => (
  <form 
  className='sm:w-3/4 lg:w-1/2 flex flex-col items-center justify-center xl:justify-start gap-4 p-2 border-2 border-yellow-200 rounded-lg'
  
  >
    <Input
      label='name'
      type='text'
      placeholder="What's your name?"
    />
    <Input
      label='email'
      type='email'
      placeholder="What's your email?"
    />

    <TextArea
      label='message'
      placeholder='What do you want to say?'
    />
    <div>
      <button 
        className='w-full p-2 rounded-lg bg-yellow-200 text-purple py-2 px-4'
        type='submit' 
        >
          Send
        </button>
    </div>
  </form>
)

export default ContactForm;