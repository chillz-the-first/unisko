import Button from "./Button.jsx";
import {useEffect, useState} from "react";

const CopyBtn = ({text, label}) => {
    const [status, setStatus] = useState("idle");
    const isCopied = status === "copied";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setStatus("copied");
        }
        catch (e) {
            console.error("Failed to copy text", e);
            setStatus("idle");
        }
    };

    useEffect(() => {
        if (status !== "copied") return;

        const timer = setTimeout(() => setStatus("idle"), 2000);
        return () => clearTimeout(timer);
    }, [status]);

    return (
        <div>
            <Button variant="copy" onClick={handleCopy}>
                <span>{isCopied ? "Copied" : "Copy"}</span>
                <span className="sr-only"> {label}</span>
            </Button>

            <div className="sr-only" role="status" aria-live="polite">
                {isCopied ? `${label} copied` : ""}
            </div>
        </div>

    );
};

export default CopyBtn;