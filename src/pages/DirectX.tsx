import Header from "../Components/Header";
import PageSetup from "../Components/NotesCardSetup";
import "../CSS/Header.css";

const DirectX = () => {
    const markdownFilePath = '/DirectXNotes/DirectX.md';

    return (

        <>
           <Header text="DirectX" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default DirectX;
