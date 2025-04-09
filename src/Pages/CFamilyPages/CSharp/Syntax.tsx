import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

const CSharpCode = () => {
    const markdownFilePath = '/CSharpNotes/CSharpCode.md';

    return (

        <>

            <Header text="C# Notes Code" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default CSharpCode;
