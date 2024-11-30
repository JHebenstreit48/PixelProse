import CodePageSetup from "../Components/CodeNotesSetup";
import Header from "../Components/Header";

const SwiftCode = () => {
    const markdownFilePath = '/SwiftNotes/SwiftNotesCode.md';

    return (

        <>

            <Header text="Swift Notes Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default SwiftCode;