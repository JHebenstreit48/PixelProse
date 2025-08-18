import Header from "@/Components/Shared/Header/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const DirectX = () => {
    const markdownFilePath = '/DirectXNotes/DirectX';

    return (

        <>
            <Header text="DirectX" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default DirectX;
