import Header from "@/Components/PageComponents/Header";
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
