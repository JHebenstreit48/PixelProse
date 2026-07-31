import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const TemplatesAndAssetStore = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Tools/EditorAndWorkflow/TemplatesAndAssetStore';

  return (
    <>
      <PageLayout>
        <PageTitle title="Templates & Asset Store" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TemplatesAndAssetStore;
