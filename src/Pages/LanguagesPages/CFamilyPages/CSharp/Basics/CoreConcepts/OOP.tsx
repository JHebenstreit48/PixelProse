import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const CSharpOOP = () => {
    const markdownFilePath = 'CFamilyNotes/CSharpNotes/Basics/CoreConcepts/OOP.md';

    return (

        <>
            <Header text="OOP" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSharpOOP;
