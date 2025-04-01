import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

const SwiftCode = () => {
    const markdownFilePath = '/SwiftNotes/SwiftNotesCode.md';

    return (

        <>

            <Header text="Swift Notes Code" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default SwiftCode;
