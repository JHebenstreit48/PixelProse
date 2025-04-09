import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const CSharpIntro = () => {
    const markdownFilePath = '/CSharpNotes/Introduction.md';

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
