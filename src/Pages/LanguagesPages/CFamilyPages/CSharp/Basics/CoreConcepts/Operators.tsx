import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const CSharpOperators = () => {
    const markdownFilePath = 'CFamilyNotes/CSharpNotes/Basics/CoreConcepts/Operators.md';

    return (

        <>
            <Header text="Operators" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSharpOperators;
