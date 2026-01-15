import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DeferredRendering = () => {
  const markdownFilePath = 'Graphics/Vulkan/Basics/Techniques/DeferredRendering';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Deferred Rendering" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeferredRendering;
