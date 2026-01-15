import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RendererAndPipeline = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/Rendering/RendererAndPipeline';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Renderer & Pipeline" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RendererAndPipeline;
