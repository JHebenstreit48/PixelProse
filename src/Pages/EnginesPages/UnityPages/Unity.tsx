import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const Unity = () => {
    const markdownFilePath = '/UnityNotes/Unity.md';

    return (

        <>
            <Header text="Unity" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Unity;
