"use client";
import DOMPurify from "dompurify"
import ReactMarkdown from "react-markdown";

interface TermsProps {
    steps: string;
}

// Displays terms of sales on the sevice page
export default function Terms({ steps } : TermsProps) {

    const safeSteps = DOMPurify.sanitize(steps)
    
    return(
        <div className="terms">
            <h3>Les etapes de la création de votre site</h3>
            <ReactMarkdown>{safeSteps}</ReactMarkdown>
        </div>
    )
}
