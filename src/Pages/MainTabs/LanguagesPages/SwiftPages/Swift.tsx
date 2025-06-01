import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Swift = () => {
    const markdownFilePath = '/SwiftNotes/Swift';

    return (

        <>
            <Header text="Swift" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Swift;
