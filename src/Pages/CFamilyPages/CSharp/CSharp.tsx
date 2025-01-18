import Header from "@/Components/Header";
import Notes from "@/Components/Notes";

const CSharp = () => {
    const markdownFilePath = '/CSharpNotes/CSharp.md';

    return (

        <>
            <Header text="C#" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSharp;
