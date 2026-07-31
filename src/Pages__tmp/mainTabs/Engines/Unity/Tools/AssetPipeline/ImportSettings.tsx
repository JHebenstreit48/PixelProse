import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
