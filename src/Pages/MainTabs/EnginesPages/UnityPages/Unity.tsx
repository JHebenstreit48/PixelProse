import Header from "@/Components/Shared/Header/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Unity = () => {
    const markdownFilePath = '/UnityNotes/Unity';

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
