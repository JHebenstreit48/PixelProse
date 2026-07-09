import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
