import Notes from "@/components/pageComponents/notes/notes";

const OpenGL = () => {
    const markdownFilePath = '/OpenGLNotes/OpenGL';

    return (

        <>
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default OpenGL;
