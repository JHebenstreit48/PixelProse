import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const DataTablesAndLocalization = () => {
  const markdownFilePath = 'Engines/Unreal/Tools/AssetPipeline/DataTablesAndLocalization';

  return (
    <>
      <PageLayout>
        <PageTitle title="DataTables & Localization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DataTablesAndLocalization;
