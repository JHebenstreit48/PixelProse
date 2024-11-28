import Header from "../Components/Header";
import PageSetup from "../Components/NotesCardSetup";
import "../CSS/Header.css";

const CSharp = () => {
    const markdownFilePath = '/CSharp/CSharp.md';

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
