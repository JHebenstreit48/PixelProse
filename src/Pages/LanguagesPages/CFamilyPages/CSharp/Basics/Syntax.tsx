import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

const CSharpSyntax = () => {
    const markdownFilePath = '/CFamilyNotes/CSharpNotes/Basics/Syntax.md';

    return (

        <>

            <Header text="C# Syntax and Types" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default CSharpSyntax;
