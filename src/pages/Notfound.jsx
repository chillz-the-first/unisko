import Section from "../components/Section.jsx";
import Button from "../components/Button.jsx";

const NotFound = () => (
    <Section>
        <div className="space-y-4">
            <h1 className="font-semibold text-navy text-display" tabIndex={-1}>
                Page not found.
            </h1>
            <p className="text-lede text-muted max-w-[46ch]">
                The page you are looking for does not exist or has moved.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
                <Button to="/">Go to the home page</Button>
                <Button to="/contact" variant="outline">Contact us</Button>
            </div>
        </div>
    </Section>
);

export default NotFound;