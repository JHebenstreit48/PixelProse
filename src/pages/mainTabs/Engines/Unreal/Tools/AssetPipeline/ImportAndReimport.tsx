import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ImportAndReimport = () => {
  const markdownFilePath = 'Engines/Unreal/Tools/AssetPipeline/ImportAndReimport';

  return (
    <>
      <PageLayout>
        <PageTitle title="Import & Reimport" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ImportAndReimport;
