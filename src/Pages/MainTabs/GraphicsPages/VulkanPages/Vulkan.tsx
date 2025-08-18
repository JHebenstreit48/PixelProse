import Header from "@/Components/Shared/Header/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Vulkan = () => {
    const markdownFilePath = '/VulkanNotes/Vulkan';

    return (

        <>
            <Header text="Vulkan" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Vulkan;
