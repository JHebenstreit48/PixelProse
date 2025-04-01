import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

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
