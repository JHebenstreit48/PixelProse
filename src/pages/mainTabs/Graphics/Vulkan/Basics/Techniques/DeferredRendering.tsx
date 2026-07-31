import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
