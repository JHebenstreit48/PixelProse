import Notes from "@/components/pageComponents/Notes/Notes";

const Vulkan = () => {
    const markdownFilePath = '/VulkanNotes/Vulkan';

    return (

        <>
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Vulkan;
