import Header from "@/Components/Shared/Header/Header";
import Notes from "@/Components/PageComponents/Notes/Notes";

const CSharpOperators = () => {
    const markdownFilePath = 'LanguagesPages/CFamilyNotes/CSharpNotes/Basics/CoreConcepts/Operators';

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
