import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TemplatesAndAssetStore = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Tools/EditorAndWorkflow/TemplatesAndAssetStore';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Templates & Asset Store" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TemplatesAndAssetStore;
