import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/Shared/Header";

const CSharpSyntax = () => {
    const markdownFilePath = 'LanguagesPages/CFamilyNotes/CSharpNotes/Basics/Fundamentals/Syntax';

    return (

        <>

            <Header text="Syntax / Types" size="md" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default CSharpSyntax;
