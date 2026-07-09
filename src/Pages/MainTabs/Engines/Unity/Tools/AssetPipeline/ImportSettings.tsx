import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ImportSettings = () => {
  const markdownFilePath = 'Engines/Unity/Tools/AssetPipeline/ImportSettings';

  return (
    <>
      <PageLayout>
        <PageTitle title="Import Settings" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ImportSettings;
