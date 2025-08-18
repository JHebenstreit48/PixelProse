import Header from "@/Components/Shared/Header/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const CSharpConsole = () => {
    const markdownFilePath = 'LanguagesPages/CFamilyNotes/CSharpNotes/Basics/CoreConcepts/Console';

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