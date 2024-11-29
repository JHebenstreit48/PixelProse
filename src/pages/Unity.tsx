import Header from "../Components/Header";
import PageSetup from "../Components/NotesCardSetup";
import "../CSS/Header.css";

const Unity = () => {
    const markdownFilePath = '/UnityNotes/Unity.md';

    return (

        <>
           <Header text="Unity" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Unity;