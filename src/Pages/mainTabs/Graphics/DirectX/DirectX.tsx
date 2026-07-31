import Notes from "@/components/pageComponents/Notes/Notes";

const DirectX = () => {
    const markdownFilePath = '/DirectXNotes/DirectX';

    return (

        <>
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default DirectX;
