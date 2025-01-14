import Header from "../Components/Header";
import PageSetup from "../Components/Notes";
import "../CSS/Header.css";

const Vulkan = () => {
    const markdownFilePath = '/VulkanNotes/Vulkan.md';

    return (

        <>
            <Header text="Vulkan" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Vulkan;
