import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const CPlusPlusCode = () => {
    const markdownFilePath = '/CPlusPlusNotes/CPlusPlusCode.md';

    return (

        <>

            <Header text="C++ Notes Code" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default CPlusPlusCode;
