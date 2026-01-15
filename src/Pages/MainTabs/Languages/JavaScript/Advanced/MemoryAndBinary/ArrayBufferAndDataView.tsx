import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ArrayBufferAndDataView = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/MemoryAndBinary/ArrayBufferAndDataView';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="ArrayBuffer & DataView" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ArrayBufferAndDataView;
