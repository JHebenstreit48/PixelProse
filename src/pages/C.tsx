import Header from "../Components/Header";
import PageSetup from "../Components/NotesCardSetup";
import "../CSS/Header.css";

const C = () => {
    const markdownFilePath = '/CNotes/C.md';

    return (

        <>
           <Header text="C" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default C;
