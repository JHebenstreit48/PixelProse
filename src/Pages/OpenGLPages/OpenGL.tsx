import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

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
