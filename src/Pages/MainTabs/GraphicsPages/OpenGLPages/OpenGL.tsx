import Header from "@/Components/Shared/Header/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const OpenGL = () => {
    const markdownFilePath = '/OpenGLNotes/OpenGL';

    return (

        <>
            <Header text="OpenGL" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default OpenGL;
