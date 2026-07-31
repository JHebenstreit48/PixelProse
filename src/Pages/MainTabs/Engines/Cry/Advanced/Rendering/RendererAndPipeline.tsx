import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const RendererAndPipeline = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/Rendering/RendererAndPipeline';

  return (
    <>
      <PageLayout>
        <PageTitle title="Renderer & Pipeline" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RendererAndPipeline;
