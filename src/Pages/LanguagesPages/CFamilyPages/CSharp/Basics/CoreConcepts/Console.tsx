import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const CSharpConsole = () => {
    const markdownFilePath = 'CFamilyNotes/CSharpNotes/Basics/CoreConcepts/Console.md';

    return (

        <>
            <Header text="Console" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSharpConsole;