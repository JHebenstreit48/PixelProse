import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const CSharpIntro = () => {
    const markdownFilePath = '/CFamilyNotes/CSharpNotes/Basics/Collections.md';

    return (

        <>
            <Header text="C# Collections" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSharpIntro;
