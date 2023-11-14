import {FaLocationDot, FaMobile, FaEnvelope} from 'react-icons/fa6';
import ContactForm from '@/components/ContactForm';

interface IContactProps {
    title: string;
    subTitle: string;
    address: string;
    mail: string;
    phone: string;
}

export default function Contact({data}: {data: IContactProps}) {
  return (
    <section id="contact" className="relative flex items-top justify-center py-24 bg-white dark:bg-primary-darker sm:items-center">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-10 md:mr-4 lg:mr-8 bg-gray-100 dark:bg-primary-darker sm:rounded-md">
                    <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-bold">
                        {data.title}
                    </h1>
                    <p className="text-normal text-gray-600 dark:text-gray-400 mt-2">
                        {data.subTitle}
                    </p>

                    <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                        
                        <FaLocationDot size="24" />
                        <div className="ml-4 text-md tracking-wide ">
                            {data.address}
                        </div>
                    </div>

                    <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                        <FaEnvelope size="24" />
                        <div className="ml-4 text-md tracking-wide ">
                            {data.mail}
                        </div>
                    </div>
                    <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                        <FaMobile size="24" />
                        <div className="ml-4 text-md tracking-wide ">
                            {data.phone}
                        </div>
                    </div>

                </div>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}
