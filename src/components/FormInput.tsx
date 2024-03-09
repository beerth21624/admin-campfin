import { Label } from 'flowbite-react';

const FormInput = ({
    htmlFor,
    label,
    children

}:{
    htmlFor?: string,
    label: string,
    children: React.ReactNode
}) => {
  return (
    <div>
        <div className='mb-2 block'>
              <Label htmlFor={htmlFor} className='mb-2'>{label}</Label >
        </div>
        {children}
    </div>
    
  )
}

export default FormInput