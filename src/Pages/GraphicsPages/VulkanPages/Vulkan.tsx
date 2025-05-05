import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const Vulkan = () => {
    const markdownFilePath = '/VulkanNotes/Vulkan.md';

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
