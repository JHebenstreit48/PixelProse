// Auto-generated TSX file: IntegrationTesting

import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const IntegrationTest = () => {
    const markdownFilePath = "/LanguagesPages/CFamily/CNotes/Testing/IntegrationTest.md";

    return (
        <>
            <Header text="C Integration Testing for Real-Time Systems" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default IntegrationTest;
