import Notes from "@/Components/Notes/NotesRender";
import Header from "@/Components/Header";

const JavaCode = () => {
    const markdownFilePath = '/CSharpNotes/CSharpCode.md';

    return (

        <>

            <Header text="Java Notes Code" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default JavaCode;
