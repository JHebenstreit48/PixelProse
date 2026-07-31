import PageTitle from "@/components/pageComponents/pageTitle";
import Notes from "@/components/pageComponents/notes/notes";

const ControlFlow = () => {
    const markdownFilePath = 'LanguagesPages/CFamilyNotes/CSharpNotes/Basics/CoreConcepts/ControlFlow';

    return (

        <>
            <PageTitle title="Control Flow in C#" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default ControlFlow;
