import Header from "../Components/Header";
import PageSetup from "../Components/NotesCardSetup";
import "../CSS/Header.css";

const Swift = () => {
    const markdownFilePath = '/SwiftNotes/Swift.md';

    return (

        <>
           <Header text="Swift" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Swift;