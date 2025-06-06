import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const CSharpCollections = () => {
    const markdownFilePath = 'LanguagesPages/CFamilyNotes/CSharpNotes/Basics/CoreConcepts/Collections';

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
