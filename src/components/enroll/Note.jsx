import Icon from "../../lib/Icon.jsx";

const Note = ({ children }) => (
    // <div className="bg-cream rounded-xl py-4 px-5 flex items-start gap-4 text-body">
    //     <Icon name="info" className="w-5 h-5 mt-0.5 text-muted" />
    //     <p>{children}</p>
    // </div>
    <div className="col-span-full bg-cream py-4 px-5 rounded-xl text-body flex items-center gap-4">
        <Icon name="alert"/>
        <p>{children}</p>
    </div>
);

export default Note;