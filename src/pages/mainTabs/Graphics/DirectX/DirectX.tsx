import Notes from "@/components/pageComponents/notes/notes";

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
