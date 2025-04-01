import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const Swift = () => {
    const markdownFilePath = '/SwiftNotes/Swift.md';

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
