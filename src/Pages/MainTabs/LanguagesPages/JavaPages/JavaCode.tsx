import Notes from "@/Components/PageComponents/Notes/NotesRender";
import Header from "@/Components/Shared/Header/Header";

const JavaCode = () => {
    const markdownFilePath = '/CSharpNotes/CSharpCode';

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
