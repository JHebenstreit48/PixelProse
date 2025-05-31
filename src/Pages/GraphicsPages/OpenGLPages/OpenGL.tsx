import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const OpenGL = () => {
    const markdownFilePath = '/OpenGLNotes/OpenGL.md';

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
