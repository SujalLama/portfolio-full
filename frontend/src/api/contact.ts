import { emailSetting } from "./emailJs-config"

export const submitEmail = async (formData : {name: string; email: string, tel: string;}) => {
    const data = {
        ...emailSetting,
        template_params: {
            'from_name': formData.name,
            'from_email': formData.email,
            'tel': formData.tel
        }
    }
     
    try {
        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": 'application/json'
                }
        })

        if(res.status === 200) {
            return {status: true, data: res}
        }

        return {status: false, error: 'error occured'}
    } catch (error) {
        return {status: false, error: JSON.stringify(error)};
    }
}