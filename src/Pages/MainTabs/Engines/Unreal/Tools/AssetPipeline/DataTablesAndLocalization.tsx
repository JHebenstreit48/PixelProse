import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DataTablesAndLocalization = () => {
  const markdownFilePath = 'Engines/Unreal/Tools/AssetPipeline/DataTablesAndLocalization';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="DataTables & Localization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DataTablesAndLocalization;
