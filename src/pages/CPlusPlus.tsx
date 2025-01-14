import Header from "../Components/Header";
import PageSetup from "../Components/Notes";
import "../CSS/Header.css";

const CPlusPlus = () => {
    const markdownFilePath = '/CPlusPlusNotes/CPlusPlus.md';

    return (

        <>
            <Header text="C++" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CPlusPlus;
