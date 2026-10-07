import Icon from "../../lib/Icon.jsx";

const Note = ({ children }) => (
    <div className="col-span-full bg-cream py-4 px-5 rounded-xl text-body flex items-center gap-4">
        <Icon name="alert"/>
        <p>{children}</p>
    </div>
);

export default Note;