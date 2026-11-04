import Icon from "../../lib/Icon.jsx";

const Note = ({children}) => (
    <div className="col-span-full flex items-start gap-3 rounded-xl bg-cream px-5 py-4 text-body">
        <Icon name="info" className="w-5 h-5 mt-0.5 text-muted"/>
        <p>{children}</p>
    </div>
);

export default Note;