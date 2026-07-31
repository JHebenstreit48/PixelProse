import Notes from "@/components/pageComponents/Notes/Notes";

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
