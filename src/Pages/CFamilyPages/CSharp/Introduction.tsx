import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const CSharpIntro = () => {
    const markdownFilePath = '/CFamilyNotes/CSharpNotes/Basics/Introduction.md';

    return (

        <>
            <Header text="C# Introduction" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSharpIntro;
