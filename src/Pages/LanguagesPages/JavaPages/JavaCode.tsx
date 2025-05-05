import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/PageComponents/Header";

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
