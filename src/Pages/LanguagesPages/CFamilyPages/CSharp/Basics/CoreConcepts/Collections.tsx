import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const CSharpCollections = () => {
    const markdownFilePath = 'CFamilyNotes/CSharpNotes/Basics/CoreConcepts/Collections.md';

    return (

        <>
            <Header text="Collections" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSharpCollections;
