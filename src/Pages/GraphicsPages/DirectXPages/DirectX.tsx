import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const DirectX = () => {
    const markdownFilePath = '/DirectXNotes/DirectX.md';

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
