import CodePageSetup from "../Components/CodeNotesSetup";
import Header from "../Components/Header";

const JavaCode = () => {
    const markdownFilePath = '/CSharpNotes/CSharpCode.md';

    return (

        <>

            <Header text="Java Notes Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default JavaCode;