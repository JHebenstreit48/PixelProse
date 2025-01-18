import Notes from "@/Components/Notes";
import Header from "@/Components/Header";

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
