import Header from "@/Components/Shared/Header/Header";
import Notes from "@/Components/PageComponents/Notes/Notes";

const CSharpIntro = () => {
    const markdownFilePath = 'LanguagesPages/CFamilyNotes/CSharpNotes/Basics/Fundamentals/Introduction';

    return (

        <>
            <Header text="Introduction" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSharpIntro;
