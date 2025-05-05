import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

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
