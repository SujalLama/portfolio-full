import { FormEvent, useState } from 'react';
import {FaLocationDot, FaMobile, FaEnvelope} from 'react-icons/fa6';
import { submitEmail } from '../api/contact';

export default function Contact() {
  return (
    <section id="contact" className="relative flex items-top justify-center py-24 bg-white dark:bg-primary-darker sm:items-center">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-10 md:mr-4 lg:mr-8 bg-gray-100 dark:bg-primary-darker sm:rounded-md">
                    <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-bold">
                        Get in touch
                    </h1>
                    <p className="text-normal text-gray-600 dark:text-gray-400 mt-2">
                        Let's build together!
                    </p>

                    <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                        
                        <FaLocationDot size="24" />
                        <div className="ml-4 text-md tracking-wide ">
                            Kathmandu, Nepal
                        </div>
                    </div>

                    <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                        <FaEnvelope size="24" />
                        <div className="ml-4 text-md tracking-wide ">
                            lsujal41@gmail.com
                        </div>
                    </div>
                    <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                        <FaMobile size="24" />
                        <div className="ml-4 text-md tracking-wide ">
                            +977 9818575922
                        </div>
                    </div>

                </div>
                <ContactForm />

               
            </div>
        </div>
    </section>
  )
}

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tel: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    function changeHandler (e : FormEvent<HTMLInputElement>) {
        if(!e.currentTarget) return;

        setFormData({
            ...formData,
            [e.currentTarget.name] : e.currentTarget.value
        })
    }

    async function submitForm(e: FormEvent) {
        e.preventDefault();
        
        if(!formData.email || !formData.name || !formData.tel) {
            setError('Please, Fill all the fields!!!')
            return;
        }

        setLoading(true);

        const res = await submitEmail(formData);
        if(!res) return;

        if(res.status) {
            setLoading(false);
            setSuccess(true)
            return;
        }
        
        setLoading(false);
        setError(res.error as string);
        
    }

    if(error) {
        return <div className='pt-10 md:p-10 flex flex-col justify-center items-center'>
            <div className='flex flex-col text-2xl text-red-700 max-w-[230px] text-center'>{error}</div>
            <button className='px-8 py-1.5 bg-secondary mt-4 text-white rounded-md hover:scale-105 transition' onClick={() => setError('')}>Retry</button>
            </div>
    }

    if(success) {
        return <div className='pt-10 md:p-10 flex flex-col justify-center'>
            <div className='flex flex-col text-2xl max-w-[230px] text-center text-green-700'>Form Submitted successfully.</div></div>
    }
    
    return (
        <form className="pt-10 md:p-10 flex flex-col justify-center" onSubmit={submitForm}>
        <div className="flex flex-col">
            <label htmlFor="name" className="hidden">Full Name</label>
            <input type="name" disabled={loading} name="name" id="name" onChange={changeHandler} placeholder="Full Name" 
            className="w-100 mt-2 py-3 px-3 rounded-md dark:text-white dark:bg-primary border border-primary-dark dark:border-primary-lighter text-gray-800 dark:disabled:bg-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed" />
        </div>

        <div className="flex flex-col mt-2">
            <label htmlFor="email" className="hidden">Email</label>
            <input type="email" disabled={loading} name="email" id="email" onChange={changeHandler} placeholder="Email" 
            className="w-100 mt-2 py-3 px-3 rounded-md dark:text-white dark:bg-primary border border-primary-dark dark:border-primary-lighter text-gray-800 dark:disabled:bg-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed" />
        </div>

        <div className="flex flex-col mt-2">
            <label htmlFor="tel" className="hidden">Number</label>
            <input type="tel" disabled={loading} name="tel" id="tel" onChange={changeHandler} placeholder="Telephone Number" 
            className="w-100 mt-2 py-3 px-3 rounded-md dark:text-white dark:bg-primary border border-primary-dark dark:border-primary-lighter text-gray-800 dark:disabled:bg-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed" />
        </div>

        <button type="submit" disabled={loading} 
        className="border flex items-center justify-center bg-primary  border-primary hover:bg-primary-darker dark:bg-primary-darker dark:border-secondary dark:hover:bg-secondary text-white py-3 px-6 rounded-md mt-6 transition ease-in-out duration-300 dark:disabled:hover:bg-primary disabled:cursor-not-allowed">
            Submit
            {loading && <svg aria-hidden="true" className="w-4 h-4 ml-2 text-gray-200 animate-spin dark:text-gray-600 fill-secondary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>}
            {loading && <span className="sr-only">Loading...</span>}
        </button>
    </form>
    )
}