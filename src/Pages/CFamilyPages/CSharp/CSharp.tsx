import Header from "../Components/Header";
import PageSetup from "../Components/Notes";
import "../CSS/Header.css";

const CSharp = () => {
    const markdownFilePath = '/CSharpNotes/CSharp.md';

    return (

        <>
            <Header text="C#" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSharp;
