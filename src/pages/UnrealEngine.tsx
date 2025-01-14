import Header from "../Components/Header";
import PageSetup from "../Components/Notes";
import "../CSS/Header.css";

const UnrealEngine = () => {
    const markdownFilePath = '/UnrealEngineNotes/UnrealEngine.md';

    return (

        <>
            <Header text="Unreal Engine" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default UnrealEngine;
