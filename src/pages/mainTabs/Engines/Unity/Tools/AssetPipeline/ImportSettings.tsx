import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
