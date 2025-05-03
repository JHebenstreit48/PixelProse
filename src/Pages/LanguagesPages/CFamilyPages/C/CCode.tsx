import Header from "@/Components/Header";
import Notes from "@/Components/Notes/NotesRender";

const CCode = () => {
    const markdownFilePath = '/CNotes/CCode.md';

    return (

        <>
            <Header text="C Code" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CCode;
