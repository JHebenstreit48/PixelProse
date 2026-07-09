import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CanvasWebGPUTypes = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Interop/GraphicsAndAudio/CanvasWebGPUTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Canvas/WebGPU Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CanvasWebGPUTypes;
