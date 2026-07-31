import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
