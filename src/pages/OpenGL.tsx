import Header from "../Components/Header";
import PageSetup from "../Components/NotesCardSetup";
import "../CSS/Header.css";

const OpenGL = () => {
    const markdownFilePath = '/OpenGLNotes/OpenGL.md';

    return (

        <>
           <Header text="OpenGL" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default OpenGL;