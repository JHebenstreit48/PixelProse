import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ImportAndReimport = () => {
  const markdownFilePath = 'Engines/Unreal/Tools/AssetPipeline/ImportAndReimport';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Import & Reimport" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ImportAndReimport;
