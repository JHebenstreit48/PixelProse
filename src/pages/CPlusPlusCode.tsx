import CodePageSetup from "../Components/CodeNotesSetup";
import Header from "../Components/Header";

const CPlusPlusCode = () => {
    const markdownFilePath = '/CPlusPlusNotes/CPlusPlusCode.md';

    return (

        <>

            <Header text="C++ Notes Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default CPlusPlusCode;