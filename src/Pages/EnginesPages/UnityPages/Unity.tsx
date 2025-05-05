import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

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
