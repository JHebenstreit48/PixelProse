import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ResourceCompiler = () => {
  const markdownFilePath = 'Engines/Cry/Tools/AssetPipeline/ResourceCompiler';

  return (
    <>
      <PageLayout>
        <PageTitle title="Resource Compiler" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ResourceCompiler;
