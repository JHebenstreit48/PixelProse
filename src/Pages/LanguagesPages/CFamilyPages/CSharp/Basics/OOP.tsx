import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const CSharpIntro = () => {
    const markdownFilePath = '/CFamilyNotes/CSharpNotes/Basics/OOP.md';

    return (

        <>
            <Header text="C# OOP" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSharpIntro;
