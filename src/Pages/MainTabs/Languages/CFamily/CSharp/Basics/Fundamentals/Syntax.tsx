import Notes from "@/Components/PageComponents/Notes/Notes";
import Header from "@/Components/Shared/Header/Header";

const Syntax = () => {
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

export default Syntax;
