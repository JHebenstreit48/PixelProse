// Auto-generated TSX file: UnitTesting

import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const UnitTest = () => {
    const markdownFilePath = "/LanguagesPages/CFamily/CNotes/Testing/UnitTest.md";

    return (
        <>
            <Header text="C Unit Testing" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default UnitTest;
