import Notes from "@/Components/PageComponents/Notes/Notes";
import Header from "@/Components/Shared/Header/Header";

const SwiftCode = () => {
    const markdownFilePath = '/SwiftNotes/SwiftNotesCode';

    return (

        <>

            <Header text="Swift Notes Code" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>

    );
};

export default SwiftCode;
