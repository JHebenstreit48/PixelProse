import CodePageSetup from "../Components/CodeNotesSetup";
import Header from "../Components/Header";

const CSharpCode = () => {
    const markdownFilePath = '/CSharpNotes/CSharpCode.md';

    return (

        <>

            <Header text="C# Notes Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default CSharpCode;