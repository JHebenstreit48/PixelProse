import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const CLanguage = () => {
    const markdownFilePath = '/CNotes/C.md';

    return (

        <>
            <Header text="C" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CLanguage;
