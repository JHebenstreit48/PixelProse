import Header from "../Components/Header";
import PageSetup from "../Components/NotesCardSetup";
import "../CSS/Header.css";

const CCode = () => {
    const markdownFilePath = '/CNotes/CCode.md';

    return (

        <>
           <Header text="C Code" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CCode;
