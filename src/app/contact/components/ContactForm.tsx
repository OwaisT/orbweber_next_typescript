"use client";
import { logPageView, otherEventAnalytics } from "@/utils/AnalyticsHelpers";
import axios from "axios";
import { useEffect, useState } from "react";

// Data structure for object to be passed on contact page
interface ContactData {
    contact: {
        copy: string;
    };
}

// Contact form component for contact page.
// Provides user the instructions for contacting and a form for filling
export default function ContactForm(props : { contactData: ContactData }) {
    axios.defaults.headers.common['Authorization'] = process.env.NEXT_PUBLIC_API_KEY;
    const backendLink = process.env.NEXT_PUBLIC_BACKEND_LINK;
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        company_name: '',
        phone: '',
        email: '',
        message: ''
    });

    // Handles changes in the field and updates the form data state
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handles form submission on submit button click, and calls the senEmail function
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        otherEventAnalytics("Form Submit", "Contact Form Submit", "Contact Form Submit", 1);
        sendEmail();
    };

    // Triggers email sending mechanism by making API call to the backend
    // Updates the forntend based on response from backend
    async function sendEmail() {
        try{
            setLoading(true);
            const dataToSend = formData;
            const response = await axios.post(backendLink + "send_email", dataToSend, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                // setCurrentStatus("success");
                setLoading(false);
            }
        } catch (error) {
            console.error('Error sending email:', error);
            // setCurrentStatus("error");
            setLoading(false);
        }
    }

    useEffect(() => {
        logPageView("/contact")
    }, []);

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <p className="contact-info">{props.contactData.contact.copy}</p>
            <ContactInput type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Votre Nom*" required={true} />
            <ContactInput type="text" name="company_name" value={formData.company_name} onChange={handleChange} placeholder="Votre Entreprise*" required={true} />
            <ContactInput type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Téléphone (ex. 0600112233) facultatif" required={false} inputMode="tel" pattern="[0-9]{10}" />
            <ContactInput type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Votre Email*" required={true} />
            <textarea className="contact-field contact-message" name="message" value={formData.message} onChange={handleChange} placeholder="Votre message" required />
            <button type="submit" className="btn-bg-tp-txt-pr-txt-bdr-pr-txt" disabled={loading}>Envoyer</button>
        </form>
    );
}

// Data structure for contact form
interface ContactInputProps {
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    required: boolean;
    inputMode?: "email" | "search" | "tel" | "text" | "url" | "none" | "numeric" | "decimal";
    pattern?: string;
}

// ContactInput component for rendering individual input fields with standard properties
function ContactInput(props : ContactInputProps) {
    return(
        <input type={props.type} className="contact-field" name={props.name} value={props.value} onChange={props.onChange} 
            placeholder={props.placeholder} required={props.required} inputMode={props.inputMode} pattern={props.pattern} />
    );
}