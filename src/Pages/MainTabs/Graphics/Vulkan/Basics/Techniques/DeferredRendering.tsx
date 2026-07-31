import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const DeferredRendering = () => {
  const markdownFilePath = 'Graphics/Vulkan/Basics/Techniques/DeferredRendering';

  return (
    <>
      <PageLayout>
        <PageTitle title="Deferred Rendering" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeferredRendering;
