import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const CSharpIntro = () => {
    const markdownFilePath = 'CFamilyNotes/CSharpNotes/Basics/Fundamentals/Introduction.md';

    return (

        <>
            <Header text="C# Intro" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSharpIntro;
